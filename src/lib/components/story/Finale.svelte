<!-- Closing scene: the current job, contact links, the motto and the footer. -->
<script lang="ts">
	import { profile } from '$lib/content';
	import { now } from '$lib/story';
	import { reveal } from '$lib/story/scroll';
	import Icon from '$lib/components/Icon.svelte';

	const contacts = [
		{ icon: 'envelope', label: profile.email, href: `mailto:${profile.email}` },
		{ icon: 'linkedin', label: profile.linkedin.handle, href: profile.linkedin.href },
		{ icon: 'github', label: profile.github.handle, href: profile.github.href }
	] as const;
	const year = new Date().getFullYear();
</script>

<section id="now" data-chapter class="relative flex min-h-screen flex-col justify-center py-24">
	<div class="reveal" {@attach reveal}>
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-hush-blue-300">
			Now, since {now.start}
		</p>
		<h2 class="mt-3 text-5xl font-black leading-[0.95] text-white md:text-7xl lg:text-8xl">
			{now.title}
		</h2>
		<p class="mt-4 text-xl text-hush-grey-100 md:text-2xl">{now.organization}, {now.location}</p>
		{#if now.logo}
			<div
				class="mt-8 flex h-24 w-56 items-center justify-center rounded-2xl bg-white p-4 shadow-2xl shadow-black/50"
			>
				<img
					src={now.logo}
					alt="{now.organization} logo"
					loading="lazy"
					decoding="async"
					class="max-h-full max-w-full object-contain"
				/>
			</div>
		{/if}
		<ul class="mt-10 flex flex-col gap-4 text-lg md:flex-row md:gap-10">
			{#each contacts as c (c.href)}
				<li class="flex items-center gap-3">
					<Icon name={c.icon} class="h-6 w-6 text-hush-blue-500" />
					<a href={c.href} class="text-hush-white underline-offset-4 hover:underline">{c.label}</a>
				</li>
			{/each}
		</ul>
		<figure class="mt-20 max-w-2xl">
			<blockquote class="text-2xl italic text-white md:text-3xl">{profile.quote}</blockquote>
			<figcaption class="mt-2 italic text-hush-grey-100">{profile.quoteNote}</figcaption>
		</figure>
	</div>
	<footer class="mt-24 border-t border-hush-grey-500 pt-6 text-sm text-hush-grey-100">
		© {year}
		{profile.name}. Site code under the
		<a href="https://github.com/lallo-unitn/Riccardo-Gennaro/blob/main/LICENSE" class="underline"
			>MIT License</a
		>, text under
		<a href="https://creativecommons.org/licenses/by/4.0/" class="underline">CC BY 4.0</a>. Papers,
		theses and photos are not covered.
	</footer>
</section>
