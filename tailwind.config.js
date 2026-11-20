/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// Added to Tailwind's default palette (gray, sky, ...), which the site also uses.
			// Every colour is a CSS variable (src/app.css), so a chapter can switch palette:
			// <section data-theme="spotify"> recolours everything inside it.
			colors: {
				'hush-blue': {
					100: 'rgb(var(--c-accent-100) / <alpha-value>)',
					200: 'rgb(var(--c-accent-200) / <alpha-value>)',
					300: 'rgb(var(--c-accent-300) / <alpha-value>)',
					400: 'rgb(var(--c-accent-400) / <alpha-value>)',
					500: 'rgb(var(--c-accent-500) / <alpha-value>)',
					600: 'rgb(var(--c-accent-600) / <alpha-value>)',
					700: 'rgb(var(--c-accent-700) / <alpha-value>)',
					800: 'rgb(var(--c-accent-800) / <alpha-value>)',
					900: 'rgb(var(--c-accent-900) / <alpha-value>)'
				},
				'hush-grey': {
					100: 'rgb(var(--c-grey-100) / <alpha-value>)',
					200: 'rgb(var(--c-grey-200) / <alpha-value>)',
					300: 'rgb(var(--c-grey-300) / <alpha-value>)',
					400: 'rgb(var(--c-grey-400) / <alpha-value>)',
					500: 'rgb(var(--c-grey-500) / <alpha-value>)',
					600: 'rgb(var(--c-grey-600) / <alpha-value>)',
					700: 'rgb(var(--c-grey-700) / <alpha-value>)',
					800: 'rgb(var(--c-grey-800) / <alpha-value>)',
					900: 'rgb(var(--c-grey-900) / <alpha-value>)'
				},
				'hush-white': 'rgb(var(--c-paper) / <alpha-value>)',
				// Buttons ("View PDF", "GitHub", ...)
				action: {
					DEFAULT: 'rgb(var(--c-action) / <alpha-value>)',
					hover: 'rgb(var(--c-action-hover) / <alpha-value>)',
					ring: 'rgb(var(--c-action-ring) / <alpha-value>)',
					fg: 'rgb(var(--c-action-fg) / <alpha-value>)'
				}
			},
			fontFamily: {
				redhat: ['"Red Hat Display"', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: []
};
