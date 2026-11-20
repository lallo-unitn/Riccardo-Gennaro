<!-- Chapter navigation: a vertical rail on desktop, a small menu on phones. -->
<script lang="ts">
	import { chapters } from '$lib/story';
	import { storyState } from '$lib/story/state.svelte';

	const items = [
		...chapters.map((c) => ({ id: c.id, label: c.short })),
		{ id: 'now', label: 'Now' }
	];
	let menu: HTMLDetailsElement;
</script>

<nav
	aria-label="Chapters"
	class="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 md:block lg:right-8"
>
	<ol class="flex flex-col items-end gap-3">
		{#each items as item (item.id)}
			{@const active = storyState.active === item.id}
			<li>
				<a
					href="#{item.id}"
					aria-current={active ? 'location' : undefined}
					class="group flex items-center gap-3 text-sm"
				>
					<span
						class="sr-only whitespace-nowrap rounded bg-hush-grey-600/90 px-1 transition-colors group-hover:not-sr-only group-focus-visible:not-sr-only lg:not-sr-only lg:bg-transparent lg:px-0 {active
							? 'font-semibold text-white'
							: 'text-hush-grey-100 group-hover:text-white'}">{item.label}</span
					>
					<span
						aria-hidden="true"
						class="h-px transition-all {active ? 'w-8 bg-hush-blue-500' : 'w-4 bg-hush-grey-300'}"
					></span>
				</a>
			</li>
		{/each}
	</ol>
</nav>

<details bind:this={menu} class="fixed right-3 top-2 z-40 md:hidden">
	<summary
		class="cursor-pointer list-none rounded-lg bg-hush-grey-500 px-4 py-2 text-sm font-medium text-white shadow-lg [&::-webkit-details-marker]:hidden"
	>
		Chapters
	</summary>
	<nav aria-label="Chapters (menu)" class="mt-2 rounded-lg bg-hush-grey-700 p-2 shadow-xl">
		<ol>
			{#each items as item (item.id)}
				<li>
					<a
						href="#{item.id}"
						onclick={() => (menu.open = false)}
						class="flex gap-3 rounded px-3 py-2 text-sm hover:bg-hush-grey-500 {storyState.active ===
						item.id
							? 'text-hush-blue-300'
							: 'text-hush-white'}"
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ol>
	</nav>
</details>
