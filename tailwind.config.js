// eslint-disable-next-line @typescript-eslint/no-var-requires

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {fontFamily: {
        redhat: 'Red Hat Display, sans-serif',
      },
    },
    colors: {
      primary: {
        "50":"#f0f9ff",
        "100":"#e0f2fe",
        "200":"#bae6fd",
        "300":"#7dd3fc",
        "400":"#38bdf8",
        "500":"#0ea5e9",
        "600":"#0284c7",
        "700":"#0369a1",
        "800":"#075985",
        "900":"#0c4a6e"
      },
      'hush-blue': {
        100: '#69bce5',
        200: '#53b2e1',
        300: '#3ea9de',
        400: '#289fda',
        500: '#289fda',
        600: '#248fc4',
        700: '#207fae',
        800: '#1c6f99',
        900: '#185f83',
      },
      'hush-grey': {
        100: '#808080',
        200: '#696969',
        300: '#535353',
        400: '#3d3d3d',
        500: '#292929',
        600: '#222222',
        700: '#1B1B1B',
        800: '#151515',
        900: '#0E0E0E',
      },
      'hush-white': '#f8f8f8',
      'gray':{
        50: '#f9fafb',
        100: '#808080',
        200: '#696969',
        300: '#535353',
        400: '#3d3d3d',
        500: '#292929',
        600: '#222222',
        700: '#1B1B1B',
        800: '#151515',
        900: '#289fda',
      },
    },
  },
  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

}
