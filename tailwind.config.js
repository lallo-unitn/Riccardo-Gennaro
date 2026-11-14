/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// Added to Tailwind's default palette (gray, sky, ...), which the site also uses.
			colors: {
				'hush-blue': {
					100: '#69bce5',
					200: '#53b2e1',
					300: '#3ea9de',
					400: '#289fda',
					500: '#289fda',
					600: '#248fc4',
					700: '#207fae',
					800: '#1c6f99',
					900: '#185f83'
				},
				'hush-grey': {
					// was #808080 (3.7:1 on #292929, below WCAG AA's 4.5:1); now ~6:1
					100: '#a3a3a3',
					200: '#696969',
					300: '#535353',
					400: '#3d3d3d',
					500: '#292929',
					600: '#222222',
					700: '#1b1b1b',
					800: '#151515',
					900: '#0e0e0e'
				},
				'hush-white': '#f8f8f8',
				// Buttons ("View PDF", "GitHub", ...)
				action: {
					DEFAULT: '#1c64f2',
					hover: '#1a56db',
					ring: '#1e429f'
				}
			},
			fontFamily: {
				redhat: ['"Red Hat Display"', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: []
};
