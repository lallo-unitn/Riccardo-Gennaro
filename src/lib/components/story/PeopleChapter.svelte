<!-- Friends and photos from along the way. -->
<script lang="ts">
	import type { Chapter } from '$lib/story';
	import { buddies } from '$lib/content';
	import { reveal } from '$lib/story/scroll';
	import ChapterHeader from './ChapterHeader.svelte';
	import StoryMedia from './StoryMedia.svelte';
	import BuddyCard from '$lib/components/BuddyCard.svelte';

	let {
		chapter,
		number,
		onopen
	}: { chapter: Chapter; number: number; onopen: (photoId: string) => void } = $props();

	const tilts = ['-rotate-3', 'rotate-2', '-rotate-1'];
</script>

<section id={chapter.id} data-chapter data-theme={chapter.theme} class="chapter relative pb-24">
	<ChapterHeader {chapter} {number} />
	<div class="grid gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
		{#each chapter.photos ?? [] as photo, i (photo.id)}
			<div
				class="reveal flex justify-center {tilts[i % tilts.length]}"
				style:transition-delay="{i * 120}ms"
				{@attach reveal}
			>
				<StoryMedia media={{ kind: 'photo', photo }} size="inline" {onopen} />
			</div>
		{/each}
	</div>
	<h3 class="mt-24 text-3xl font-bold text-white">My buddies</h3>
	<ul class="mt-6 flex flex-row flex-wrap justify-center">
		{#each buddies as buddy (buddy.name)}
			<BuddyCard {buddy} />
		{/each}
	</ul>
</section>
