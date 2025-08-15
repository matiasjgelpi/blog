import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string().default("Sin descripción"),
    date: z.date(),
    category: z.string(),
    readTime: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    contact: z.array(
      z.object({
        name: z.string(),
        URL: z.string(),
      })
    ),
  }),
});

export const collections = {
  posts: postsCollection,
  about: aboutCollection,
};
