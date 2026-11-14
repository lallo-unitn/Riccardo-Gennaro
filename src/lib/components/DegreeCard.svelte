<script lang="ts">
	import type { Degree } from '$lib/content';

	let { degree }: { degree: Degree } = $props();
	// Overlapping logos get a ring so they stay distinguishable.
	const multiple = $derived(degree.schools.length > 1);
</script>

<div class="mb-4 rounded-lg border border-gray-700 bg-gray-800 p-5">
	<h3 class="text-lg font-semibold text-white">{degree.level}</h3>
	<div class="mt-3 items-center p-3 sm:flex">
		<div class="mb-3 me-3 flex shrink-0 -space-x-3 sm:mb-0">
			{#each degree.schools as school (school.name)}
				<img
					loading="lazy"
					decoding="async"
					class="h-12 w-12 rounded-full {multiple ? 'ring-2 ring-hush-grey-500' : ''}"
					src={school.logo}
					alt="{school.name} logo"
				/>
			{/each}
		</div>
		<div class="text-base font-normal text-gray-400">
			<p class="font-medium text-white">
				{#each degree.schools as school, i (school.name)}
					{#if i > 0}<span class="mx-1">&amp;</span>{/if}<a
						class="hover:underline"
						href={school.href}
						target="_blank"
						rel="noopener noreferrer">{school.name}</a
					>
				{/each}
			</p>
			<p class="font-medium text-hush-grey-100">{degree.title}</p>
			{#if degree.grade}
				<p class="font-medium text-hush-grey-100">Grade: {degree.grade}</p>
			{/if}
			<p class="text-sm font-medium text-hush-grey-100">{degree.start} - {degree.end}</p>
			{#if degree.courses}
				<p class="text-white">Relevant Courses: {degree.courses.join(', ')}.</p>
			{/if}
			{#if degree.note}
				<p class="text-sm">{degree.note}</p>
			{/if}
		</div>
	</div>
</div>
