<script lang="ts">
	import { type Publication, toBibtex } from '$lib/content';

	let { publication }: { publication: Publication } = $props();
	const bibtex = $derived(toBibtex(publication));

	let copied = $state(false);
	async function copy() {
		try {
			await navigator.clipboard.writeText(bibtex);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			copied = false;
		}
	}
</script>

<details class="mt-5">
	<summary class="cursor-pointer text-sm font-medium text-hush-blue-300">Cite (BibTeX)</summary>
	<pre
		class="mt-2 overflow-x-auto rounded bg-hush-grey-800 p-3 text-xs text-hush-white">{bibtex}</pre>
	<button
		type="button"
		onclick={copy}
		class="mt-2 rounded border border-hush-grey-300 px-3 py-1 text-xs text-hush-white hover:border-hush-blue-500"
	>
		{copied ? 'Copied' : 'Copy BibTeX'}
	</button>
</details>
