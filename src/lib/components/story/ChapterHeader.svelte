<!-- Opening of a chapter: number, title and one-line intro. Also a small sticky label on phones. -->
<script lang="ts">
	import type { Chapter } from '$lib/story';
	import { reveal } from '$lib/story/scroll';

	let { chapter, number }: { chapter: Chapter; number: number } = $props();
</script>

<div
	class="sticky top-0 z-20 -mx-4 mb-6 border-b border-hush-grey-500 bg-hush-grey-600 px-4 py-3 pr-32 md:hidden"
	aria-hidden="true"
>
	<span class="font-bold text-hush-blue-500">{chapter.year}</span>
	<span class="ml-2 text-sm text-hush-grey-100">{chapter.title}</span>
</div>

<header
	class="reveal flex min-h-[50vh] flex-col justify-center py-16 md:min-h-[80vh]"
	{@attach reveal}
>
	<p class="text-sm font-semibold uppercase tracking-[0.2em] text-hush-blue-300">
		Chapter {number}
	</p>
	<h2 class="mt-3 max-w-4xl text-5xl font-black leading-[0.95] text-white md:text-7xl lg:text-8xl">
		{chapter.title}
	</h2>
	<p class="mt-6 max-w-2xl text-lg text-hush-grey-100 md:text-xl">{chapter.intro}</p>
</header>
