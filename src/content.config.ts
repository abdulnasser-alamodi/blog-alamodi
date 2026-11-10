import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("عبدالناصر محمد العمودي"),
    image: z.string().optional(),
    lang: z.string().default("ar"),
    tags: z.array(z.string()).default([]),
  }),
});

const ghashmarah = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ghashmarah" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.string().default("ar"),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, ghashmarah };
