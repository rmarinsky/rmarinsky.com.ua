import { absoluteLocalizedUrl } from "../content/i18n";
import { localizedProducts } from "../content/products";
import { site } from "../content/site";
import { sortedUpdates } from "../content/updates";

export function GET() {
  const ukProducts = localizedProducts("uk");
  const enProducts = localizedProducts("en");

  const body = {
    site: {
      name: site.name,
      url: site.url,
      languages: {
        uk: absoluteLocalizedUrl("/", "uk"),
        en: absoluteLocalizedUrl("/", "en"),
      },
      sitemap: `${site.url}/sitemap-index.xml`,
      llms: `${site.url}/llms.txt`,
    },
    person: {
      name: "Roman Marinskyi",
      alternateNames: ["Roman Marinsky", "Роман Маринський"],
      location: "Lviv, Ukraine",
      roles: ["QA/Test Automation Expert", "macOS Developer", "Community Builder"],
      links: [site.github, site.linkedin, site.npm, site.x],
    },
    products: ukProducts.map((product, index) => {
      const enProduct = enProducts[index];
      return {
        slug: product.slug,
        name: product.name,
        latinName: product.latinName,
        kind: product.kind,
        urls: {
          uk: absoluteLocalizedUrl(`/${product.slug}/`, "uk"),
          en: absoluteLocalizedUrl(`/${product.slug}/`, "en"),
        },
        summary: {
          uk: product.summary,
          en: enProduct.summary,
        },
        source: product.secondaryUrl ?? product.primaryUrl,
      };
    }),
    updates: sortedUpdates.map((update) => ({
      slug: update.slug,
      date: update.date,
      products: update.products,
      urls: {
        uk: absoluteLocalizedUrl(`/updates/${update.slug}/`, "uk"),
        en: absoluteLocalizedUrl(`/updates/${update.slug}/`, "en"),
      },
      title: {
        uk: update.copy.uk.title,
        en: update.copy.en.title,
      },
      summary: {
        uk: update.copy.uk.summary,
        en: update.copy.en.summary,
      },
      evidence: update.links.map((link) => ({
        label: link.label.en,
        href: link.href,
      })),
    })),
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
