// The scrollytelling version arranges the entries of content.ts into a chronological story.
// Text, links and images stay in content.ts; this file only decides what goes where.
// A lookup that finds nothing throws, so renaming an entry breaks the build loudly
// instead of silently dropping it from the story.

import {
	experience,
	education,
	theses,
	projects,
	publications,
	photos,
	type Job,
	type Degree,
	type Work,
	type Photo,
	type Publication,
	type Link
} from '$lib/content';
import { dev } from '$app/environment';
import { filmStats } from '$lib/films';
import { formatDate } from '$lib/dates';
import { music, ranges, topGenres, type MusicTrack } from '$lib/music';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Media =
	| { kind: 'doc'; image: string; alt: string; position?: string }
	| { kind: 'photo'; photo: Photo }
	| { kind: 'logos'; logos: { src: string; alt: string }[] }
	| { kind: 'brand'; src: string; alt: string; bare?: boolean }
	| { kind: 'word'; text: string }
	/** A record sliding out of its sleeve: an album cover with a disc whose label is a picture. */
	| {
			kind: 'record';
			sleeve: string | null;
			sleeveAlt: string;
			label: string | null;
			labelAlt: string;
	  };

export interface Step {
	when: string;
	title: string;
	subtitle?: string;
	body: string[];
	tags?: string[];
	links?: Link[];
	media?: Media;
	publication?: Publication;
	/** Numbered lists, e.g. top artists and top tracks. */
	ranked?: RankedList[];
}

export interface RankedList {
	heading: string;
	items: { name: string; detail?: string; url: string }[];
}

export interface Chapter {
	id: string;
	/** Shown in the giant year badge behind the content. */
	year: string;
	/** Shown in the chapter navigation. */
	short: string;
	title: string;
	intro: string;
	/** Colour palette for the chapter (see the themes in src/app.css). Default: the site's own. */
	theme?: 'spotify' | 'letterboxd' | 'aprilia';
	/** How the chapter is staged. */
	scene: 'steps' | 'stack' | 'people' | 'films';
	steps: Step[];
	/** Photos for the 'stack' and 'people' scenes. */
	photos?: Photo[];
	/** A 'steps' chapter can end with a photo-pile scene, like the 'stack' chapters. */
	closing?: { step: Step; photos: Photo[] };
}

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

function find<T>(list: T[], match: (item: T) => boolean, what: string): T {
	const item = list.find(match);
	if (!item) throw new Error(`story.ts: no ${what} in content.ts`);
	return item;
}
const job = (org: string) =>
	find(experience, (j) => j.organization.startsWith(org), `job at "${org}"`);
const degree = (level: string) =>
	find(education, (d) => d.level.startsWith(level), `degree "${level}"`);
const project = (title: string) =>
	find(projects, (p) => p.title.startsWith(title), `project "${title}"`);
const thesis = (title: string) =>
	find(theses, (t) => t.title.startsWith(title), `thesis "${title}"`);
const photo = (id: string) => find(photos, (p) => p.id === id, `photo "${id}"`);

// ---------------------------------------------------------------------------
// Turning content entries into story steps
// ---------------------------------------------------------------------------

const docMedia = (w: Work): Media => ({
	kind: 'doc',
	image: w.image,
	alt: w.imageAlt,
	position: w.imagePosition
});

/** A job's picture: its logo if content.ts has one, otherwise the given fallback. */
const fromJob = (j: Job, fallback?: Media): Step => ({
	when: `${j.start} – ${j.end}`,
	title: j.title,
	subtitle: `${j.organization}, ${j.location}`,
	body: j.description,
	media: j.logo
		? { kind: 'brand', src: j.logo, alt: `${j.organization} logo`, bare: j.logoHasBackground }
		: fallback
});

