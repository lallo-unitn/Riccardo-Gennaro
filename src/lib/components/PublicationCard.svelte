<script lang="ts">
	import { type Publication, toBibtex } from '$lib/content';
	import WorkCard from './WorkCard.svelte';

	let { publication }: { publication: Publication } = $props();

	const bibtex = $derived(toBibtex(publication));
	// A DOI, once set in content.ts, becomes an extra button after "View PDF".
	const work = $derived({
		...publication,
		links: publication.doi
			? [
					publication.links[0],
					{ label: 'DOI', href: `https://doi.org/${publication.doi}` },
					...publication.links.slice(1)
				]
			: publication.links
	});

	let copied = $state(false);
	async function copyBibtex() {
		try {
			await navigator.clipboard.writeText(bibtex);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			copied = false;
		}
	}
</script>

<WorkCard {work}>
	<p class="mb-3 text-sm font-light leading-tight text-gray-300">
		{publication.authors.join(', ')}
	</p>
	<p class="mb-3 text-sm font-light leading-tight text-gray-300">In: {publication.venue}</p>
	<details class="order-last mt-4">
		<summary class="cursor-pointer text-sm font-medium text-hush-blue-300">Cite (BibTeX)</summary>
		<pre
			class="mt-2 overflow-x-auto rounded bg-hush-grey-800 p-3 text-xs text-hush-white">{bibtex}</pre>
		<button
			type="button"
			onclick={copyBibtex}
			class="mt-2 rounded border border-hush-grey-300 px-3 py-1 text-xs text-hush-white hover:border-hush-blue-500"
		>
			{copied ? 'Copied' : 'Copy BibTeX'}
		</button>
	</details>
</WorkCard>
