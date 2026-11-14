<!-- Card with a thumbnail on the left (top on mobile): used for publications, theses and projects. -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Work } from '$lib/content';
	import LinkButton from './LinkButton.svelte';

	let { work, children }: { work: Work; children?: Snippet } = $props();
</script>

<article
	class="flex w-full flex-col items-center rounded-lg border border-gray-900 bg-hush-grey-500 shadow-xl md:max-w-screen-md md:flex-row"
>
	<img
		loading="lazy"
		decoding="async"
		class="h-96 w-full rounded-t-lg object-cover md:h-full md:w-48 md:rounded-none md:rounded-s-lg {work.imagePosition ===
		'left-top'
			? 'object-left-top'
			: 'object-top'}"
		src={work.image}
		alt={work.imageAlt}
	/>
	<div class="flex w-full min-w-0 flex-col justify-between p-4 leading-normal">
		<h3 class="mb-2 text-2xl font-bold tracking-tight text-white">{work.title}</h3>
		{#if work.tags?.length}
			<ul class="mb-3 flex flex-wrap gap-2">
				{#each work.tags as tag (tag)}
					<li
						class="rounded-full border border-hush-grey-300 px-2.5 py-0.5 text-xs font-medium text-hush-grey-100"
					>
						{tag}
					</li>
				{/each}
			</ul>
		{/if}
		{#if work.description}
			<p class="mb-3 font-normal leading-tight text-gray-300">{work.description}</p>
		{/if}
		{@render children?.()}
		<div class="mt-4 flex flex-wrap gap-5 md:mt-6">
			{#each work.links as link (link.href)}
				<LinkButton href={link.href}>{link.label}</LinkButton>
			{/each}
		</div>
	</div>
</article>
