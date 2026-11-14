<script lang="ts">
	import type { Buddy } from '$lib/content';
	import LinkButton from './LinkButton.svelte';

	let { buddy }: { buddy: Buddy } = $props();
</script>

<li class="mx-5 my-5 w-full max-w-sm rounded-lg bg-hush-grey-500 shadow-xl">
	<div class="flex flex-col items-center pb-10">
		<img
			loading="lazy"
			decoding="async"
			class="mb-3 mt-6 h-24 w-24 rounded-full object-cover shadow-lg"
			src={buddy.photo}
			alt={buddy.name}
		/>
		<h3 class="mb-1 text-xl font-medium text-white">{buddy.name}</h3>
		<span class="text-sm text-gray-400">{buddy.tagline}</span>
		<div class="mt-4 flex md:mt-6">
			<LinkButton href={buddy.href}>Website</LinkButton>
		</div>
	</div>
</li>
