// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), mdx()],
  vite: {
    resolve: {
      alias: {
        "@colors": "/src/styles/colors.scss",
        "@sizes": "/src/styles/sizes.scss",
      },
    },
  },
});
