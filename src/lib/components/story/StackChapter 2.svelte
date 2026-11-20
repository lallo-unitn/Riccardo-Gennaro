<!--
	Pinned scene (desktop): the project text stays put while polaroids drop onto a pile,
	one after another, as you scroll. Phones and no-JS: text, then a grid of photos.
-->
<script lang="ts">
	import type { Chapter } from '$lib/story';
	import { scrollProgress, reveal } from '$lib/story/scroll';
	import ChapterHeader from './ChapterHeader.svelte';
	import StoryStep from './StoryStep.svelte';
	import StoryMedia from './StoryMedia.svelte';

	let {
		chapter,
		number,
		onopen
	}: { chapter: Chapter; number: number; onopen: (photoId: string) => void } = $props();

	// Where each photo lands on the pile (offsets relative to its own size) and its tilt.
	const spots = [
		{ x: '-28%', y: '-30%', rot: '-7deg' },
		{ x: '26%', y: '-22%', rot: '5deg' },
		{ x: '-20%', y: '24%', rot: '4deg' },
		{ x: '22%', y: '30%', rot: '-3deg' }
	];
</script>

<section id={chapter.id} data-chapter class="chapter relative">
	<ChapterHeader {chapter} {number} />
	<div class="scene relative md:h-[320vh]" {@attach scrollProgress}>
		<div
			class="md:sticky md:top-0 md:grid md:h-screen md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-12"
		>
			{#each chapter.steps as step, i (i)}
				<StoryStep {step} inlineMedia={false} {onopen} />
			{/each}
			<div class="stack relative mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-0 md:h-full">
				{#each chapter.photos ?? [] as photo, i (photo.id)}
					{@const spot = spots[i % spots.length]}
					<div
						class="stack-photo reveal"
						style:--start={i * 0.17}
						style:--x={spot.x}
						style:--y={spot.y}
						style:--rot={spot.rot}
						{@attach reveal}
					>
						<StoryMedia media={{ kind: 'photo', photo }} size="inline" {onopen} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* --q: this photo's own progress, from 0 (off screen) to 1 (landed). */
	.stack-photo {
		--q: clamp(0, (var(--p) - var(--start)) / 0.25, 1);
	}
	@media (min-width: 768px) {
		:global(.js) .stack .stack-photo.reveal {
			position: absolute;
			left: 50%;
			top: 50%;
			width: min(20rem, 26vw);
			opacity: clamp(0, var(--q) * 3, 1);
			transform: translate(-50%, -50%) translate(var(--x), var(--y))
				translateY(calc((1 - var(--q)) * 100vh)) rotate(calc(var(--rot) * var(--q)));
			transition: none;
		}
	}
</style>
