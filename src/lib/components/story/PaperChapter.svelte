<!-- Pinned scene (desktop): the paper's first page grows and straightens, then the details appear. -->
<script lang="ts">
	import type { Chapter } from '$lib/story';
	import { scrollProgress } from '$lib/story/scroll';
	import ChapterHeader from './ChapterHeader.svelte';
	import StoryStep from './StoryStep.svelte';

	let { chapter, number }: { chapter: Chapter; number: number } = $props();
	const step = $derived(chapter.steps[0]);
</script>

<section id={chapter.id} data-chapter class="chapter relative">
	<ChapterHeader {chapter} {number} />
	<div class="scene relative md:h-[240vh]" {@attach scrollProgress}>
		<div
			class="md:sticky md:top-0 md:grid md:h-screen md:grid-cols-2 md:items-center md:gap-12 lg:gap-20"
		>
			{#if step.media?.kind === 'doc'}
				<div class="mb-10 flex justify-center md:mb-0">
					<img
						src={step.media.image}
						alt={step.media.alt}
						loading="lazy"
						decoding="async"
						width="210"
						height="297"
						class="sheet aspect-[210/297] w-[min(22rem,70vw)] rounded-sm bg-white object-cover object-top shadow-2xl shadow-black/60 md:w-[min(26rem,40vh)]"
					/>
				</div>
			{/if}
			<div class="details">
				<StoryStep {step} inlineMedia={false} />
			</div>
		</div>
	</div>
</section>

<style>
	@media (min-width: 768px) {
		:global(.js) .sheet {
			transform: scale(calc(0.55 + var(--p) * 0.45)) rotate(calc((1 - var(--p)) * -12deg));
		}
		:global(.js) .details {
			opacity: clamp(0, (var(--p) - 0.35) * 3, 1);
			transform: translateX(calc((1 - clamp(0, (var(--p) - 0.35) * 3, 1)) * 3rem));
		}
	}
</style>
