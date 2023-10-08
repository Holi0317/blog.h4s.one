import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import UnoCSS from "unocss/astro";

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

  server: {
    port: DEV_PORT,
  },

  integrations: [
    mdx(),
    UnoCSS({
      injectReset: true,
    }),
  ],
});
