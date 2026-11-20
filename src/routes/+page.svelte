<!--
	Scrollytelling version of the portfolio: one chronological story.
	The chapters come from src/lib/story.ts, which arranges the entries of src/lib/content.ts.
-->
<script lang="ts">
	import { photos } from '$lib/content';
	import { chapters } from '$lib/story';
	import { activeChild } from '$lib/story/scroll';
	import { storyState } from '$lib/story/state.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import Lightbox from '$lib/components/gallery/Lightbox.svelte';
	import Hero from '$lib/components/story/Hero.svelte';
	import StepsChapter from '$lib/components/story/StepsChapter.svelte';
	import StackChapter from '$lib/components/story/StackChapter.svelte';
	import PeopleChapter from '$lib/components/story/PeopleChapter.svelte';
	import FilmsChapter from '$lib/components/story/FilmsChapter.svelte';
	import Finale from '$lib/components/story/Finale.svelte';
	import YearBadge from '$lib/components/story/YearBadge.svelte';
	import ChapterRail from '$lib/components/story/ChapterRail.svelte';

	// Every element with data-chapter, in page order: the opening, the chapters, the finale.
	const sectionIds = ['top', ...chapters.map((c) => c.id), 'now'];

	let lightbox = $state(-1);
	const onopen = (id: string) => (lightbox = photos.findIndex((p) => p.id === id));
</script>

<SeoHead />

<YearBadge />
<ChapterRail />

<main
	class="relative z-10 mx-auto max-w-screen-xl px-4 md:pl-8 md:pr-16 lg:pl-12 lg:pr-44"
	{@attach activeChild('[data-chapter]', (i) => (storyState.active = sectionIds[i]))}
>
	<Hero chapterCount={chapters.length} />
	{#each chapters as chapter, i (chapter.id)}
		{#if chapter.scene === 'stack'}
			<StackChapter {chapter} number={i + 1} {onopen} />
		{:else if chapter.scene === 'films'}
			<FilmsChapter {chapter} number={i + 1} />
		{:else if chapter.scene === 'people'}
			<PeopleChapter {chapter} number={i + 1} {onopen} />
		{:else}
			<StepsChapter {chapter} number={i + 1} {onopen} />
		{/if}
	{/each}
	<Finale />
</main>

<Lightbox {photos} bind:index={lightbox} />
