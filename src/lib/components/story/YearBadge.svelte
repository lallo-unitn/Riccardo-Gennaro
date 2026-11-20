<!-- The giant outlined year behind the content (desktop). Changes with the chapter on screen. -->
<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { chapters } from '$lib/story';
	import { storyState } from '$lib/story/state.svelte';

	const year = $derived(chapters.find((c) => c.id === storyState.active)?.year ?? '');

	let reduced = $state(false);
	$effect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		reduced = mq.matches;
		const onchange = () => (reduced = mq.matches);
		mq.addEventListener('change', onchange);
		return () => mq.removeEventListener('change', onchange);
	});
</script>

<div
	aria-hidden="true"
	class="pointer-events-none fixed -bottom-[3vw] -left-[1vw] z-0 hidden select-none md:block"
>
	{#key year}
		<span
			in:fly={{ y: 80, duration: reduced ? 0 : 600 }}
			out:fade={{ duration: reduced ? 0 : 300 }}
			class="absolute bottom-0 left-0 block whitespace-nowrap text-[22vw] font-black leading-none text-transparent opacity-40 [-webkit-text-stroke:2px_theme(colors.hush-blue.500)]"
			>{year}</span
		>
	{/key}
</div>
