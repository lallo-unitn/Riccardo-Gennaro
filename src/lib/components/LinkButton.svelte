<!-- The blue button used for "View PDF", "GitHub", "Website", etc. Opens in a new tab. -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	let { href, children }: { href: string; children: Snippet } = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="inline-flex transform items-center rounded-[var(--btn-radius)] bg-action px-4 py-2 text-center text-sm font-medium text-action-fg transition hover:scale-105 hover:bg-action-hover hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-action-ring"
>
	{@render children()}
</a>
