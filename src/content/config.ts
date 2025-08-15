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

export const collections = {
  posts: postsCollection,
};
