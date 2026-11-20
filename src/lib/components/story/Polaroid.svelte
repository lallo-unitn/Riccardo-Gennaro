<!-- A photo in a white polaroid frame with its caption. Clicking opens the full-screen viewer. -->
<script lang="ts">
	import type { Photo } from '$lib/content';

	let {
		photo,
		decorative = false,
		class: className = '',
		onopen
	}: {
		photo: Photo;
		/** True for the desktop "stage" copy: hidden from screen readers and the Tab order. */
		decorative?: boolean;
		class?: string;
		onopen?: (photoId: string) => void;
	} = $props();
</script>

<button
	type="button"
	tabindex={decorative ? -1 : undefined}
	onclick={() => onopen?.(photo.id)}
	class="group block rounded-sm bg-hush-white p-3 pb-2 text-left shadow-2xl shadow-black/60 {className}"
>
	<img
		src={photo.src}
		alt={decorative ? '' : photo.alt}
		width={photo.width}
		height={photo.height}
		loading="lazy"
		decoding="async"
		class="w-full"
	/>
	<span class="mt-2 block text-sm italic text-hush-grey-500">{photo.caption}</span>
</button>
