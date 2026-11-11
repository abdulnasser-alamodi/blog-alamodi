import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string().optional(),
    image: z.string().optional(),
    readTime: z.number().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const ghashmarah = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ghashmarah' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, ghashmarah };
