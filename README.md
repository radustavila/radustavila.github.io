# radustavila.github.io

Personal portfolio of Radu-Adrian Stavilă, Senior Android Engineer.
Live at <https://radustavila.github.io/>.

Built with [Astro](https://astro.build): the output is plain static HTML and CSS with a few
kilobytes of JavaScript (mobile menu, scroll reveal, section highlighting). Fonts are
self-hosted, and there are no third-party services, trackers or backends.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Editing content

All text, links and lists live in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).
Components in `src/components/` only handle presentation.

| What                                   | Where                                   |
| -------------------------------------- | --------------------------------------- |
| Name, headline, intro, SEO text        | `profile` in `src/data/portfolio.ts`    |
| Email, GitHub, LinkedIn, project links | `links` in `src/data/portfolio.ts`      |
| Projects, experience, skills           | matching exports in the same file       |
| Colours, fonts, spacing                | `:root` in `src/styles/global.css`      |
| Project illustrations                  | `src/components/ProjectVisual.astro`    |
| Social preview image and PNG icons     | `npm run assets` (see `scripts/`)       |

The project visuals are code-drawn illustrations, not screenshots. To use real screenshots,
put optimized images in `src/assets/` and render them in `ProjectVisual.astro`.

## Publishing to GitHub Pages

Deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
every push to `main` builds the site and publishes `dist/`.

One-time setup:

1. Create a **public** repository named `radustavila.github.io`.
2. Push this project to its `main` branch.
3. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Wait for the "Deploy to GitHub Pages" workflow to finish, then open
   <https://radustavila.github.io/>.

### Using a different repository name

A repository named anything other than `<user>.github.io` is served from a sub-path
(`https://radustavila.github.io/<repo>/`). In that case add `base: '/<repo>'` to
`astro.config.mjs` and update the URLs in `public/robots.txt` and `public/sitemap.xml`.

## Privacy

`docs/` and all PDF files are git-ignored. The source CV contains private contact details
and must not be committed, because the repository is public.
