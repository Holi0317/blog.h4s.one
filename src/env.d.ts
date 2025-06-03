/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BUILD_BRANCH?: string | "main";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
