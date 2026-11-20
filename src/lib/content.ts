// All site content lives in this file. To add a job, project or publication,
// edit the arrays below; the components in src/lib/components only render them.

import portrait from '$lib/assets/img/portrait.webp';

import utwente from '$lib/assets/img/utwente.webp';
import utrento from '$lib/assets/img/utrento.webp';
import liceo from '$lib/assets/img/liceo.webp';

import paperImg from '$lib/assets/img/paper.webp';
import paperPdf from '$lib/assets/ACSW_2573.pdf';
import masterThesisImg from '$lib/assets/img/master_thesis.webp';
import bachelorThesisImg from '$lib/assets/img/bachelor_thesis.webp';
import bachelorThesisPdf from '$lib/assets/bachelor_thesis.pdf';

import offSoundImg from '$lib/assets/img/off_sound.webp';
import offSoundPdf from '$lib/assets/TECHNICAL_POSTER.pdf';
import phrImg from '$lib/assets/img/phr.webp';
import phrPdf from '$lib/assets/phr.pdf';
import detEncImg from '$lib/assets/img/det_enc.webp';
import detEncPdf from '$lib/assets/det_enc.pdf';
import pathOramImg from '$lib/assets/img/path_oram.webp';
import pathOramPdf from '$lib/assets/path_oram.pdf';
import dhvImg from '$lib/assets/img/dhv.webp';
import dhvPdf from '$lib/assets/DHV_case_study.pdf';
import esse3Img from '$lib/assets/img/esse3.webp';
import esse3Pdf from '$lib/assets/crypto_project.pdf';
import chatcontrolImg from '$lib/assets/img/chatcontrol.webp';
import chatcontrolPdf from '$lib/assets/chatcontrol.pdf';
import webArchImg from '$lib/assets/img/web_arch.webp';

import alessio from '$lib/assets/img/alessio.webp';
import demetrio from '$lib/assets/img/demetrio.webp';
import matteo from '$lib/assets/img/matteo.webp';
import riccardo from '$lib/assets/img/riccardo.webp';
import jan from '$lib/assets/img/jan.webp';

import kpmgLogo from '$lib/assets/logos/kpmg.webp';
import fbkLogo from '$lib/assets/logos/fbk.webp';

import defenceImg from '$lib/assets/gallery/defence.webp';
import defenceFull from '$lib/assets/gallery/defence-full.webp';
import peopleChoiceImg from '$lib/assets/gallery/people_choice.webp';
import peopleChoiceFull from '$lib/assets/gallery/people_choice-full.webp';
import printImg from '$lib/assets/gallery/print.webp';
import printFull from '$lib/assets/gallery/print-full.webp';
import testingImg from '$lib/assets/gallery/testing.webp';
import testingFull from '$lib/assets/gallery/testing-full.webp';
import maskImg from '$lib/assets/gallery/mask.webp';
import maskFull from '$lib/assets/gallery/mask-full.webp';
import stallmanImg from '$lib/assets/gallery/stallman.webp';
import stallmanFull from '$lib/assets/gallery/stallman-full.webp';
import horsingImg from '$lib/assets/gallery/horsing_around.webp';
import horsingFull from '$lib/assets/gallery/horsing_around-full.webp';
import bachelorGradImg from '$lib/assets/gallery/bachelor-graduation.webp';
import bachelorGradFull from '$lib/assets/gallery/bachelor-graduation-full.webp';
import gradLunchImg from '$lib/assets/gallery/graduation-lunch.webp';
import gradLunchFull from '$lib/assets/gallery/graduation-lunch-full.webp';
import westernImg from '$lib/assets/gallery/western-party.webp';
import westernFull from '$lib/assets/gallery/western-party-full.webp';
import familyLunchImg from '$lib/assets/gallery/family-lunch.webp';
import familyLunchFull from '$lib/assets/gallery/family-lunch-full.webp';
import sofaImg from '$lib/assets/gallery/sofa.webp';
import sofaFull from '$lib/assets/gallery/sofa-full.webp';
import group2024Img from '$lib/assets/gallery/group-2024.webp';
import group2024Full from '$lib/assets/gallery/group-2024-full.webp';
import celebration2022Img from '$lib/assets/gallery/celebration-2022.webp';
import celebration2022Full from '$lib/assets/gallery/celebration-2022-full.webp';
import eventImg from '$lib/assets/gallery/event.webp';
import eventFull from '$lib/assets/gallery/event-full.webp';
import rideImg from '$lib/assets/gallery/ride.webp';
import rideFull from '$lib/assets/gallery/ride-full.webp';
import bikeImg from '$lib/assets/gallery/bike.webp';
import bikeFull from '$lib/assets/gallery/bike-full.webp';
import cockpitImg from '$lib/assets/gallery/cockpit.webp';
import cockpitFull from '$lib/assets/gallery/cockpit-full.webp';
import twenteLettersImg from '$lib/assets/gallery/twente-letters.webp';
import twenteLettersFull from '$lib/assets/gallery/twente-letters-full.webp';
import diplomaImg from '$lib/assets/gallery/diploma.webp';
import diplomaFull from '$lib/assets/gallery/diploma-full.webp';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Link {
	label: string;
	href: string;
}

