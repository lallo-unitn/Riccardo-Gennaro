<!-- A star rating the Letterboxd way: only the stars given, with a half star where needed. -->
<script lang="ts">
	let {
		rating,
		class: className = 'h-4 w-4',
		tint = 'text-hush-blue-300'
	}: { rating: number; class?: string; tint?: string } = $props();

	const full = $derived(Math.floor(rating));
	const half = $derived(rating % 1 !== 0);
	const star = 'M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z';
</script>

<span class="inline-flex items-center {tint}">
	<span class="sr-only">{rating} out of 5 stars</span>
	{#each { length: full }, i (i)}
		<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="currentColor"
			><path d={star} /></svg
		>
	{/each}
	{#if half}
		<!-- The left half of a star. -->
		<svg
			viewBox="0 0 24 24"
			class={className}
			aria-hidden="true"
			fill="currentColor"
			style:clip-path="inset(0 50% 0 0)"><path d={star} /></svg
		>
	{/if}
</span>
