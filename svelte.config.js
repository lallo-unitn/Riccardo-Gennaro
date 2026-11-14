import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Output folder. The deploy workflow uploads it; it is not committed.
			pages: 'docs',
			assets: 'docs',
			fallback: '404.html',
			strict: true
		}),
		paths: {
			// The site lives under https://<user>.github.io/<repo>/, so links need a "/<repo>" prefix.
			// The deploy workflow sets BASE_PATH; local `npm run dev` / `npm run build` use the root.
			base: /** @type {'' | `/${string}`} */ (process.env.BASE_PATH ?? '')
		}
	}
};

export default config;
