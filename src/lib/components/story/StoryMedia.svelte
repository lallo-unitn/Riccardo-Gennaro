<!--
	The picture that goes with a story step.
	size="stage": large, in the sticky column on desktop (decorative copy, so not focusable).
	size="inline": next to the text, on phones and when JavaScript is off.
-->
<script lang="ts">
	import type { Media } from '$lib/story';
	import Polaroid from './Polaroid.svelte';

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
	<Polaroid
		photo={media.photo}
		decorative={stage}
		{onopen}
		class={stage ? 'w-[min(30rem,80%)] -rotate-2' : 'w-full max-w-sm -rotate-1'}
	/>
{:else if media.kind === 'logos'}
	<div class="flex items-center {stage ? '-space-x-6' : 'gap-3'}">
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
{:else if media.kind === 'brand' && media.bare}
	<img
		src={media.src}
		alt={stage ? '' : media.alt}
		loading="lazy"
		decoding="async"
		class="rounded-2xl object-contain shadow-2xl shadow-black/50 {stage
			? 'h-48 w-48 lg:h-56 lg:w-56'
			: 'h-24 w-24'}"
	/>
{:else if media.kind === 'brand'}
	<div
		class="flex items-center justify-center rounded-2xl bg-white shadow-2xl shadow-black/50 {stage
			? 'h-48 w-[min(26rem,85%)] p-6'
			: 'h-24 w-56 p-5'}"
	>
		<img
			src={media.src}
			alt={stage ? '' : media.alt}
			loading="lazy"
			decoding="async"
			class="max-h-full max-w-full object-contain"
		/>
	</div>
{:else if media.kind === 'record'}
	<!-- An album sleeve with the record half pulled out to the right; the label spins. -->
	<div class="relative aspect-square -translate-x-[26%] {stage ? 'w-[min(24rem,60%)]' : 'w-44'}">
		<div
			class="vinyl absolute inset-[4%] translate-x-[58%] rounded-full shadow-2xl shadow-black/60 ring-1 ring-white/10"
		>
			<div class="spin absolute inset-[33%] overflow-hidden rounded-full bg-hush-blue-500">
				{#if media.label}
					<img
						src={media.label}
						alt={stage ? '' : media.labelAlt}
						loading="lazy"
						decoding="async"
						class="h-full w-full object-cover"
					/>
				{/if}
			</div>
		</div>
		<div
			class="relative h-full w-full overflow-hidden rounded-sm bg-gradient-to-br from-hush-blue-500 to-hush-blue-900 shadow-2xl shadow-black/60"
		>
			{#if media.sleeve}
				<img
					src={media.sleeve}
					alt={stage ? '' : media.sleeveAlt}
					loading="lazy"
					decoding="async"
					class="h-full w-full object-cover"
				/>
			{/if}
		</div>
	</div>
{:else if media.kind === 'word'}
	<span
		aria-hidden="true"
		class="block font-black leading-none tracking-tight text-transparent [-webkit-text-stroke:2px_theme(colors.hush-blue.500)] {stage
			? 'text-[clamp(4rem,9vw,9rem)]'
			: 'text-6xl'}">{media.text}</span
	>
{/if}

<style>
	/* Grooves, then a thin shine. */
	.vinyl {
		background:
			conic-gradient(
				from 30deg,
				transparent 0 10%,
				rgb(255 255 255 / 0.08) 14%,
				transparent 20% 60%,
				rgb(255 255 255 / 0.08) 64%,
				transparent 70%
			),
			radial-gradient(circle, transparent 32%, #0b0b0b 32.5%, #0b0b0b 35%, transparent 35.5%),
			repeating-radial-gradient(circle, #0e0e0e 0 1.5px, #2e2e2e 1.5px 3px), #141414;
	}
	@media (prefers-reduced-motion: no-preference) {
		.spin {
			animation: spin 6s linear infinite;
		}
	}
	@keyframes spin {
		to {
			rotate: 360deg;
		}
	}
</style>