export interface Job {
	title: string;
	organization: string;
	start: string;
	end: string;
	location: string;
	/** One entry per line. Leave empty for no description. */
	description: string[];
	/** Company logo (import it from $lib/assets/logos/). Shown in the story; optional. */
	logo?: string;
	/** Set when the logo file has its own solid background, so it is shown as is instead of on a white card. */
	logoHasBackground?: boolean;
}

export interface School {
	name: string;
	href: string;
	logo: string;
}

export interface Degree {
	/** Group label, e.g. "Master's Degree". */
	level: string;
	schools: School[];
	title: string;
	grade?: string;
	start: string;
	end: string;
	courses?: string[];
	note?: string;
}

export interface Work {
	title: string;
	image: string;
	imageAlt: string;
	/**
	 * Previews are cropped to an A4 shape. This picks which part stays visible, as a CSS
	 * object-position value (default 'top'). Only needed for images that are not A4 pages.
	 */
	imagePosition?: string;
	tags?: string[];
	description?: string;
	links: Link[];
}

export interface Publication extends Work {
	authors: string[];
	venue: string;
	year: number;
	bibtexKey: string;
	/** Fill in once IEEE assigns it: adds a DOI button and a doi field to the BibTeX. */
	doi?: string;
}

export interface Photo {
	/** Stable name used by the story to place the photo (see src/lib/story.ts). */
	id: string;
	/** Display-sized image (longest side 800 px). */
	src: string;
	/** Full-screen image for the lightbox (longest side 1600 px). */
	full: string;
	width: number;
	height: number;
	alt: string;
	caption: string;
}

export interface Buddy {
	name: string;
	tagline: string;
	photo: string;
	href: string;
}

// ---------------------------------------------------------------------------
// Site and profile
// ---------------------------------------------------------------------------

export const site = {
	url: 'https://lallo-unitn.github.io/Riccardo-Gennaro/',
	title: 'Riccardo Gennaro | Test Engineer, MSc Cybersecurity',
	description:
		'Riccardo Gennaro, Test Engineer at Gaming Laboratories International. MSc in Cybersecurity,' +
		'double degree from the University of Twente and the University of Trento. Research on privacy-preserving V2X authentication.',
	/** Share image in /static, used for link previews. */
	ogImage: 'og.jpg',
	ogImageAlt: 'Riccardo Gennaro, Test Engineer, MSc in Cybersecurity'
};

export const profile = {
	name: 'Riccardo Gennaro',
	firstName: 'Riccardo',
	lastName: 'Gennaro',
	headline: 'MSc in Cybersecurity | Test Engineer at Gaming Laboratories International',
	jobTitle: 'Test Engineer',
	employer: 'Gaming Laboratories International, LLC',
	portrait,
	email: 'me@riccardogennaro.work',
	linkedin: { handle: 'riccardo-gennaro', href: 'https://www.linkedin.com/in/riccardo-gennaro/' },
	github: { handle: 'lallo-unitn', href: 'https://github.com/lallo-unitn' },
	/**
	 * To show a "Download CV" button, put the file in /static and set its name here, e.g. 'cv.pdf'.
	 * If the file is missing, the build fails with a 404 error instead of deploying a broken link.
	 */
	cvFile: '',
	quote: 'It doesn’t matter if it is ugly as long as it is free*.',
	quoteNote: '*free as in freedom'
};

