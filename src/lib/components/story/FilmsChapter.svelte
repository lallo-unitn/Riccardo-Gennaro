<!--
	Films, from a Letterboxd export (see src/lib/films.ts).
	Desktop with JavaScript: the rating chart is pinned and its bars rise as you scroll.
	Then decades and directors (bars grow in), favourites as ticket stubs, and the latest diary.
	Phones, no-JS and reduced motion: everything is shown in its final state.
-->
<script lang="ts">
	import type { Chapter } from '$lib/story';
	import { filmStats as s, formatDate } from '$lib/films';
	import { scrollProgress, reveal } from '$lib/story/scroll';
	import ChapterHeader from './ChapterHeader.svelte';
	import Stars from './Stars.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';

	let { chapter, number }: { chapter: Chapter; number: number } = $props();

	const maxRating = Math.max(...s.ratings.map((r) => r.count));
	const maxDecade = Math.max(...s.decades.map((d) => d.count));
	const maxDirector = Math.max(...s.directors.map((d) => d.count));
	const half = (stars: number) => `${Math.floor(stars) || ''}${stars % 1 ? '½' : ''}`;
	const heart =
		'M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.9 4.5 6.6 4.5c2.1 0 3.6 1.2 4.4 2.6.8-1.4 2.3-2.6 4.4-2.6 3.7 0 5.7 3.9 4.2 7.3C19.5 16.4 12 21 12 21z';
</script>

