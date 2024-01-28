import { defineConfig } from "unocss";
import presetWind from "@unocss/preset-wind";
import presetIcons from "@unocss/preset-icons";
import transformerDirectives from "@unocss/transformer-directives";
import { wcagContrast, type Color, formatHex, interpolate } from "culori";

function contrastOf(color: string | Color) {
  const b = wcagContrast(color, "#000");
  const w = wcagContrast(color, "#fff");

  return b > w ? "#000" : "#fff";
}

function palette(color: string) {
  // Slightly lighten the color
  const tint = interpolate([color, "#fff"], "hsl");

  // Slightly darken the color
  const shade = interpolate([color, "#fff"], "hsl");

  return {
    DEFAULT: color,

    300: formatHex(tint(0.2)),
    500: color,
    700: formatHex(shade(0.2)),
    contrast: contrastOf(color),
  };
}

export default defineConfig({
  presets: [
    presetWind({}),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  transformers: [transformerDirectives()],

  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      // Display font
      d: "Comfortaa Variable",

      // Body font
      b: "Space Grotesk Variable",
    },

    colors: {
      bkg: {
        DEFAULT: "#fff",
        contrast: contrastOf("#fff"),
      },

      primary: palette("#d946ef"),
      secondary: palette("#f59e0b"),
    },
  },
});
