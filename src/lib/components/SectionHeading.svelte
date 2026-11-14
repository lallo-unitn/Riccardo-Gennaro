<!-- Section title: an optional white lead-in followed by a blue accent, e.g. "Work Experience". -->
<script lang="ts">
	let {
		lead = '',
		accent,
		align = 'left'
	}: { lead?: string; accent: string; align?: 'left' | 'right' } = $props();
</script>

<h2
	class="mb-5 mt-5 text-4xl font-bold md:text-6xl {align === 'right'
		? 'ml-auto text-right'
		: 'mr-auto'}"
>
	{#if lead}<span class="text-white">{lead}</span>{/if}
	<span class="text-hush-blue-500">{accent}</span>
</h2>
