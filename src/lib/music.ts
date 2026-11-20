// Listening stats for the Music chapter, from src/lib/data/spotify.json
// (fetched by scripts/spotify.js at build time).

import data from '$lib/data/spotify.json';

export interface MusicArtist {
	name: string;
	url: string;
	image: string | null;
	genres: string[];
}

export interface MusicTrack {
	name: string;
	artists: string[];
	url: string;
	image: string | null;
}

export type Range = 'short' | 'medium' | 'long';

export interface MusicData {
	/** True for the placeholder file in the repo: shown in `npm run dev` only, never deployed. */
	sample: boolean;
	updated: string;
	topArtists: Record<Range, MusicArtist[]>;
	topTracks: Record<Range, MusicTrack[]>;
	recent: MusicTrack[];
}

export const music = data as MusicData;

/** Spotify's three time ranges, in the order the chapter walks through them. */
export const ranges: { key: Range; when: string; title: string }[] = [
	{ key: 'short', when: 'Last 4 weeks', title: 'On repeat right now' },
	{ key: 'medium', when: 'Last 6 months', title: 'This season' },
	{ key: 'long', when: 'Last 12 months', title: 'The long run' }
];

/** The genres that come up most among the given artists. Empty if Spotify lists none. */
export function topGenres(artists: MusicArtist[], count = 5): string[] {
	const tally = new Map<string, number>();
	for (const a of artists) for (const g of a.genres) tally.set(g, (tally.get(g) ?? 0) + 1);
	return [...tally.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, count)
		.map(([genre]) => genre);
}
