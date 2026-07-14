# Release Update Writer

Use this instruction when a deployment, release, or meaningful product fix should become a bilingual update on `rmarinsky.com.ua`.

## Goal

Turn raw engineering evidence into a short, useful, slightly fun product note in Ukrainian and English.

The note should answer:

- What annoyed users or made the product feel unfinished?
- What did we change?
- Why is the workflow calmer, faster, or less stupid now?
- How do we know this is actually shipped?

## Evidence First

Do not write from vibes. Collect at least one concrete source:

- GitHub release notes, tags, commits, or PRs.
- A successful CI/deploy run.
- A local diff that is about to be shipped.
- Screenshots or product behavior verified manually.
- A short human note from Roman describing the pain.

If the thing is not shipped yet, say `planned`, `in progress`, or `ready for deploy`. Do not call it released.

## Tone

Ukrainian is the default voice. English should be clear and direct, not a word-for-word translation.

Good tone:

- pragmatic
- a bit playful
- user-pain first
- no corporate polish
- no AI hype
- no fake certainty

Bad tone:

- "We are thrilled to announce..."
- generic changelog bullets with no pain
- overpromising autonomy or intelligence
- pretending a bug was a feature

## Structure

Create one object in `src/content/updates.ts`:

```ts
{
  slug: "product-short-problem-fixed",
  date: "YYYY-MM-DD",
  accent: "diduny",
  products: ["diduny"],
  tags: ["release", "macos", "quality"],
  links: [
    { label: { uk: "Реліз", en: "Release" }, href: "https://github.com/..." },
    { label: { uk: "Deploy", en: "Deploy" }, href: "https://github.com/..." },
  ],
  copy: {
    uk: {
      eyebrow: "Short category",
      title: "Fun but clear Ukrainian title",
      summary: "One sentence on what changed.",
      problem: "What was annoying from the user's side.",
      fix: "What changed technically or behaviorally.",
      outcome: "What is better now.",
      bullets: ["Concrete shipped item.", "Another concrete shipped item."],
      cta: "Short action label",
    },
    en: {
      eyebrow: "Short category",
      title: "Fun but clear English title",
      summary: "One sentence on what changed.",
      problem: "What was annoying from the user's side.",
      fix: "What changed technically or behaviorally.",
      outcome: "What is better now.",
      bullets: ["Concrete shipped item.", "Another concrete shipped item."],
      cta: "Short action label",
    },
  },
}
```

## Product Slugs

Use these product slugs:

- `diduny`
- `appcat`
- `papuga`
- `sidebarny`
- `wayforpay-mcp`
- `ukraine-com-ua-mcp`

Use `accent: "site"` only for website or infrastructure updates.

## Writing Checklist

Before committing:

1. Add or update the entry in `src/content/updates.ts`.
2. Link to the real release, deploy, PR, or repo evidence.
3. Run `npm run build`.
4. Open `/updates/` and the update detail page locally.
5. If the update mentions a product, verify that the product page shows the related update.
6. Deploy only after the release itself is live or the copy clearly says it is not live yet.

## Prompt Template

Use this with Codex or another agent:

```text
Write a bilingual rmarinsky.com.ua update entry.

Product:
Release/deploy date:
Source links:
Raw changes:
What annoyed users:
What should not be claimed:

Output:
- one ProductUpdate object for src/content/updates.ts
- Ukrainian and English copy
- tone: practical, slightly funny, no hype
- include verification/deploy evidence
```
