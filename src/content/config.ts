import  { z,defineCollection } from 'astro:content';
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        summary: z.string().optional(   ),
        image: z.array(z.string()),
        tags: z.array(z.string()),
    }),
})


export const collection = {
    blog: blogCollection,
}