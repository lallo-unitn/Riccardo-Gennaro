<!-- A chapter that is one pinned photo-pile scene (see PhotoStack). -->
<script lang="ts">
	import type { Chapter } from '$lib/story';
	import ChapterHeader from './ChapterHeader.svelte';
	import PhotoStack from './PhotoStack.svelte';

	let {
		chapter,
		number,
		onopen
	}: { chapter: Chapter; number: number; onopen: (photoId: string) => void } = $props();
</script>

<section id={chapter.id} data-chapter class="chapter relative">
	<ChapterHeader {chapter} {number} />
	<PhotoStack steps={chapter.steps} photos={chapter.photos ?? []} {onopen} />
</section>
