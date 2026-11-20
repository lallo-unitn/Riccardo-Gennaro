<!--
	Pinned scene (desktop): the text stays put while polaroids drop onto a pile,
	one after another, as you scroll. Phones and no-JS: text, then a grid of photos.
	Used by the OFF-SOUND and Riding chapters, and to close the degree chapters.
-->
<script lang="ts">
	import type { Step } from '$lib/story';
	import type { Photo } from '$lib/content';
	import { scrollProgress, reveal } from '$lib/story/scroll';
	import StoryStep from './StoryStep.svelte';
	import StoryMedia from './StoryMedia.svelte';

	let {
		steps,
		photos,
		onopen
	}: { steps: Step[]; photos: Photo[]; onopen: (photoId: string) => void } = $props();

	// Where each photo lands on the pile (offsets relative to its own size) and its tilt,
	// by number of photos, so small piles stay centred.
	const layouts = {
		2: [
			{ x: '-26%', y: '-8%', rot: '-6deg' },
			{ x: '24%', y: '8%', rot: '5deg' }
		],
		3: [
			{ x: '-28%', y: '-22%', rot: '-6deg' },
			{ x: '26%', y: '-16%', rot: '5deg' },
			{ x: '0%', y: '26%', rot: '-2deg' }
		],
		4: [
			{ x: '-28%', y: '-30%', rot: '-7deg' },
			{ x: '26%', y: '-22%', rot: '5deg' },
			{ x: '-20%', y: '24%', rot: '4deg' },
			{ x: '22%', y: '30%', rot: '-3deg' }
		]
	};
	const spots = $derived(layouts[Math.min(4, Math.max(2, photos.length)) as keyof typeof layouts]);
</script>

<!-- Taller with more photos: each one gets about the same amount of scrolling. -->
<div class="scene relative" style:--scene-h="{100 + photos.length * 55}vh" {@attach scrollProgress}>
	<div
		class="md:sticky md:top-0 md:grid md:h-screen md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-12"
	>
		{#each steps as step, i (i)}
			<StoryStep {step} inlineMedia={false} {onopen} />
		{/each}
		<div class="stack relative mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-0 md:h-full">
			{#each photos as photo, i (photo.id)}
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

<style>
	/* --q: this photo's own progress, from 0 (off screen) to 1 (landed). */
	.stack-photo {
		--q: clamp(0, (var(--p) - var(--start)) / 0.25, 1);
	}
	@media (min-width: 768px) {
		.scene {
			height: var(--scene-h);
		}
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
