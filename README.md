# Riccardo Gennaro: portfolio

Source of my personal site, **https://lallo-unitn.github.io/Riccardo-Gennaro/**.

A single static page built with [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5) and
[Tailwind CSS](https://tailwindcss.com/), prerendered at build time and deployed to GitHub Pages
by GitHub Actions.

## Updating the content

Almost every change happens in **`src/lib/content.ts`**: profile, jobs, degrees, publications,
theses, projects and friends are typed arrays there. The page only renders them.

| To…                                                            | Do this                                                                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Add a job                                                      | Add an entry at the top of `experience`.                                                                     |
| Add a project                                                  | Add an entry to `projects` (order = display order). Put its image in `src/lib/assets/img/` as WebP.          |
| Add the paper's DOI                                            | Set `doi` in `publications`. A DOI button and a `doi` BibTeX field appear automatically.                     |
| Offer a CV download                                            | Put the PDF in `static/` and set `profile.cvFile` (e.g. `'cv.pdf'`). The build fails if the file is missing. |
| Change the title/description shown by Google and link previews | Edit `site` at the top of `content.ts`.                                                                      |

Images should be WebP, at most about twice their on-screen size (thumbnails 720 px wide,
avatars 192 px square).

## Project layout

```
src/
  lib/
    content.ts          all text, links and images
    components/         small presentational components (NavBar, ExperienceTimeline, WorkCard, …)
    assets/
      img/              WebP images
      fonts/            self-hosted Red Hat Display (SIL OFL 1.1)
      *.pdf             papers and reports linked from the page
  routes/
    +page.svelte        the page: layout only, loops over content.ts
    +layout.ts          enables prerendering (static HTML)
  app.css               Tailwind and @font-face
  app.html              HTML shell
static/                 copied as-is: favicon, og.jpg (link-preview image)
```

## Development

Requires Node.js 22 or newer.

```bash
npm ci              # install exact dependency versions from package-lock.json
npm run dev         # local server with hot reload at http://localhost:5173
npm run build       # static site in docs/
npm run preview     # serve the built site
```

Quality checks (the same ones CI runs on every push and pull request):

```bash
npm run lint        # Prettier formatting + ESLint
npm run check       # Svelte/TypeScript type-check
npm run format      # auto-fix formatting
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: install, lint, type-check, build, then
deploy to GitHub Pages. Pull requests run the same checks without deploying. The `docs/` build
output is not committed; it is created fresh by the workflow.

In the repository settings, **Settings → Pages → Build and deployment → Source** must be set to
**GitHub Actions**.

The workflow sets `BASE_PATH=/<repo-name>` because the site is served from a subfolder.
Local builds use `/`.

Dependabot (`.github/dependabot.yml`) opens monthly pull requests for dependency and
GitHub Actions updates; each one runs the full checks before it can be merged.

## License

Site code: [MIT](LICENSE). Site text: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
Papers, theses, reports, photos and logos are not covered by either license.
