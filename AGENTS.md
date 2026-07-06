# rmarinsky.com.ua Agent Notes

When publishing release or deployment updates, read `docs/release-update-writer.md` first.

Do not invent shipped behavior. Use release tags, commits, CI runs, deploy logs, or verified local behavior as evidence. If an update is only prepared but not deployed, say that directly.

Release notes should be bilingual: Ukrainian first for the product voice, English second for external readers. Keep the tone practical and a little sharp: user pain, fix, outcome, proof.

Ukrainian is the default public site at `/`; English lives under `/en/`. When changing UI copy, update `src/content/i18n.ts` or product/update content helpers instead of hardcoding language-specific text in route files. Keep `hreflang`, canonical, `/llms.txt`, `/site-index.json`, and update feeds working after route changes.
