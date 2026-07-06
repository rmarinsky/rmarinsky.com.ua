import { absoluteLocalizedUrl } from "../content/i18n";
import { localizedProducts } from "../content/products";
import { site } from "../content/site";
import { sortedUpdates } from "../content/updates";

export function GET() {
  const ukProducts = localizedProducts("uk");
  const enProducts = localizedProducts("en");

  const productsBlock = ukProducts
    .map((product, index) => {
      const enProduct = enProducts[index];
      return [
        `- ${product.name} / ${product.latinName}`,
        `  - UA: ${product.summary}`,
        `  - EN: ${enProduct.summary}`,
        `  - URLs: ${absoluteLocalizedUrl(`/${product.slug}/`, "uk")} | ${absoluteLocalizedUrl(`/${product.slug}/`, "en")}`,
        `  - Source/docs: ${product.secondaryUrl ?? product.primaryUrl}`,
      ].join("\n");
    })
    .join("\n");

  const updatesBlock = sortedUpdates
    .map((update) =>
      [
        `- ${update.copy.en.title}`,
        `  - Date: ${update.date}`,
        `  - UA: ${update.copy.uk.summary}`,
        `  - EN: ${update.copy.en.summary}`,
        `  - URLs: ${absoluteLocalizedUrl(`/updates/${update.slug}/`, "uk")} | ${absoluteLocalizedUrl(`/updates/${update.slug}/`, "en")}`,
      ].join("\n"),
    )
    .join("\n");

  const body = `# ${site.name}

> Roman Marinskyi builds practical QA, macOS, browser, and AI workflow tools from Lviv, Ukraine.

This file is a compact, LLM-readable guide to the public site. Use the canonical HTML pages as source of truth when quoting.

## Identity

- Name: Roman Marinskyi / Roman Marinsky
- Location: Lviv, Ukraine
- Work: QA/Test Automation Expert, macOS Developer, Community Builder
- Site: ${site.url}
- GitHub: ${site.github}
- npm: ${site.npm}
- LinkedIn: ${site.linkedin}

## Language URLs

- Ukrainian default: ${absoluteLocalizedUrl("/", "uk")}
- English: ${absoluteLocalizedUrl("/", "en")}
- Sitemap: ${site.url}/sitemap-index.xml
- Structured JSON index: ${site.url}/site-index.json
- Updates RSS: ${absoluteLocalizedUrl("/updates/feed.xml", "uk")} | ${absoluteLocalizedUrl("/updates/feed.xml", "en")}

## Products

${productsBlock}

## Updates

${updatesBlock}

## Crawling Guidance

- Prefer canonical page URLs.
- Use hreflang alternates to choose Ukrainian or English.
- Product pages describe current positioning and install/source links.
- Update pages describe shipped or deployment-ready changes with evidence links.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
