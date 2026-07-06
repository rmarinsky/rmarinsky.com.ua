import { absoluteLocalizedUrl, type Locale } from "./i18n";
import { sortedUpdates } from "./updates";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function updatesFeed(locale: Locale) {
  const title = locale === "uk" ? "Roman Marinsky - апдейти" : "Roman Marinsky - updates";
  const description =
    locale === "uk"
      ? "Release notes і продуктові апдейти для інструментів Романа Маринського."
      : "Release notes and product updates for Roman Marinsky tools.";

  const items = sortedUpdates
    .map((update) => {
      const copy = update.copy[locale];
      const link = absoluteLocalizedUrl(`/updates/${update.slug}/`, locale);
      const date = new Date(`${update.date}T00:00:00+03:00`).toUTCString();

      return `
    <item>
      <title>${escapeXml(copy.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid>${escapeXml(link)}</guid>
      <pubDate>${escapeXml(date)}</pubDate>
      <description>${escapeXml(copy.summary)}</description>
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${escapeXml(absoluteLocalizedUrl("/updates/", locale))}</link>
    <description>${escapeXml(description)}</description>
    <language>${locale === "uk" ? "uk-UA" : "en"}</language>
    <lastBuildDate>${escapeXml(new Date().toUTCString())}</lastBuildDate>${items}
  </channel>
</rss>`;
}
