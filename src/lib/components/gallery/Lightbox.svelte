<!--
	Full-screen photo viewer, built on the native <dialog> element, which provides the
	Escape key, focus trapping and the backdrop for free. Arrow keys and buttons move
	between photos; clicking outside the photo closes it.
-->
<script lang="ts">
	import type { Photo } from '$lib/content';

	let { photos, index = $bindable(-1) }: { photos: Photo[]; index?: number } = $props();

	let dialog: HTMLDialogElement;
	const photo = $derived(index >= 0 ? photos[index] : undefined);

	$effect(() => {
		if (index >= 0 && !dialog.open) dialog.showModal();
		if (index < 0 && dialog.open) dialog.close();
	});

	const step = (d: number) => (index = (index + d + photos.length) % photos.length);

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}
</script>

<dialog
	bind:this={dialog}
	onclose={() => (index = -1)}
	onclick={(e) => e.target === dialog && dialog.close()}
	{onkeydown}
	aria-label="Photo viewer"
	class="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/90"
>
	{#if photo}
		<figure class="flex flex-col items-center gap-3">
			<img
				src={photo.full}
				alt={photo.alt}
				class="max-h-[80vh] max-w-[92vw] rounded-md object-contain shadow-2xl"
			/>
			<figcaption class="text-center text-hush-white">
				{photo.caption}
				<span class="ml-2 text-sm text-hush-grey-100">{index + 1} / {photos.length}</span>
			</figcaption>
		</figure>
		<div class="mt-3 flex justify-center gap-3">
			<button
				type="button"
				class="rounded-lg bg-hush-grey-500 px-4 py-2 text-sm text-white hover:bg-hush-grey-400"
				onclick={() => step(-1)}
			>
				<span aria-hidden="true">←</span> Previous
			</button>
			<button
				type="button"
				class="rounded-lg bg-hush-grey-500 px-4 py-2 text-sm text-white hover:bg-hush-grey-400"
				onclick={() => dialog.close()}
			>
				Close
			</button>
			<button
				type="button"
				class="rounded-lg bg-hush-grey-500 px-4 py-2 text-sm text-white hover:bg-hush-grey-400"
				onclick={() => step(1)}
			>
				Next <span aria-hidden="true">→</span>
			</button>
		</div>
	{/if}
</dialog>