// ---------------------------------------------------------------------------
// Experience (newest first)
// ---------------------------------------------------------------------------

export const experience: Job[] = [
	{
		title: 'Test Engineer',
		organization: 'Gaming Laboratories International, LLC',
		start: 'Nov 2026',
		end: 'Present',
		location: 'Italy',
		description: []
	},
	{
		title: 'IT Strategy Consultant',
		organization: 'KPMG Nolan Norton',
		logo: kpmgLogo,
		start: 'Feb 2026',
		end: 'Jul 2026',
		location: 'Verona (Italy)',
		description: [
			'Supported the PMO in an Identity Management restructuring project for a leading financial services company.',
			'Supported the PMO in a SOX policy compliance project for a leading pharmaceutical company.'
		]
	},
	{
		title: 'Security Researcher Intern',
		organization: 'Fondazione Bruno Kessler',
		logo: fbkLogo,
		logoHasBackground: true,
		start: 'Feb 2025',
		end: 'Dec 2025',
		location: 'Trento (Italy)',
		description: [
			'Designed alternative privacy-preserving vehicle authentication and authorization protocols based on ETSI ITS standards, and developed a Java PoC to evaluate them. This work led to the EuroS&P workshop paper below.'
		]
	},
	{
		title: 'Computer Science Tutor',
		organization: 'NEST',
		start: 'Sep 2021',
		end: 'Aug 2024',
		location: 'Trento (Italy)',
		description: ['Tutored university students in C and Java programming and in algorithm design.']
	},
	{
		title: 'Cyber Security Specialist Intern',
		organization: 'Atos',
		start: 'Mar 2022',
		end: 'Apr 2022',
		location: 'Milan (Italy)',
		description: [
			'Joined the Big Data & Security (BDS) team to study the methodologies Atos applies as an ICS integration provider.',
			'This experience became the basis of my bachelor’s thesis.'
		]
	}
];

// ---------------------------------------------------------------------------
// Education (newest first)
// ---------------------------------------------------------------------------

const unitn = 'University of Trento';

export const education: Degree[] = [
	{
		level: 'Master’s Degree',
		schools: [
			{
				name: 'University of Twente',
				href: 'https://www.utwente.nl/en/csc/programme/specializations/cyber-security/',
				logo: utwente
			},
			{
				name: unitn,
				href: 'https://offertaformativa.unitn.it/en/lm/computer-science/cyber-security',
				logo: utrento
			}
		],
		title: 'Double Degree MSc, Cybersecurity',
		grade: 'Cum Laude',
		start: 'Sep 2023',
		end: 'Sep 2025',
		courses: [
			'Applied Cryptography',
			'Secure Data Management',
			'Cloud Security',
			'Network Security',
			'Security Testing',
			'Cyber Risk Assessment',
			'IoT Fundamentals'
		]
	},
	{
		level: 'Bachelor’s Degree',
		schools: [
			{
				name: unitn,
				href: 'https://international.unitn.it/ict/bachelor-in-computer-science',
				logo: utrento
			}
		],
		title: 'Bachelor’s Degree, Computer Science',
		grade: '101/110',
		start: 'Sep 2019',
		end: 'Dec 2022',
		courses: ['Web Architectures', 'Algorithms & Data Structures', 'OOP', 'Web Programming'],
		// A binary joke: 110 - 101 = 1 in base 2.
		note: 'Just a point from full marks! You know... 110-101=1'
	},
	{
		level: 'High School Diploma',
		schools: [
			{ name: 'Liceo Gian Giorgio Trissino', href: 'https://liceivaldagno.edu.it/', logo: liceo }
		],
		title: 'Liceo Scientifico Tecnologico',
		start: 'Sep 2014',
		end: 'Jun 2019',
		note: 'Possibly the strangest years of my life'
	}
];

// ---------------------------------------------------------------------------
// Publications
// ---------------------------------------------------------------------------

export const publications: Publication[] = [
	{
		title:
			'Revisiting the ETSI ITS Lifecycle with Certificateless Authorization Based on Group Signatures',
		authors: [
			'Riccardo Gennaro',
			'Stefano Berlato',
			'Alessandro Tomasi',
			'Silvio Ranise',
			'Florian Hahn'
		],
		venue: '2026 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW), ACSW 2026',
		year: 2026,
		bibtexKey: 'gennaro2026revisiting',
		doi: '',
		image: paperImg,
		imageAlt: 'First page of the paper',
		links: [
			{ label: 'View PDF', href: paperPdf },
			{ label: 'FBK record', href: 'https://cris.fbk.eu/handle/11582/373007' }
		]
	}
];

