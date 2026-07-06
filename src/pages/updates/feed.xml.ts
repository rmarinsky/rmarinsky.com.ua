import { updatesFeed } from "../../content/rss";

export function GET() {
  return new Response(updatesFeed("uk"), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
