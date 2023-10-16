/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CF_PAGES?: 1;
  readonly CF_PAGES_BRANCH?: string | "main";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
