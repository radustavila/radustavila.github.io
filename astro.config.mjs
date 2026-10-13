import { defineConfig } from 'astro/config';

// The repository is named `radustavila.github.io`, so the site is served from the
// domain root and needs no `base`. For a project repository (e.g. `portfolio`),
// add `base: '/portfolio'` here — every internal URL already goes through
// `import.meta.env.BASE_URL`.
export default defineConfig({
  site: 'https://radustavila.github.io',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
});