const fromDegree = (d: Degree): Step => ({
	when: `${d.start} – ${d.end}`,
	title: d.title,
	subtitle: d.schools.map((s) => s.name).join(' & '),
	body: [
		...(d.grade ? [`Grade: ${d.grade}.${d.note ? ' ' + d.note : ''}`] : d.note ? [d.note] : []),
		...(d.courses ? [`Relevant courses: ${d.courses.join(', ')}.`] : [])
	],
	links: d.schools.map((s) => ({ label: s.name, href: s.href })),
	media: { kind: 'logos', logos: d.schools.map((s) => ({ src: s.logo, alt: `${s.name} logo` })) }
});

const yearOf = (w: Work) => w.tags?.find((t) => /^\d{4}$/.test(t)) ?? '';

const fromWork = (w: Work, when = yearOf(w), media: Media = docMedia(w)): Step => ({
	when,
	title: w.title,
	body: w.description ? [w.description] : [],
	tags: w.tags?.filter((t) => t !== when),
	links: w.links,
	media
});

// ---------------------------------------------------------------------------
// The story
// ---------------------------------------------------------------------------

const paper = publications[0];
const offSound = project('OFF-SOUND');

const trackItems = (tracks: MusicTrack[]) =>
	tracks.map((t) => ({ name: t.name, detail: t.artists.join(', '), url: t.url }));

/** Spotify listening stats: one step per time range, then the last tracks played. */
const musicChapter: Chapter = {
	id: 'music',
	theme: 'spotify',
	short: 'Music',
	year: music.updated.slice(0, 4),
	title: 'On repeat',
	intro: music.sample
		? 'Sample data: run scripts/spotify.js (see scripts/spotify-auth.js) to show your own. This chapter stays off the live site until then.'
		: 'What I listen to, straight from Spotify and refreshed every day.',
	scene: 'steps',
	steps: [
		...ranges.map(({ key, when, title }): Step => {
			const artists = music.topArtists[key].slice(0, 5);
			const tracks = music.topTracks[key].slice(0, 5);
			return {
				when,
				title,
				body: [],
				tags: topGenres(music.topArtists[key]),
				ranked: [
					{
						heading: 'Artists',
						items: artists.map((a) => ({ name: a.name, url: a.url }))
					},
					{ heading: 'Tracks', items: trackItems(tracks) }
				],
				media: {
					kind: 'record',
					sleeve: tracks[0]?.image ?? null,
					sleeveAlt: tracks[0] ? `Cover of ${tracks[0].name}` : '',
					label: artists[0]?.image ?? null,
					labelAlt: artists[0]?.name ?? ''
				}
			};
		}),
		{
			when: `Updated ${formatDate(music.updated)}`,
			title: 'Last played',
			body: ['Data from Spotify.'],
			ranked: [{ heading: 'Tracks', items: trackItems(music.recent) }],
			media: {
				kind: 'record',
				sleeve: music.recent[0]?.image ?? null,
				sleeveAlt: music.recent[0] ? `Cover of ${music.recent[0].name}` : '',
				label: music.recent[0]?.image ?? null,
				labelAlt: ''
			}
		} satisfies Step
	].filter((step) => step.ranked?.some((list) => list.items.length))
};

