<script lang="ts">
	import {
		profile,
		nav,
		experience,
		education,
		publications,
		theses,
		projects,
		buddies
	} from '$lib/content';
	import { asset } from '$app/paths';
	import batteries from '$lib/assets/img/batteries.webp';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ExperienceTimeline from '$lib/components/ExperienceTimeline.svelte';
	import DegreeCard from '$lib/components/DegreeCard.svelte';
	import PublicationCard from '$lib/components/PublicationCard.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import BuddyCard from '$lib/components/BuddyCard.svelte';

	const year = new Date().getFullYear();
	const contacts = [
		{ icon: 'envelope', label: profile.email, href: `mailto:${profile.email}`, width: 'md:w-6/12' },
		{
			icon: 'linkedin',
			label: profile.linkedin.handle,
			href: profile.linkedin.href,
			width: 'md:w-4/12'
		},
		{ icon: 'github', label: profile.github.handle, href: profile.github.href, width: 'md:w-6/12' }
	] as const;
</script>

<SeoHead />

<NavBar links={nav} />

<main>
	<div class="container mx-auto my-2 px-4 md:my-6 md:px-6" id="top">
		<!-- Hero: photo first on small screens, on the right on large screens. -->
		<section class="mb-12 md:mb-20">
			<div class="container mx-auto xl:px-32">
				<div class="grid items-center lg:grid-cols-2">
					<div class="lg:order-2">
						<img
							width="900"
							height="869"
							fetchpriority="high"
							src={profile.portrait}
							class="w-full rounded-lg bg-hush-grey-500 shadow-lg shadow-black/20"
							alt="Portrait of {profile.name}"
						/>
					</div>
					<div class="relative z-10 mx-4 -mt-6 mb-12 md:mx-8 lg:order-1 lg:mx-0 lg:mb-0 lg:mt-0">
						<div
							class="block rounded-lg bg-hush-grey-700 bg-opacity-30 px-6 py-12 text-hush-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-12 lg:-mr-40"
						>
							<h1 class="mb-2 pb-2 text-4xl font-bold uppercase text-hush-blue-500">
								{profile.name}
							</h1>
							<p class="mb-6 pb-2">{profile.headline}</p>
							<ul class="mb-6 flex flex-wrap">
								{#each contacts as contact (contact.href)}
									<li class="mb-4 flex w-full {contact.width}">
										<Icon name={contact.icon} class="mr-3 h-5 w-5 text-hush-blue-500" />
										<a href={contact.href}>{contact.label}</a>
									</li>
								{/each}
							</ul>
							{#if profile.cvFile}
								<LinkButton href={asset(`/${profile.cvFile}`)}>Download CV</LinkButton>
							{/if}
							<p class="mt-6 flex items-center text-sm text-hush-grey-100">
								<img class="mr-2 h-4 w-4" src={batteries} alt="" /> Batteries included
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<figure class="relative mb-6 ml-5 md:ml-0">
			<svg
				class="absolute -start-8 -top-6 size-16 text-white opacity-15"
				viewBox="0 0 16 16"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
				/>
			</svg>
			<blockquote class="relative z-10">
				<p class="italic text-white sm:text-xl">{profile.quote}</p>
			</blockquote>
			<figcaption class="text-right italic text-white">{profile.quoteNote}</figcaption>
		</figure>

		<section id="exp" class="mt-4">
			<div class="max-w-screen-xl p-4">
				<SectionHeading lead="Work" accent="Experience" />
			</div>
			<div class="container my-6 ml-2 mr-auto max-w-xl px-4 md:ml-0 md:px-6">
				<ExperienceTimeline jobs={experience} />
			</div>
		</section>

		<section id="edu">
			<div class="p-4">
				<SectionHeading accent="Education" align="right" />
			</div>
			<div class="my-6 md:my-0 md:ml-auto md:max-w-screen-sm">
				{#each education as degree (degree.level)}
					<DegreeCard {degree} />
				{/each}
			</div>
		</section>
	</div>

	<div class="container mx-auto my-6 px-2 md:px-6">
		<section id="publications">
			<div class="max-w-screen-xl p-4">
				<SectionHeading accent="Publications" />
			</div>
			<div class="mb-16 mt-4 flex flex-row flex-wrap justify-center gap-10">
				{#each publications as publication (publication.bibtexKey)}
					<PublicationCard {publication} />
				{/each}
			</div>
		</section>

		<section id="theses">
			<div class="max-w-screen-xl p-4">
				<SectionHeading lead="Bachelor and Master" accent="Thesis" />
			</div>
			<div class="mb-16 mt-4 flex flex-row flex-wrap justify-center gap-10">
				{#each theses as work (work.title + work.imageAlt)}
					<WorkCard {work} />
				{/each}
			</div>
		</section>

		<section id="proj">
			<div class="max-w-screen-xl p-4">
				<SectionHeading lead="Selected" accent="Projects" />
			</div>
			<div class="mb-16 mt-4 flex flex-row flex-wrap justify-center gap-10">
				{#each projects as work (work.title)}
					<WorkCard {work} />
				{/each}
			</div>
		</section>

		<section id="buddies">
			<div class="mt-4 max-w-screen-xl p-4">
				<SectionHeading lead="My" accent="Buddies" />
			</div>
			<ul class="mb-16 mt-4 flex flex-row flex-wrap justify-center">
				{#each buddies as buddy (buddy.name)}
					<BuddyCard {buddy} />
				{/each}
			</ul>
		</section>
	</div>
</main>

<footer class="m-4 mt-12 rounded-lg bg-hush-blue-800 shadow">
	<div
		class="mx-auto flex max-w-screen-xl flex-col p-4 md:flex-row md:items-center md:justify-between"
	>
		<p class="text-sm text-hush-white sm:text-center">
			© {year}
			<a href="#top" class="hover:underline">{profile.name}</a>. Site code under the
			<a href="https://github.com/lallo-unitn/Riccardo-Gennaro/blob/main/LICENSE" class="underline"
				>MIT License</a
			>, text under
			<a href="https://creativecommons.org/licenses/by/4.0/" class="underline">CC BY 4.0</a>.
			Papers, theses and photos are not covered.
		</p>
		<ul class="mt-3 flex flex-wrap items-center text-sm font-medium text-white sm:mt-0">
			<li><a href="#top" class="me-4 hover:underline md:me-6">About</a></li>
			<li><a href="#exp" class="me-4 hover:underline md:me-6">Experience</a></li>
			<li><a href="#edu" class="me-4 hover:underline md:me-6">Education</a></li>
			<li><a href="mailto:{profile.email}" class="hover:underline">Contact</a></li>
		</ul>
	</div>
</footer>
