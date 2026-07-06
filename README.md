# rmarinsky.com.ua

Static product hub for Roman Marinsky's small tools.

## Commands

```bash
npm install
npm run dev
npm run build
```

The site is deployed to GitHub Pages and uses `rmarinsky.com.ua` as the custom domain.

## Localization and indexing

Ukrainian is the default language at `/`. English pages live under `/en/`.
Use the templates in `src/templates/` and shared strings in `src/content/i18n.ts`; do not hardcode UI copy in route files.

Generated discovery endpoints:

- `/sitemap-index.xml` for search engines.
- `/llms.txt` as a compact LLM-readable site guide.
- `/site-index.json` as a structured product/update index.
- `/updates/feed.xml` and `/en/updates/feed.xml` for release update feeds.

## Release updates

Product and deployment notes live in `src/content/updates.ts` and render at `/updates/`.

When adding a new update:

1. Read `docs/release-update-writer.md`.
2. Add one bilingual `ProductUpdate` entry with real evidence links.
3. Run `npm run build`.
4. Check `/updates/`, the update detail page, and any related product page locally.
5. Push to `main` to deploy through GitHub Pages.
