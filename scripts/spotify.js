// Fetches your Spotify listening stats into src/lib/data/spotify.json, which the Music
// chapter reads. The deploy workflow runs it before every build (and once a day on a
// schedule), using the repository secrets set up with scripts/spotify-auth.js.
//
// Run it locally too, to see your own data in `npm run dev`:
//   SPOTIFY_CLIENT_ID=... SPOTIFY_CLIENT_SECRET=... SPOTIFY_REFRESH_TOKEN=... node scripts/spotify.js
//
// Without credentials, or if Spotify fails, the existing file is kept and the build carries
// on: a Spotify outage never blocks a deploy. Recently played tracks are stored without
// timestamps, so the site doesn't reveal when you listen.

import { writeFileSync } from 'node:fs';

const TOP = 10; // artists and tracks per time range
const RECENT = 5; // recently played tracks (distinct)

const {
	SPOTIFY_CLIENT_ID: clientId,
	SPOTIFY_CLIENT_SECRET: clientSecret,
	SPOTIFY_REFRESH_TOKEN: refreshToken
} = process.env;

// "::warning::" lines show up as warnings in the GitHub Actions run summary.
const warn = (message) => console.log(`::warning::Spotify: ${message}`);

if (!clientId || !clientSecret || !refreshToken) {
	console.log('Spotify: no credentials set, keeping src/lib/data/spotify.json as it is.');
	process.exit(0);
}

async function accessToken() {
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
		},
		body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: refreshToken })
	});
	const token = await response.json();
	if (!response.ok)
		throw new Error(`token refresh failed (${response.status}): ${JSON.stringify(token)}`);
	if (token.refresh_token && token.refresh_token !== refreshToken)
		warn(
			'Spotify issued a new refresh token. If fetching starts failing, run scripts/spotify-auth.js again and update the secret.'
		);
	return token.access_token;
}

/** The image closest to 300px wide (big enough for the page, small enough to load fast). */
function pickImage(images = []) {
	if (!images.length) return null;
	const sorted = [...images].sort((a, b) => (a.width ?? 0) - (b.width ?? 0));
	return (sorted.find((i) => (i.width ?? 0) >= 300) ?? sorted.at(-1)).url;
}

const artist = (a) => ({
	name: a.name,
	url: a.external_urls?.spotify ?? `https://open.spotify.com/artist/${a.id}`,
	image: pickImage(a.images),
	genres: a.genres ?? []
});

const track = (t) => ({
	name: t.name,
	artists: t.artists.map((a) => a.name),
	url: t.external_urls?.spotify ?? `https://open.spotify.com/track/${t.id}`,
	image: pickImage(t.album?.images)
});

try {
	const token = await accessToken();
	const get = async (path) => {
		const response = await fetch(`https://api.spotify.com/v1${path}`, {
			headers: { authorization: `Bearer ${token}` }
		});
		if (!response.ok)
			throw new Error(`GET ${path} failed (${response.status}): ${await response.text()}`);
		return response.json();
	};

	const ranges = { short: 'short_term', medium: 'medium_term', long: 'long_term' };
	const topArtists = {};
	const topTracks = {};
	for (const [key, range] of Object.entries(ranges)) {
		topArtists[key] = (await get(`/me/top/artists?time_range=${range}&limit=${TOP}`)).items.map(
			artist
		);
		topTracks[key] = (await get(`/me/top/tracks?time_range=${range}&limit=${TOP}`)).items.map(
			track
		);
	}

	const played = (await get('/me/player/recently-played?limit=50')).items.map((i) => i.track);
	const recent = played
		.filter((t, i) => played.findIndex((u) => u.id === t.id) === i)
		.slice(0, RECENT)
		.map(track);

	const data = {
		sample: false,
		updated: new Date().toISOString().slice(0, 10),
		topArtists,
		topTracks,
		recent
	};
	const out = new URL('../src/lib/data/spotify.json', import.meta.url);
	writeFileSync(out, JSON.stringify(data, null, '\t') + '\n');
	console.log(
		`Spotify: saved ${topArtists.medium.length} artists, ${topTracks.medium.length} tracks (6 months) and ${recent.length} recent tracks.`
	);
} catch (error) {
	warn(`${error.message}. Keeping the data already there.`);
}
