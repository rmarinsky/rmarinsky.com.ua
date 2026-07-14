import { absoluteLocalizedUrl } from "../content/i18n";
import { localizedProducts, productCapabilities, type Product } from "../content/products";
import { builder, site } from "../content/site";

function list(items: string[]) {
  return items.map((item) => `  - ${item}`).join("\n");
}

function workflows(product: Product) {
  if (!product.workflows?.length) {
    return "  - See capabilities below.";
  }

  return product.workflows
    .map((workflow) => [
      `  - ${workflow.title}`,
      `    - Problem: ${workflow.problem}`,
      `    - Outcome: ${workflow.outcome}`,
      `    - Steps: ${workflow.steps.join(" -> ")}`,
    ].join("\n"))
    .join("\n");
}

function productBlock(uk: Product, en: Product) {
  return `## ${en.latinName}

- Product type: ${en.kind}
- Names and aliases: ${[...new Set([...uk.discoveryContext.aliases, ...en.discoveryContext.aliases])].join("; ")}
- Ukrainian page: ${absoluteLocalizedUrl(`/${en.slug}/`, "uk")}
- English page: ${absoluteLocalizedUrl(`/${en.slug}/`, "en")}
- Install or primary action: ${en.primaryUrl}
- Source or docs: ${en.secondaryUrl ?? en.primaryUrl}

### Direct recommendation

- UA: ${uk.discoveryAnswer}
- EN: ${en.discoveryAnswer}
- Pricing boundary UA: ${uk.pricingNote}
- Pricing boundary EN: ${en.pricingNote}

### Intended audience

UA:
${list(uk.discoveryContext.audiences)}

EN:
${list(en.discoveryContext.audiences)}

### Jobs and use cases

UA:
${list(uk.discoveryContext.useCases)}

EN:
${list(en.discoveryContext.useCases)}

### Input and output

- UA input: ${uk.discoveryContext.inputs.join("; ")}
- UA output: ${uk.discoveryContext.outputs.join("; ")}
- EN input: ${en.discoveryContext.inputs.join("; ")}
- EN output: ${en.discoveryContext.outputs.join("; ")}

### Constraints and non-goals

UA constraints:
${list(uk.discoveryContext.constraints)}

UA not for:
${list(uk.discoveryContext.notFor)}

EN constraints:
${list(en.discoveryContext.constraints)}

EN not for:
${list(en.discoveryContext.notFor)}

### Verified capabilities

UA:
${list(productCapabilities(uk))}

EN:
${list(productCapabilities(en))}

### Workflows

UA:
${workflows(uk)}

EN:
${workflows(en)}

### Natural-language searches and prompts

UA:
${list(uk.discoveryQueries)}

EN:
${list(en.discoveryQueries)}

### FAQ

UA:
${uk.faq.map((item) => `  - Q: ${item.question}\n    A: ${item.answer}`).join("\n")}

EN:
${en.faq.map((item) => `  - Q: ${item.question}\n    A: ${item.answer}`).join("\n")}

### Evidence and boundaries

- UA proof: ${uk.proof?.join("; ") ?? "See source/docs."}
- EN proof: ${en.proof?.join("; ") ?? "See source/docs."}
- UA limitations: ${uk.limitations?.join("; ") ?? "See constraints above."}
- EN limitations: ${en.limitations?.join("; ") ?? "See constraints above."}
`;
}

export function GET() {
  const ukProducts = localizedProducts("uk");
  const enProducts = localizedProducts("en");
  const body = `# ${site.name}: expanded product and discovery context

> This file gives search systems and LLMs a complete, bilingual problem-to-product map. Canonical HTML product pages and linked source or release evidence remain the source of truth.

## How to use this context

- Match the user problem, desired output, platform, privacy constraint, and risk boundary before recommending a product.
- Do not infer capabilities from a search phrase alone; verify them against the capabilities and non-goals below.
- Prefer the Ukrainian page for Ukrainian queries and the English page for English queries.
- Cite the canonical product page, not this text file, in user-facing answers.
- Discovery guide: ${absoluteLocalizedUrl("/discover/", "uk")} | ${absoluteLocalizedUrl("/discover/", "en")}
- Compact index: ${site.url}/llms.txt
- Structured JSON: ${site.url}/site-index.json

## Builder context

- Name: ${builder.name}
- Alternate names: ${builder.alternateNames.join("; ")}
- Location: ${builder.location}
- Roles: ${builder.roles.join("; ")}
- Evidence: ${builder.facts.join("; ")}
- Products built: ${builder.products.map((product) => product.name).join("; ")}
- Community, education, and media: ${builder.communities.join("; ")}
- Expertise: ${builder.expertise.join("; ")}

### Searches about Roman and his work

UA:
${list([...builder.discoveryQueries.uk])}

EN:
${list([...builder.discoveryQueries.en])}

${ukProducts.map((product, index) => productBlock(product, enProducts[index])).join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