/** BibTeX entry for a publication. Acronyms are braced so BibTeX keeps their capitals. */
export function toBibtex(p: Publication): string {
	const author = p.authors
		.map((full) => {
			const parts = full.split(' ');
			const last = parts.pop();
			return `${last}, ${parts.join(' ')}`;
		})
		.join(' and ');
	const title = p.title.replace(/\b(ETSI|ITS)\b/g, '{$1}');
	const fields = [
		['title', title],
		['author', author],
		['booktitle', p.venue.split(', ACSW')[0].replace(/&/g, '\\&')],
		['year', String(p.year)],
		...(p.doi ? [['doi', p.doi]] : [])
	];
	const body = fields.map(([k, v]) => `  ${k.padEnd(9)} = {${v}}`).join(',\n');
	return `@inproceedings{${p.bibtexKey},\n${body}\n}`;
}

// ---------------------------------------------------------------------------
// Theses
// ---------------------------------------------------------------------------

export const theses: Work[] = [
	{
		title:
			'Revisiting the ETSI ITS Lifecycle with Certificateless Authorization Based on Group Signatures',
		description:
			'The current ETSI standards for ITSs rely heavily on PKIs and pseudonym-based digital certificates to provide message authenticity and user privacy in vehicular communications. This work proposes a standard-compatible redesign of (part of) ETSI’s authentication and authorization lifecycle that replaces pseudonym-based certificates with Group Signatures. It is the basis of the EuroS&P workshop paper above.',
		image: masterThesisImg,
		imageAlt: 'Title page of the master’s thesis',
		links: [{ label: 'View PDF', href: 'https://purl.utwente.nl/essays/109175' }]
	},
	{
		title: 'An overview of ICS vulnerabilities, threats, and security measures',
		description:
			'This work focuses on ICS security. In particular, three case studies based on data gathered from the ICSs of three power plants are explored. The studies were produced during an internship collaboration with Atos.',
		image: bachelorThesisImg,
		imageAlt: 'Title page of the bachelor’s thesis',
		links: [{ label: 'View PDF', href: bachelorThesisPdf }]
	}
];

// ---------------------------------------------------------------------------
// Projects (ordered by relevance, not date)
// ---------------------------------------------------------------------------

