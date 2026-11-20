<!-- One moment in the story: date, title, text, tags, links. -->
<script lang="ts">
	import type { Step } from '$lib/story';
	import { reveal } from '$lib/story/scroll';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import StoryMedia from './StoryMedia.svelte';
	import BibtexBlock from './BibtexBlock.svelte';

	let {
		step,
		inlineMedia = true,
		onopen
	}: { step: Step; inlineMedia?: boolean; onopen?: (photoId: string) => void } = $props();
</script>

<article class="reveal" {@attach reveal}>
	{#if inlineMedia && step.media}
		<!-- On desktop with JavaScript this moves to the sticky stage instead (see .inline-media). -->
		<div class="inline-media mb-6 flex justify-center">
			<StoryMedia media={step.media} size="inline" {onopen} />
		</div>
	{/if}
	<p class="text-sm font-semibold tracking-wide text-hush-blue-300">{step.when}</p>
	<h3 class="mt-1 text-2xl font-bold leading-tight text-white md:text-3xl">{step.title}</h3>
	{#if step.subtitle}
		<p class="mt-1 text-hush-grey-100">{step.subtitle}</p>
	{/if}
	{#each step.body as paragraph, i (i)}
		<p class="mt-3 leading-relaxed text-gray-300">{paragraph}</p>
	{/each}
	{#if step.ranked?.length}
		<div class="mt-5 grid gap-6 sm:grid-cols-2">
			{#each step.ranked as list (list.heading)}
				<div>
					<h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-hush-blue-300">
						{list.heading}
					</h4>
					<ol class="mt-2 space-y-2">
						{#each list.items as item, i (i)}
							<li class="flex gap-3">
								<span
									class="w-5 shrink-0 text-right font-bold text-hush-grey-100"
									aria-hidden="true">{i + 1}</span
								>
								<span class="min-w-0">
									<a
										href={item.url}
										target="_blank"
										rel="noopener noreferrer"
										class="block truncate font-semibold text-white underline-offset-4 hover:underline"
										>{item.name}</a
									>
									{#if item.detail}
										<span class="block truncate text-sm text-hush-grey-100">{item.detail}</span>
									{/if}
								</span>
							</li>
						{/each}
					</ol>
				</div>
			{/each}
		</div>
	{/if}
	{#if step.tags?.length}
		<ul class="mt-4 flex flex-wrap gap-2">
			{#each step.tags as tag (tag)}
				<li
					class="rounded-full border border-hush-grey-300 px-2.5 py-0.5 text-xs font-medium text-hush-grey-100"
				>
					{tag}
				</li>
			{/each}
		</ul>
	{/if}
	{#if step.links?.length}
		<div class="mt-5 flex flex-wrap gap-3">
			{#each step.links as link (link.href)}
				<LinkButton href={link.href}>{link.label}</LinkButton>
			{/each}
		</div>
	{/if}
	{#if step.publication}
		<BibtexBlock publication={step.publication} />
	{/if}
</article>
