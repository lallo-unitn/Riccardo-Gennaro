<!-- Opening scene: as you start scrolling, the intro fades up and the portrait recedes into greyscale. -->
<script lang="ts">
	import { profile } from '$lib/content';
	import { scrollProgress } from '$lib/story/scroll';
	import Icon from '$lib/components/Icon.svelte';

	let { chapterCount }: { chapterCount: number } = $props();

	const contacts = [
		{ icon: 'envelope', label: profile.email, href: `mailto:${profile.email}` },
		{ icon: 'linkedin', label: profile.linkedin.handle, href: profile.linkedin.href },
		{ icon: 'github', label: profile.github.handle, href: profile.github.href }
	] as const;
</script>

<section
	id="top"
	data-chapter
	class="scene scene-start relative h-[170vh]"
	{@attach scrollProgress}
>
	<div
		class="sticky top-0 grid h-screen grid-rows-[minmax(0,1fr)_auto] items-center gap-6 py-6 md:grid-cols-2 md:grid-rows-1 md:gap-12"
	>
		<div class="intro relative z-10 order-2 md:order-1">
			<h1
				class="text-[clamp(3rem,6.5vw,6.5rem)] font-black uppercase leading-[0.9] tracking-tight text-hush-blue-500"
			>
				{profile.firstName}<br />{profile.lastName}
			</h1>
			<p class="mt-4 text-lg text-hush-white md:mt-6 md:text-xl">{profile.headline}</p>
			<ul class="mt-4 flex flex-wrap gap-x-6 gap-y-2 md:mt-6">
				{#each contacts as c (c.href)}
					<li class="flex items-center gap-2">
						<Icon name={c.icon} class="h-5 w-5 text-hush-blue-500" />
						<a href={c.href} class="text-hush-white hover:text-hush-blue-300">{c.label}</a>
					</li>
				{/each}
			</ul>
			<p class="mt-6 flex items-center gap-3 text-hush-grey-100 md:mt-10">
				<span>The story so far, in {chapterCount} chapters.</span>
				<span aria-hidden="true" class="inline-block motion-safe:animate-bounce">↓</span>
			</p>
		</div>
		<div class="order-1 flex h-full min-h-0 justify-center md:order-2">
			<img
				src={profile.portrait}
				alt="Portrait of {profile.name}"
				width="900"
				height="869"
				fetchpriority="high"
				class="portrait h-full max-h-[70vh] w-auto rounded-lg object-cover shadow-2xl shadow-black/40 md:h-auto md:max-h-[75vh] md:w-full"
			/>
		</div>
	</div>
</section>

<style>
	.intro {
		opacity: calc(1 - var(--p) * 1.8);
		transform: translateY(calc(var(--p) * -5rem));
	}
	.portrait {
		transform: scale(calc(1 - var(--p) * 0.15));
		filter: grayscale(var(--p));
		opacity: calc(1 - var(--p) * 0.6);
	}
</style>
