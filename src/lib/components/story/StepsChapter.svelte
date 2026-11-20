<!--
	A chapter told in steps. On desktop (with JavaScript) the picture of the step you are
	reading stays pinned on the left and cross-fades as the steps scroll by on the right.
	On phones, or without JavaScript, each step simply shows its own picture.
-->
<script lang="ts">
	import type { Chapter, Media } from '$lib/story';
	import { activeChild } from '$lib/story/scroll';
	import ChapterHeader from './ChapterHeader.svelte';
	import StoryStep from './StoryStep.svelte';
	import StoryMedia from './StoryMedia.svelte';
	import PhotoStack from './PhotoStack.svelte';

	let {
		chapter,
		number,
		onopen
	}: { chapter: Chapter; number: number; onopen: (photoId: string) => void } = $props();

	// Steps without a picture keep showing the previous step's picture.
	const stage = $derived.by(() => {
		const media: Media[] = [];
		const forStep: number[] = [];
		for (const step of chapter.steps) {
			if (step.media) media.push(step.media);
			forStep.push(Math.max(0, media.length - 1));
		}
		return { media, forStep };
	});

	let activeStep = $state(0);
	const shown = $derived(stage.forStep[activeStep] ?? 0);
</script>

<section id={chapter.id} data-chapter data-theme={chapter.theme} class="chapter relative">
	<ChapterHeader {chapter} {number} />
	<div
		class="md:grid md:grid-cols-2 md:gap-12 lg:gap-20"
		{@attach activeChild('[data-step]', (i) => (activeStep = i))}
	>
		<div class="stage sticky top-0 h-screen items-center justify-center" aria-hidden="true">
			{#each stage.media as media, i (i)}
				<div
					class="absolute inset-0 flex items-center justify-center transition duration-700 ease-out {i ===
					shown
						? 'scale-100 opacity-100'
						: 'pointer-events-none scale-95 opacity-0'}"
				>
					<StoryMedia {media} size="stage" {onopen} />
				</div>
			{/each}
		</div>
		<div>
			{#each chapter.steps as step, i (i)}
				<div data-step class="py-10 md:flex md:min-h-[85vh] md:items-center md:py-0">
					<StoryStep {step} {onopen} />
				</div>
			{/each}
		</div>
	</div>
	{#if chapter.closing}
		<PhotoStack steps={[chapter.closing.step]} photos={chapter.closing.photos} {onopen} />
	{/if}
</section>

<style>
	.stage {
		display: none;
	}
	@media (min-width: 768px) {
		:global(.js) .stage {
			display: flex;
		}
		:global(.js) .chapter :global(.inline-media) {
			display: none;
		}
	}
</style>
