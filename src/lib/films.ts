// Numbers for the Films chapter, worked out at build time from the Letterboxd export
// (src/lib/data/letterboxd.json, made by scripts/letterboxd.js).

import data from '$lib/data/letterboxd.json';
import { filmDirectors } from '$lib/content';

export interface Film {
	name: string;
	year: number;
	rating: number | null;
	liked: boolean;
	url: string;
}

const films: Film[] = data.films;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** '2026-09-10' → '10 Sep 2026' (or 'Sep 2026' with day = false). */
export function formatDate(iso: string, day = true): string {
	const [y, m, d] = iso.split('-').map(Number);
	return `${day ? `${d} ` : ''}${months[m - 1]} ${y}`;
}

const rated = films.filter((f) => f.rating !== null) as (Film & { rating: number })[];

/** Films per rating, for every half star from ½ to 5. */
const ratings = Array.from({ length: 10 }, (_, i) => {
	const stars = (i + 1) / 2;
	return { stars, count: rated.filter((f) => f.rating === stars).length };
});
const mostGiven = ratings.reduce((a, b) => (b.count > a.count ? b : a));

/** Films per decade of release, oldest decade first, empty decades included. */
const decadeOf = (year: number) => Math.floor(year / 10) * 10;
const firstDecade = Math.min(...films.map((f) => decadeOf(f.year)));
const lastDecade = Math.max(...films.map((f) => decadeOf(f.year)));
const decades = Array.from({ length: (lastDecade - firstDecade) / 10 + 1 }, (_, i) => {
	const decade = firstDecade + i * 10;
	return { label: `${decade}s`, count: films.filter((f) => decadeOf(f.year) === decade).length };
});

/** Fails the build on a misspelt title, rather than quietly counting it out. */
const directors = filmDirectors
	.map((d) => {
		const missing = d.films.filter((title) => !films.some((f) => f.name === title));
		if (missing.length)
			throw new Error(
				`content.ts filmDirectors: not in the Letterboxd export: ${missing.join(', ')}`
			);
		return { name: d.name, count: d.films.length };
	})
	.sort((a, b) => b.count - a.count);

export const filmStats = {
	profile: `https://letterboxd.com/${data.username}/`,
	since: formatDate(data.joined, false),
	updated: formatDate(data.exported),
	count: films.length,
	liked: films.filter((f) => f.liked).length,
	average: rated.reduce((sum, f) => sum + f.rating, 0) / rated.length,
	ratings,
	mostGiven,
	decades,
	directors,
	/** The highest-rated films (4½ stars and up), best first, then newest. */
	favourites: rated
		.filter((f) => f.rating >= 4.5)
		.sort((a, b) => b.rating - a.rating || b.year - a.year),
	latest: data.latest
};
