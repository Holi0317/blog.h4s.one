import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import rehypeSlug from "rehype-slug-custom-id";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

const DEV_PORT = 4321;

function getSite() {
  // Site URL defined by Cloudflare build
  // Ref: https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variable
  if (process.env.CF_PAGES_URL) {
    return process.env.CF_PAGES_URL;
  }

  // Fallback to local dev
  return `http://localhost:${DEV_PORT}`;
}

// https://astro.build/config
export default defineConfig({
  site: getSite(),
  base: "/",

  server: {
    port: DEV_PORT,
  },

  markdown: {
    rehypePlugins: [
      [
        rehypeSlug,
        {
          enableCustomId: true,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
      [
        rehypeExternalLinks,
        {
          rel: ["nofollow", "noopener"],
          target: "_blank",
        },
      ],
    ],
  },

  integrations: [UnoCSS()],
});
