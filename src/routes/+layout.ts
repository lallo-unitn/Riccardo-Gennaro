// Page options like `prerender` are only read from +page.ts / +layout.ts files.
// Exporting it from a .svelte component is ignored, which made adapter-static
// emit only 404.html (no index.html), so GitHub Pages served the homepage with
// an HTTP 404 status.
export const prerender = true;
