import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const documents = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/documents",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  documents,
};
