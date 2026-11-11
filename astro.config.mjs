// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = "https://yjhwang59.github.io";

export default defineConfig({
  site,
  base: "/northgo-w3",
  trailingSlash: "never",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          "zh-tw": "zh-TW"
        }
      },
      filter: (page) => !page.includes("/ja") && !page.includes("/vi")
    })
  ]
});
