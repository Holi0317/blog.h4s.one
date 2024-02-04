import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import UnoCSS from "unocss/astro";
import remarkEmoji from "remark-gemoji";
import rehypeSlug from "rehype-slug-custom-id";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

const DEV_PORT = 4321;

// https://astro.build/config
export default defineConfig({
  site: "https://h4s.one",
  base: "/",

  server: {
    port: DEV_PORT,
  },

  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },

    remarkPlugins: [remarkEmoji],

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

  integrations: [mdx(), UnoCSS()],
});
