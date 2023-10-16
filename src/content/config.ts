import { defineCollection, z, reference } from "astro:content";

const tagCollection = defineCollection({
  type: "data",
  schema: z.object({
    color: z.string(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    /**
     * Title of the post
     */
    title: z.string(),

    /**
     * Small snippet for preview
     */
    snippet: z.string(),

    /**
     * Publish date
     */
    pubDate: z.coerce.date(),

    tags: z.array(reference("tag")).default(() => []),

    /**
     * If true, do not include this in production site
     */
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  tag: tagCollection,
  blog: blogCollection,
};
