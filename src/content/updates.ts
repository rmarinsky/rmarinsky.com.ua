import type { Locale } from "./i18n";

export type UpdateProductSlug = "diduny" | "browsercat" | "papuga" | "sidebarny" | "wayforpay-mcp" | "ukraine-com-ua-mcp";

export type UpdateAccent = UpdateProductSlug | "site";

export const updateProductSlugs = [
  "diduny",
  "browsercat",
  "papuga",
  "sidebarny",
  "wayforpay-mcp",
  "ukraine-com-ua-mcp",
] as const satisfies readonly UpdateProductSlug[];

export interface LocalizedUpdateCopy {
  eyebrow: string;
  title: string;
  summary: string;
  problem: string;
  fix: string;
  outcome: string;
  bullets: string[];
  cta: string;
}

export interface ProductUpdate {
  slug: string;
  date: string;
  accent: UpdateAccent;
  products: UpdateProductSlug[];
  tags: string[];
  links: Array<{ label: Record<Locale, string>; href: string }>;
  copy: {
    uk: LocalizedUpdateCopy;
    en: LocalizedUpdateCopy;
  };
}

export const updates: ProductUpdate[] = [
  {
    slug: "rmarinsky-com-ua-github-pages-cutover",
    date: "2026-07-06",
    accent: "site",
    products: ["diduny", "browsercat", "papuga"],
    tags: ["site", "dns", "github pages", "release channel"],
    links: [
      { label: { uk: "Живий сайт", en: "Live site" }, href: "https://rmarinsky.com.ua" },
      {
        label: { uk: "Успішний деплой", en: "Successful deploy" },
        href: "https://github.com/rmarinsky/rmarinsky.com.ua/actions/runs/28797495048",
      },
    ],
    copy: {
      uk: {
        eyebrow: "Інфраструктура сайту",
        title: "rmarinsky.com.ua нарешті перестав прикидатися старим хостингом",
        summary:
          "Сайт для Дідуні, Браузер Киці, Папуги та інших інструментів тепер живе на GitHub Pages з валідним HTTPS і нормальним каналом релізів.",
        problem:
          "Бісило просте: лінк на сайт ніби є, але HTTPS свариться, GitHub Pages віддає чужий сертифікат, а випадкові піддомени тягнуться на старий хостинг. Для продуктового сайту це виглядає як недороблена табличка на дверях.",
        fix:
          "Почистив DNS, додав записи A та AAAA для GitHub Pages, прибрав wildcard, додав GitHub verification TXT, дочекався сертифіката і перезапустив Pages deploy.",
        outcome:
          "Тепер HTTP редіректить на HTTPS, сертифікат виданий саме для rmarinsky.com.ua та www, а сайт можна використовувати як нормальну вітрину і стрічку апдейтів для Mac-застосунків.",
        bullets: [
          "Apex-домен дивиться на GitHub Pages.",
          "www веде на rmarinsky.github.io.",
          "Wildcard на старий хостинг прибраний.",
          "Перевірка домену в GitHub Pages пройшла.",
          "HTTPS enforcement увімкнений після повторного деплою.",
        ],
        cta: "Відкрити сайт без SSL-драми",
      },
      en: {
        eyebrow: "Site infrastructure",
        title: "rmarinsky.com.ua stopped pretending to be an abandoned hosting stub",
        summary:
          "The product hub for Diduny, BrowserCat, Papuga, and the rest of the tool shelf now runs on GitHub Pages with valid HTTPS and a real release-update channel.",
        problem:
          "The annoying part was basic: the site existed, but HTTPS complained, GitHub Pages served the wrong certificate, and random subdomains still fell back to the old hosting account. Not exactly the first impression a product page should make.",
        fix:
          "I cleaned up DNS, added the GitHub Pages A and AAAA records, removed the wildcard, added the GitHub verification TXT record, waited for the certificate, and kicked Pages deployment again.",
        outcome:
          "HTTP now redirects to HTTPS, the certificate covers rmarinsky.com.ua and www, and the site is ready to carry actual release stories for the Mac apps.",
        bullets: [
          "Apex domain points to GitHub Pages.",
          "www points to rmarinsky.github.io.",
          "Old-hosting wildcard is gone.",
          "GitHub Pages domain verification is green.",
          "HTTPS enforcement is enabled after a fresh deploy.",
        ],
        cta: "Open the site without SSL drama",
      },
    },
  },
];

export const sortedUpdates = [...updates].sort((a, b) => b.date.localeCompare(a.date));

export const latestUpdate = sortedUpdates[0];

export function getUpdate(slug: string) {
  return updates.find((update) => update.slug === slug);
}

export function getProductUpdates(productSlug: UpdateProductSlug) {
  return sortedUpdates.filter((update) => update.products.includes(productSlug));
}

export function isUpdateProductSlug(slug: string): slug is UpdateProductSlug {
  return (updateProductSlugs as readonly string[]).includes(slug);
}

export function formatUpdateDate(date: string, locale: "uk-UA" | "en-US" = "uk-UA") {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}
