import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rmarinsky.com.ua",
  output: "static",
  integrations: [sitemap()],
});
