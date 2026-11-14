<!-- Top navigation. On small screens the links collapse behind a menu button. -->
<script lang="ts">
	import type { Link } from '$lib/content';

	let { links }: { links: Link[] } = $props();
	let open = $state(false);
</script>

<nav class="w-full bg-hush-grey-600 px-2 py-2.5 text-gray-400 sm:px-4">
	<div class="container mx-auto flex flex-wrap items-center justify-between">
		<div class="flex md:order-2">
			<button
				type="button"
				onclick={() => (open = !open)}
				aria-controls="main-menu"
				aria-expanded={open}
				class="ms-3 rounded-lg p-1.5 text-hush-white hover:bg-hush-grey-500 focus:outline-none focus:ring-2 focus:ring-hush-blue-300 md:hidden"
			>
				<span class="sr-only">{open ? 'Close main menu' : 'Open main menu'}</span>
				<svg
					class="h-6 w-6"
					aria-hidden="true"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>
		<div id="main-menu" class="order-1 mx-auto w-full md:block md:w-auto" class:hidden={!open}>
			<ul
				class="mt-4 flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium"
			>
				{#each links as link, i (link.href)}
					<li>
						<a
							href={link.href}
							onclick={() => (open = false)}
							aria-current={i === 0 ? 'page' : undefined}
							class="block rounded py-2 pe-4 ps-3 md:p-0 {i === 0
								? 'bg-hush-blue-800 text-hush-white md:text-white'
								: 'text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
