// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import unocss from "@unocss/eslint-config/flat";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
  {
    ignores: [
      // build output
      "dist/",
      // generated types
      ".astro/",

      ".idea/",
      "node_modules/",

      ".DS_Store",
      "*.log",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // @ts-expect-error Incorrect typing from unocss
  unocss,
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,

  {
    name: "Styling rules",
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      curly: ["error", "all"],
      "@stylistic/spaced-comment": ["error", "always", { markers: ["/"] }],
    },
  },
  {
    name: "Strict rules",
    rules: {
      eqeqeq: ["error", "smart"],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": false,
          "ts-nocheck": false,
          "ts-check": false,
          minimumDescriptionLength: 3,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_.+", ignoreRestSiblings: true },
      ],
    },
  },
  {
    name: "Astro env.d.ts",
    files: ["src/env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
);