export const projects: Work[] = [
	{
		title: 'OFF-SOUND',
		tags: ['Start-up', 'Team project', '2024'],
		description:
			'OFF-SOUND is a start-up project that started in February 2024 in the Business Development Laboratory of the University of Trento. This project aims at developing a solution that enables people to take their phone calls anywhere without having to worry about eavesdroppers.',
		image: offSoundImg,
		imageAlt: 'OFF-SOUND hardware prototype on a desk',
		imagePosition: '40% center', // keep the prototype in frame
		links: [
			{ label: 'View PDF', href: offSoundPdf },
			{ label: 'GitHub', href: 'https://github.com/orgs/HUSH-MASK/repositories' },
			{ label: 'Website', href: 'https://hush-mask.github.io/MVP_site/home' }
		]
	},
	{
		title: 'Enforcing Cryptographic Access Control on a PHR system',
		tags: ['Python', 'Attribute-Based Encryption', '2024'],
		description:
			'This work presents a cryptographically enforced access control system for Personal Health Records (PHRs) using Multi-Authority Ciphertext-Policy Attribute-Based Encryption (MA-CP-ABE), ensuring secure data sharing and integrity among diverse users.',
		image: phrImg,
		imageAlt: 'First page of the PHR access control report',
		links: [
			{ label: 'View PDF', href: phrPdf },
			{ label: 'GitHub', href: 'https://github.com/lallo-unitn/phr_access_control' }
		]
	},
	{
		title: 'Information Leakage and Attacks on Deterministic Encryption',
		tags: ['Report', '2024'],
		description:
			'This work analyzes information leakage in SSE and deterministic encryption, demonstrating vulnerabilities and proposing secure indexing as a mitigation.',
		image: detEncImg,
		imageAlt: 'First page of the deterministic encryption report',
		// The GitHub repo (lallo-unitn/inference_on_det_encryption) is private or deleted.
		links: [{ label: 'View PDF', href: detEncPdf }]
	},
	{
		title: 'Simulating Path ORAM accesses',
		tags: ['Report', '2024'],
		description:
			'This work analyzes Path ORAM’s performance, simulating read/write operations, and evaluating overflow probabilities for varying bucket sizes.',
		image: pathOramImg,
		imageAlt: 'First page of the Path ORAM report',
		// The GitHub repo (lallo-unitn/path-oblivious-ram-simulation) is private or deleted.
		links: [{ label: 'View PDF', href: pathOramPdf }]
	},
	{
		title: 'A Risk Assessment of the Dutch Digital Vote-Counting System',
		tags: ['Risk assessment', '2023'],
		description:
			'This work aims at assessing the security posture of the new Dutch centralized system for vote counting. In this report, the core services, information, and processes are analyzed.',
		image: dhvImg,
		imageAlt: 'First page of the Dutch vote-counting risk assessment',
		links: [{ label: 'View PDF', href: dhvPdf }]
	},
	{
		title: 'Esse3-Bootleg',
		tags: ['Java', 'Web app', '2023'],
		description:
			'This work was proposed as a final project for the course of Advanced Programming of Cryptographic Methods held by prof. Silvio Ranise. This project aims to develop a web app designed for student career management and teacher course management and mark assignments.',
		image: esse3Img,
		imageAlt: 'First page of the Esse3-Bootleg report',
		links: [
			{ label: 'View PDF', href: esse3Pdf },
			{ label: 'GitHub', href: 'https://github.com/lallo-unitn/Esse3-Bootleg-APFCM' }
		]
	},
	{
		title: 'Balancing Child Safety and Privacy: An Exploration of the EU’s Chatcontrol Proposal',
		tags: ['Policy', '2024'],
		description:
			'This work explores the recent legislative proposal aimed at combating the proliferation of Child Sexual Abuse Material (CSAM) and online child sexual solicitation.',
		image: chatcontrolImg,
		imageAlt: 'First page of the Chat Control essay',
		links: [{ label: 'View PDF', href: chatcontrolPdf }]
	},
	{
		title: 'Web Architecture Projects Collection',
		tags: ['Java', 'JavaScript', '2022'],
		description:
			'Here you can find 5 projects required by prof. Marco Ronchetti for the 2022/23 iteration of the Web Architectures course.',
		image: webArchImg,
		imageAlt: 'Page from the Web Architectures assignments',
		links: [{ label: 'GitHub', href: 'https://github.com/lallo-unitn/WEB_ARC_assignments' }]
	}
];

// ---------------------------------------------------------------------------
// Buddies
// ---------------------------------------------------------------------------

export const buddies: Buddy[] = [
	{
		name: 'Alessio Blascovich',
		tagline: 'Has a problem with compilers',
		photo: alessio,
		href: 'https://elblasco.github.io/'
	},
	{
		name: 'Demetrio Battaglia',
		tagline: 'Has a problem with natural languages',
		photo: demetrio,
		href: 'https://deme3.me'
	},
	{
		name: 'Matteo Franzil',
		tagline: 'Has a problem with virtualization',
		photo: matteo,
		href: 'https://matteo.franzil.com/'
	},
	{
		name: 'Riccardo Lussana',
		tagline: 'Has a problem with OSINT',
		photo: riccardo,
		href: 'https://riklus.github.io/'
	},
	{
		name: 'Jan Tomassi',
		tagline: 'Has a problem with kernels',
		photo: jan,
		href: 'https://jantomassi.github.io/'
	}
];

// ---------------------------------------------------------------------------
// Personal photos
// ---------------------------------------------------------------------------

