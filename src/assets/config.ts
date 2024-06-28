
import { defineCollection, z } from 'astro:content';

const biodata = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		name: z.string(),
		date: z.coerce.date(),
		address: z.coerce.date().optional(),
		phoneNumber: z.number(),
        email : z.string()
	}),
});

export const collections = { biodata };
