// One-time setup: gets the Spotify "refresh token" that lets the build fetch your listening
// stats without you logging in each time. Run it on your own computer, not on GitHub.
//
// 1. On https://developer.spotify.com/dashboard create an app (needs Spotify Premium).
//    - Redirect URI: http://127.0.0.1:8888/callback
//    - API: Web API
// 2. Copy the app's Client ID and Client secret, then run:
//      SPOTIFY_CLIENT_ID=... SPOTIFY_CLIENT_SECRET=... node scripts/spotify-auth.js
// 3. Open the link it prints, log in, accept. The terminal then shows your refresh token.
// 4. On GitHub: repository Settings → Secrets and variables → Actions → New repository secret.
//    Add SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET and SPOTIFY_REFRESH_TOKEN.
//
// The token can only read your top artists/tracks and recently played tracks.
// Never commit it. To revoke it: spotify.com → Account → Manage apps → Remove access.

import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';

const { SPOTIFY_CLIENT_ID: clientId, SPOTIFY_CLIENT_SECRET: clientSecret } = process.env;
if (!clientId || !clientSecret) {
	console.error(
		'Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET first (see the top of this file).'
	);
	process.exit(1);
}

const port = 8888;
const redirectUri = `http://127.0.0.1:${port}/callback`;
const scopes = ['user-top-read', 'user-read-recently-played'];
const state = randomBytes(16).toString('hex');

const authorizeUrl =
	'https://accounts.spotify.com/authorize?' +
	new URLSearchParams({
		response_type: 'code',
		client_id: clientId,
		scope: scopes.join(' '),
		redirect_uri: redirectUri,
		state
	});

const server = createServer(async (req, res) => {
	const url = new URL(req.url ?? '/', redirectUri);
	if (url.pathname !== '/callback') {
		res.writeHead(404).end();
		return;
	}
	const reply = (status, message) => {
		res.writeHead(status, { 'content-type': 'text/plain; charset=utf-8' }).end(message);
		server.close();
	};
	if (url.searchParams.get('state') !== state)
		return reply(400, 'State mismatch. Run the script again.');
	const code = url.searchParams.get('code');
	if (!code) return reply(400, `Spotify said: ${url.searchParams.get('error') ?? 'no code'}`);

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
		},
		body: new URLSearchParams({ grant_type: 'authorization_code', code, redirect_uri: redirectUri })
	});
	const token = await response.json();
	if (!response.ok || !token.refresh_token) {
		console.error('Token exchange failed:', token);
		return reply(500, 'Token exchange failed, see the terminal.');
	}
	console.log('\nYour refresh token (save it as the SPOTIFY_REFRESH_TOKEN secret on GitHub):\n');
	console.log(token.refresh_token + '\n');
	reply(200, 'Done. The refresh token is in your terminal; you can close this tab.');
});

server.listen(port, '127.0.0.1', () => {
	console.log('Open this link in your browser and log in to Spotify:\n');
	console.log(authorizeUrl + '\n');
});
