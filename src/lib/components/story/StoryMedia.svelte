<!--
	The picture that goes with a story step.
	size="stage": large, in the sticky column on desktop (decorative copy, so not focusable).
	size="inline": next to the text, on phones and when JavaScript is off.
-->
<script lang="ts">
	import type { Media } from '$lib/story';

	let {
		media,
		size,
		onopen
	}: { media: Media; size: 'stage' | 'inline'; onopen?: (photoId: string) => void } = $props();

	const stage = $derived(size === 'stage');
</script>

{#if media.kind === 'doc'}
	<img
		src={media.image}
		alt={stage ? '' : media.alt}
		loading="lazy"
		decoding="async"
		width="210"
		height="297"
		class="aspect-[210/297] rounded-sm bg-white object-cover shadow-2xl shadow-black/60 ring-1 ring-black/20 {stage
			? 'w-[min(22rem,32vh)]'
			: 'w-40'}"
		style:object-position={media.position ?? 'top'}
	/>
{:else if media.kind === 'photo'}
	<button
		type="button"
		tabindex={stage ? -1 : undefined}
		onclick={() => onopen?.(media.photo.id)}
		class="group block rounded-sm bg-hush-white p-3 pb-2 text-left shadow-2xl shadow-black/60 {stage
			? 'w-[min(30rem,80%)] -rotate-2'
			: 'w-full max-w-sm -rotate-1'}"
	>
		<img
			src={media.photo.src}
			alt={stage ? '' : media.photo.alt}
			width={media.photo.width}
			height={media.photo.height}
			loading="lazy"
			decoding="async"
			class="w-full"
		/>
		<span class="mt-2 block text-sm italic text-hush-grey-500">{media.photo.caption}</span>
	</button>
{:else if media.kind === 'logos'}
	<div class="flex items-center {stage ? '-space-x-6' : '-space-x-3'}">
		{#each media.logos as logo (logo.src)}
			<img
				src={logo.src}
				alt={stage ? '' : logo.alt}
				loading="lazy"
				decoding="async"
				width="96"
				height="96"
				class="rounded-full bg-white shadow-2xl ring-4 ring-hush-grey-600 {stage
					? 'h-40 w-40 lg:h-52 lg:w-52'
					: 'h-16 w-16'}"
			/>
		{/each}
	</div>
{:else if media.kind === 'word'}
	<span
		aria-hidden="true"
		class="block font-black leading-none tracking-tight text-transparent [-webkit-text-stroke:2px_theme(colors.hush-blue.500)] {stage
			? 'text-[clamp(4rem,9vw,9rem)]'
			: 'text-6xl'}">{media.text}</span
	>
{/if}
