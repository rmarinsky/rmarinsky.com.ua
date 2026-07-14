import { absoluteLocalizedUrl } from "../content/i18n";
import { localizedProducts, productCapabilities } from "../content/products";
import { builder, site } from "../content/site";
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
      llmsFull: `${site.url}/llms-full.txt`,
      discovery: {
        uk: absoluteLocalizedUrl("/discover/", "uk"),
        en: absoluteLocalizedUrl("/discover/", "en"),
      },
    },
    person: {
      name: builder.name,
      alternateNames: builder.alternateNames,
      location: builder.location,
      roles: builder.roles,
      facts: builder.facts,
      productsBuilt: builder.products,
      communities: builder.communities,
      expertise: builder.expertise,
      discoveryQueries: builder.discoveryQueries,
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
        seo: {
          title: {
            uk: product.seoTitle,
            en: enProduct.seoTitle,
          },
          description: {
            uk: product.seoDescription,
            en: enProduct.seoDescription,
          },
        },
        discovery: {
          aliases: {
            uk: product.discoveryContext.aliases,
            en: enProduct.discoveryContext.aliases,
          },
          answer: {
            uk: product.discoveryAnswer,
            en: enProduct.discoveryAnswer,
          },
          queries: {
            uk: product.discoveryQueries,
            en: enProduct.discoveryQueries,
          },
          audiences: {
            uk: product.discoveryContext.audiences,
            en: enProduct.discoveryContext.audiences,
          },
          useCases: {
            uk: product.discoveryContext.useCases,
            en: enProduct.discoveryContext.useCases,
          },
          inputs: {
            uk: product.discoveryContext.inputs,
            en: enProduct.discoveryContext.inputs,
          },
          outputs: {
            uk: product.discoveryContext.outputs,
            en: enProduct.discoveryContext.outputs,
          },
          constraints: {
            uk: product.discoveryContext.constraints,
            en: enProduct.discoveryContext.constraints,
          },
          notFor: {
            uk: product.discoveryContext.notFor,
            en: enProduct.discoveryContext.notFor,
          },
        },
        capabilities: {
          uk: productCapabilities(product),
          en: productCapabilities(enProduct),
        },
        pricing: {
          uk: product.pricingNote,
          en: enProduct.pricingNote,
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