// PLACEHOLDER captions and alt texts, guessed from the old file names. Rewrite them.
export const photos: Photo[] = [
	{
		id: 'defence',
		src: defenceImg,
		full: defenceFull,
		width: 800,
		height: 600,
		alt: 'Presenting slides on ICS security in a lecture room',
		caption: 'Bachelor’s thesis defence'
	},
	{
		id: 'people-choice',
		src: peopleChoiceImg,
		full: peopleChoiceFull,
		width: 800,
		height: 450,
		alt: 'The OFF-SOUND team on stage holding a certificate',
		caption: 'OFF-SOUND, People’s Choice'
	},
	{
		id: 'print',
		src: printImg,
		full: printFull,
		width: 600,
		height: 800,
		alt: 'A 3D printer printing a prototype part',
		caption: 'Printing a prototype'
	},
	{
		id: 'testing',
		src: testingImg,
		full: testingFull,
		width: 800,
		height: 537,
		alt: 'Testing a prototype with a sound level meter',
		caption: 'Testing OFF-SOUND'
	},
	{
		id: 'mask',
		src: maskImg,
		full: maskFull,
		width: 454,
		height: 800,
		alt: 'Someone trying on the prototype at an event',
		caption: 'OFF-SOUND demo'
	},
	{
		id: 'stallman',
		src: stallmanImg,
		full: stallmanFull,
		width: 640,
		height: 640,
		alt: 'Photo-bombing a photo with Richard Stallman',
		caption: 'Photo-bombing R. Stallman'
	},
	{
		id: 'horsing',
		src: horsingImg,
		full: horsingFull,
		width: 640,
		height: 640,
		alt: 'Wearing a horse costume',
		caption: 'Horsing around'
	},
	{
		id: 'bachelor-graduation',
		src: bachelorGradImg,
		full: bachelorGradFull,
		width: 800,
		height: 534,
		alt: 'Group photo in a university hall on graduation day',
		caption: 'Bachelor’s graduation'
	},
	{
		id: 'graduation-lunch',
		src: gradLunchImg,
		full: gradLunchFull,
		width: 600,
		height: 800,
		alt: 'Celebration lunch with friends, the graduate wearing a laurel wreath',
		caption: 'Master’s graduation party'
	},
	{
		id: 'western-party',
		src: westernImg,
		full: westernFull,
		width: 800,
		height: 533,
		alt: 'Friends in cowboy hats and bandanas at a western-themed party',
		caption: 'Western party'
	},
	{
		id: 'family-lunch',
		src: familyLunchImg,
		full: familyLunchFull,
		width: 800,
		height: 369,
		alt: 'A long table outdoors, lunch with family and friends',
		caption: 'Lunch under the porch'
	},
	{
		id: 'sofa',
		src: sofaImg,
		full: sofaFull,
		width: 800,
		height: 600,
		alt: 'Friends on a sofa under a big window',
		caption: 'Lazy afternoon'
	},
	{
		id: 'group-2024',
		src: group2024Img,
		full: group2024Full,
		width: 640,
		height: 516,
		alt: 'Six friends posing outdoors, making peace signs',
		caption: 'September 2024'
	},
	{
		id: 'celebration-2022',
		src: celebration2022Img,
		full: celebration2022Full,
		width: 800,
		height: 600,
		alt: 'Friends around a table outdoors, one holding a bouquet',
		caption: 'A sunny celebration'
	},
	{
		id: 'event',
		src: eventImg,
		full: eventFull,
		width: 800,
		height: 600,
		alt: 'Group photo with Andrew S. Tanenbaum',
		caption: 'With our rockstars A.S. Tanenbaum'
	},
	{
		id: 'ride',
		src: rideImg,
		full: rideFull,
		width: 800,
		height: 533,
		alt: 'Riding a black and red sport motorcycle on a mountain road',
		caption: 'Mountain roads'
	},
	{
		id: 'bike',
		src: bikeImg,
		full: bikeFull,
		width: 600,
		height: 800,
		alt: 'Side view of the motorcycle parked by a meadow',
		caption: 'Parked in the hills'
	},
	{
		id: 'cockpit',
		src: cockpitImg,
		full: cockpitFull,
		width: 600,
		height: 800,
		alt: 'The motorcycle’s cockpit in front of a tunnel entrance',
		caption: 'About to enter the tunnel'
	},
	{
		id: 'twente-letters',
		src: twenteLettersImg,
		full: twenteLettersFull,
		width: 800,
		height: 600,
		alt: 'Wearing a laurel wreath and holding the diploma in front of the giant University of Twente letters',
		caption: 'Graduation day, University of Twente'
	},
	{
		id: 'diploma',
		src: diplomaImg,
		full: diplomaFull,
		width: 800,
		height: 600,
		alt: 'Signing the Master of Science diploma at a desk',
		caption: 'Signing the diploma'
	}
];