<section id={chapter.id} data-chapter class="chapter relative pb-24">
	<ChapterHeader {chapter} {number} />

	<!-- 1. Headline numbers and the pinned rating chart. -->
	<div class="scene relative md:h-[240vh]" {@attach scrollProgress}>
		<div
			class="md:sticky md:top-0 md:grid md:h-screen md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:items-center md:gap-12"
		>
			<dl class="reveal grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-8" {@attach reveal}>
				<div>
					<dt class="text-sm uppercase tracking-[0.2em] text-hush-blue-300">Films</dt>
					<dd class="text-5xl font-black text-white md:text-7xl">{s.count}</dd>
				</div>
				<div>
					<dt class="text-sm uppercase tracking-[0.2em] text-hush-blue-300">Average</dt>
					<dd class="text-5xl font-black text-white md:text-7xl">
						{s.average.toFixed(1)}<span class="text-2xl text-hush-grey-100 md:text-4xl">/5</span>
					</dd>
				</div>
				<div>
					<dt class="text-sm uppercase tracking-[0.2em] text-hush-blue-300">Loved</dt>
					<dd class="text-5xl font-black text-white md:text-7xl">{s.liked}</dd>
				</div>
			</dl>

			<figure class="mt-12 md:mt-0">
				<figcaption class="text-lg text-hush-grey-100">
					How I rate: <strong class="text-white">{half(s.mostGiven.stars)} stars</strong> is my
					usual verdict, {s.mostGiven.count} films out of {s.count}.
				</figcaption>
				<ol
					class="ratings mt-6 flex h-64 items-end gap-1.5 border-b border-hush-grey-300 md:h-[50vh] md:gap-3"
				>
					{#each s.ratings as r, i (r.stars)}
						<li
							class="flex h-full flex-1 flex-col items-center justify-end"
							style:--h={r.count / maxRating}
							style:--start={i * 0.05}
						>
							<span class="sr-only">{r.stars} stars: {r.count} films</span>
							<span aria-hidden="true" class="bar-count mb-1 text-sm font-bold text-white"
								>{r.count}</span
							>
							<span
								aria-hidden="true"
								class="bar w-full rounded-t {r.stars === s.mostGiven.stars
									? 'bg-hush-blue-500'
									: 'bg-hush-blue-500/40'}"
							></span>
						</li>
					{/each}
				</ol>
				<div aria-hidden="true" class="mt-2 flex gap-1.5 md:gap-3">
					{#each s.ratings as r (r.stars)}
						<span class="flex-1 text-center text-sm text-hush-grey-100">{half(r.stars)}★</span>
					{/each}
				</div>
			</figure>
		</div>
	</div>

	<!-- 2. When the films are from, and who made them. -->
	<div class="mt-24 grid gap-16 md:grid-cols-2">
		<div class="reveal" {@attach reveal}>
			<h3 class="text-3xl font-bold text-white">By decade</h3>
			<p class="mt-2 text-hush-grey-100">When the films I watched came out.</p>
			<ul class="mt-6 space-y-2">
				{#each s.decades as d, i (d.label)}
					<li class="grid grid-cols-[4rem_1fr_2rem] items-center gap-3">
						<span class="text-sm text-hush-grey-100">{d.label}</span>
						<span class="h-4 rounded-r bg-hush-grey-400">
							<span
								class="grow-bar block h-full rounded-r bg-hush-blue-500"
								style:width="{(d.count / maxDecade) * 100}%"
								style:transition-delay="{i * 70}ms"
							></span>
						</span>
						<span class="text-right text-sm font-bold text-white">{d.count}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="reveal" {@attach reveal}>
			<h3 class="text-3xl font-bold text-white">Directors on repeat</h3>
			<p class="mt-2 text-hush-grey-100">Films watched per director.</p>
			<ul class="mt-6 space-y-3">
				{#each s.directors as d, i (d.name)}
					<li>
						<div class="flex justify-between text-sm">
							<span class="text-white">{d.name}</span>
							<span class="font-bold text-white">{d.count}</span>
						</div>
						<span class="mt-1 block h-2 rounded-full bg-hush-grey-400">
							<span
								class="grow-bar block h-full rounded-full bg-hush-blue-500"
								style:width="{(d.count / maxDirector) * 100}%"
								style:transition-delay="{i * 90}ms"
							></span>
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- 3. Favourites as ticket stubs. -->
	<h3 class="reveal mt-24 text-3xl font-bold text-white" {@attach reveal}>Top of the list</h3>
	<p class="mt-2 text-hush-grey-100">Everything rated 4½ stars or more.</p>
	<ul class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
		{#each s.favourites as f, i (f.url)}
			<li class="ticket reveal relative" style:transition-delay="{(i % 5) * 90}ms" {@attach reveal}>
				<a
					href={f.url}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-full flex-col rounded-lg border-l-4 border-dashed border-hush-blue-500 bg-hush-white px-4 py-3 text-hush-grey-700 shadow-xl shadow-black/40 transition hover:-translate-y-1 hover:rotate-1"
				>
					<span class="text-xs font-semibold uppercase tracking-widest text-hush-grey-200"
						>Admit one · {f.year}</span
					>
					<span class="mt-1 flex-1 font-bold leading-snug">{f.name}</span>
					<span class="mt-2 flex items-center justify-between">
						<Stars rating={f.rating} tint="text-hush-blue-800" />
						{#if f.liked}
							<svg viewBox="0 0 24 24" class="h-4 w-4 text-orange-600" role="img" aria-label="Loved"
								><path d={heart} fill="currentColor" /></svg
							>
						{/if}
					</span>
				</a>
			</li>
		{/each}
	</ul>

	<!-- 4. The latest diary entries. -->
	<div class="mt-24 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
		<div class="reveal" {@attach reveal}>
			<h3 class="text-3xl font-bold text-white">Lately</h3>
			<p class="mt-2 text-hush-grey-100">The last films in my diary. Updated {s.updated}.</p>
			<div class="mt-6">
				<LinkButton href={s.profile}>All my films on Letterboxd</LinkButton>
			</div>
		</div>
		<ol class="space-y-6">
			{#each s.latest as entry (entry.url)}
				<li class="reveal border-l-2 border-hush-grey-300 pl-5" {@attach reveal}>
					<p class="text-sm text-hush-blue-300">{formatDate(entry.watched)}</p>
					<p class="mt-1 text-xl font-bold text-white">
						<a
							href={entry.url}
							target="_blank"
							rel="noopener noreferrer"
							class="underline-offset-4 hover:underline">{entry.name}</a
						>
						<span class="font-normal text-hush-grey-100">{entry.year}</span>
					</p>
					{#if entry.rating}
						<div class="mt-1"><Stars rating={entry.rating} /></div>
					{/if}
					{#if entry.review}
						<blockquote class="mt-3 italic text-gray-300">“{entry.review}”</blockquote>
					{/if}
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.bar {
		height: calc(var(--h) * 85%);
	}
	/* --q: this bar's own progress, from 0 (flat) to 1 (full height). */
	.ratings li {
		--q: clamp(0, (var(--p) - var(--start)) / 0.3, 1);
	}
	@media (min-width: 768px) {
		:global(.js) .bar {
			height: calc(var(--h) * var(--q) * 85%);
		}
		:global(.js) .bar-count {
			opacity: var(--q);
		}
	}
	/* Bars in the decade and director charts grow in when their block scrolls into view. */
	.grow-bar {
		transform-origin: left;
		transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
	}
	:global(.js) :global(.reveal:not(.is-in)) .grow-bar {
		transform: scaleX(0);
	}
	.ticket {
		rotate: var(--tilt, 0deg);
	}
	.ticket:nth-child(3n + 1) {
		--tilt: -1.5deg;
	}
	.ticket:nth-child(3n + 2) {
		--tilt: 1deg;
	}
</style>
