import { defineConfig } from "unocss";
import presetWind from "@unocss/preset-wind";
import presetIcons from "@unocss/preset-icons";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetWind({
      dark: "media",
    }),
    presetIcons(),
  ],
  transformers: [transformerDirectives()],

  theme: {
    fontFamily: {
      // Display font
      d: "Comfortaa Variable",

      // Body font
      b: "Space Grotesk Variable",
    },

    colors: {
      primary: {
        "50": "#fef2f3",
        "100": "#fedfe1",
        "200": "#fecacd",
        "300": "#fca5ab",
        "400": "#f8717a",
        "500": "#f0434e",
        "600": "#dd2531",
        "700": "#ba1b25",
        "800": "#991b23",
        "900": "#7f1d23",
        "950": "#450a0e",
      },
    },
  },
});