export const chapters: Chapter[] = [
	{
		id: 'bachelor',
		short: 'Bachelor’s',
		year: '2019',
		title: 'Computer Science in Trento',
		intro:
			'A bachelor’s degree at the University of Trento, with tutoring on the side, a first internship and a thesis on industrial control systems.',
		scene: 'steps',
		steps: [
			fromDegree(degree('Bachelor')),
			fromJob(job('NEST'), { kind: 'word', text: 'C · Java' }),
			fromJob(job('Atos'), { kind: 'word', text: 'ICS' }),
			fromWork(project('Web Architecture')),
			fromWork(thesis('An overview of ICS'), 'Dec 2022')
		],
		closing: {
			step: { when: 'Dec 2022', title: 'Thesis defence and graduation', body: [] },
			photos: [photo('defence'), photo('bachelor-graduation')]
		}
	},
	{
		id: 'master',
		short: 'Master’s',
		year: '2023',
		title: 'A double master’s in cybersecurity',
		intro:
			'Two universities, one degree: the University of Twente and the University of Trento. Coursework turned into reports, tools and risk assessments.',
		scene: 'steps',
		steps: [
			fromDegree(degree('Master')),
			fromWork(project('A Risk Assessment')),
			fromWork(project('Esse3')),
			fromWork(project('Balancing Child Safety')),
			fromWork(project('Information Leakage')),
			fromWork(project('Simulating Path ORAM')),
			fromWork(project('Enforcing Cryptographic'))
		],
		closing: {
			step: { when: 'Dec 2025', title: 'Graduation in Enschede', body: [] },
			photos: [photo('diploma'), photo('graduation-lunch'), photo('twente-letters')]
		}
	},
	{
		id: 'offsound',
		short: 'OFF-SOUND',
		year: '2024',
		title: offSound.title,
		intro: 'A start-up project born in the University of Trento’s Business Development Laboratory.',
		scene: 'stack',
		steps: [fromWork(offSound)],
		photos: [photo('print'), photo('testing'), photo('mask'), photo('people-choice')]
	},
	{
		id: 'fbk',
		short: 'FBK',
		year: '2025',
		title: 'Research at FBK',
		intro:
			'An internship at Fondazione Bruno Kessler on privacy-preserving vehicle authentication, which became the master’s thesis and then a peer-reviewed paper.',
		scene: 'steps',
		steps: [
			fromJob(job('Fondazione Bruno Kessler'), { kind: 'word', text: 'V2X' }),
			fromWork(thesis('Revisiting the ETSI'), 'Sep 2025'),
			{
				when: String(paper.year),
				title: paper.title,
				subtitle: paper.authors.join(', '),
				body: [`In: ${paper.venue}`],
				links: [
					paper.links[0],
					...(paper.doi ? [{ label: 'DOI', href: `https://doi.org/${paper.doi}` }] : []),
					...paper.links.slice(1)
				],
				media: docMedia(paper),
				publication: paper
			}
		]
	},
	{
		id: 'kpmg',
		short: 'KPMG',
		year: '2026',
		title: 'Consulting',
		intro: 'IT strategy at KPMG Nolan Norton in Verona.',
		scene: 'steps',
		steps: [fromJob(job('KPMG'), { kind: 'word', text: 'KPMG' })]
	},
	{
		id: 'ride',
		theme: 'aprilia',
		short: 'Riding',
		year: '2026',
		title: 'On two wheels',
		// PLACEHOLDER intro and step text: rewrite in your own words.
		intro: 'Off the clock: mountain roads, hairpins and the occasional tunnel.',
		scene: 'stack',
		steps: [
			{
				when: '2026',
				title: 'Weekend rides',
				body: ['Mountain passes, lakeside hairpins and a black and red Aprilia.'],
				links: []
			}
		],
		photos: [photo('bike'), photo('cockpit'), photo('ride')]
	},
	{
		id: 'films',
		theme: 'letterboxd',
		short: 'Films',
		year: '2026',
		title: 'At the movies',
		intro: `${filmStats.count} films logged on Letterboxd since ${filmStats.since}. Here is what they say about my taste.`,
		scene: 'films',
		steps: []
	},
	// Sample data is for previewing in `npm run dev`; the live site waits for real data.
	...(music.sample && !dev ? [] : [musicChapter]),
	{
		id: 'people',
		short: 'People',
		year: '&',
		title: 'Along the way',
		intro: 'Friends, events and the occasional horse costume.',
		scene: 'people',
		steps: [],
		photos: [
			photo('western-party'),
			photo('celebration-2022'),
			photo('sofa'),
			photo('group-2024'),
			photo('family-lunch'),
			photo('event'),
			photo('stallman'),
			photo('horsing')
		]
	}
];

/** The current job, used for the closing scene. */
export const now = experience[0];
