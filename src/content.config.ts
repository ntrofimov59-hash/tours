import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { z } from "astro/zod";

const previews = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/previews" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    picture: z.string(),
  }),
});

export const collections = {
  previews,
};
