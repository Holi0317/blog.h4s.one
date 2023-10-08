module.exports = {
  root: true,

  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {},

  env: {
    node: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@unocss",
    "plugin:astro/recommended",

    "prettier",
  ],

  rules: {
    // ==== Styling rules ====
    curly: ["error", "all"],
    "spaced-comment": ["error", "always", { markers: ["/"] }],

    // ==== Strict rules ====
    eqeqeq: ["error", "smart"],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": false,
        "ts-nocheck": false,
        "ts-check": true,
        minimumDescriptionLength: 3,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_.+", ignoreRestSiblings: true },
    ],
  },

  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],

      parser: "astro-eslint-parser",

      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },

      rules: {},
    },
    {
      files: ["src/env.d.ts"],

      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ],
};
