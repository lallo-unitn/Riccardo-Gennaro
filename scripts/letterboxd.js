// Turns a Letterboxd data export into src/lib/data/letterboxd.json, which the Films chapter reads.
//
// 1. On letterboxd.com: Settings → Data → Export your data. Unzip the file you get.
// 2. Run:  node scripts/letterboxd.js ~/Downloads/letterboxd-<username>-<date>-utc
// 3. Commit src/lib/data/letterboxd.json. Don't commit the export itself.
//
// Only public information is copied: films, release years, star ratings, likes,
// the latest diary entries and their review text. Your profile details (name,
// email, location, pronouns), comments, watchlist and deleted items are left out.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const LATEST = 3; // how many recent diary entries to keep

const folder = process.argv[2];
if (!folder || !existsSync(join(folder, 'watched.csv'))) {
	console.error('Usage: node scripts/letterboxd.js <unzipped Letterboxd export folder>');
	process.exit(1);
}

/** Minimal CSV parser: quoted fields, escaped quotes ("") and newlines inside quotes. */
function parseCsv(text) {
	const rows = [];
	let row = [];
	let field = '';
	let quoted = false;
	for (let i = 0; i < text.length; i++) {
		const c = text[i];
		if (quoted) {
			if (c === '"' && text[i + 1] === '"') {
				field += '"';
				i++;
			} else if (c === '"') quoted = false;
			else field += c;
		} else if (c === '"') quoted = true;
		else if (c === ',') {
			row.push(field);
			field = '';
		} else if (c === '\n' || c === '\r') {
			if (c === '\r' && text[i + 1] === '\n') i++;
			row.push(field);
			rows.push(row);
			row = [];
			field = '';
		} else field += c;
	}
	if (field || row.length) rows.push([...row, field]);
	const [header, ...data] = rows.filter((r) => r.some((f) => f !== ''));
	return data.map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ''])));
}

const read = (file) =>
	existsSync(join(folder, file)) ? parseCsv(readFileSync(join(folder, file), 'utf8')) : [];

const watched = read('watched.csv');
const ratings = new Map(read('ratings.csv').map((r) => [r['Letterboxd URI'], Number(r.Rating)]));
const liked = new Set(read('likes/films.csv').map((r) => r['Letterboxd URI']));
const reviews = read('reviews.csv');
const profile = read('profile.csv')[0] ?? {};

const films = watched.map((w) => ({
	name: w.Name,
	year: Number(w.Year),
	rating: ratings.get(w['Letterboxd URI']) ?? null,
	liked: liked.has(w['Letterboxd URI']),
	url: w['Letterboxd URI']
}));

const latest = read('diary.csv')
	.sort((a, b) => b['Watched Date'].localeCompare(a['Watched Date']))
	.slice(0, LATEST)
	.map((d) => {
		const review = reviews.find(
			(r) => r.Name === d.Name && r.Year === d.Year && r['Watched Date'] === d['Watched Date']
		);
		return {
			name: d.Name,
			year: Number(d.Year),
			rating: d.Rating ? Number(d.Rating) : null,
			watched: d['Watched Date'],
			rewatch: d.Rewatch === 'Yes',
			review: review?.Review ?? null,
			url: d['Letterboxd URI']
		};
	});

const exported = basename(folder).match(/(\d{4}-\d{2}-\d{2})-\d{2}-\d{2}-utc/)?.[1];

const data = {
	username: profile.Username ?? '',
	joined: profile['Date Joined'] ?? '',
	exported: exported ?? new Date().toISOString().slice(0, 10),
	films,
	latest
};

const out = new URL('../src/lib/data/letterboxd.json', import.meta.url);
writeFileSync(out, JSON.stringify(data, null, '\t') + '\n');
console.log(`Wrote ${films.length} films and ${latest.length} diary entries to ${out.pathname}`);
