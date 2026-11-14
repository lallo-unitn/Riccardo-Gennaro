<script lang="ts">
	import type { Job } from '$lib/content';
	import Icon from './Icon.svelte';

	let { jobs }: { jobs: Job[] } = $props();
</script>

<ol class="relative border-s border-gray-700">
	{#each jobs as job (job.title + job.start)}
		<li class="mb-10 ms-6">
			<span
				class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-900 ring-8 ring-gray-900"
			>
				<Icon name="calendar" class="h-4 w-4 text-hush-blue-500" />
			</span>
			<h3 class="mb-1 flex items-center text-lg font-semibold text-white">{job.title}</h3>
			<p class="mb-2 block text-sm font-normal leading-none text-hush-grey-100">
				{job.organization}, {job.start} - {job.end}, {job.location}
			</p>
			{#if job.description.length}
				<p class="mb-4 text-base font-normal text-hush-white">
					{#each job.description as line, i (i)}
						{#if i > 0}<br />{/if}{line}
					{/each}
				</p>
			{/if}
		</li>
	{/each}
</ol>
