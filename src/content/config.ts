import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
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
