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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Media =
	| { kind: 'doc'; image: string; alt: string; position?: string }
	| { kind: 'photo'; photo: Photo }
	| { kind: 'logos'; logos: { src: string; alt: string }[] }
	| { kind: 'brand'; src: string; alt: string; bare?: boolean }
	| { kind: 'word'; text: string };

export interface Step {
	when: string;
	title: string;
	subtitle?: string;
	body: string[];
	tags?: string[];
	links?: Link[];
	media?: Media;
	publication?: Publication;
}

export interface Chapter {
	id: string;
	/** Shown in the giant year badge behind the content. */
	year: string;
	/** Shown in the chapter navigation. */
	short: string;
	title: string;
	intro: string;
	/** How the chapter is staged. */
	scene: 'steps' | 'stack' | 'people';
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
