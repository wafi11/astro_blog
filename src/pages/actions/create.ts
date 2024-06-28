import { defineAction} from 'astro:actions';
import prisma from '../../lib/db';
import {z} from 'zod'

export const server = {
  create: defineAction({
    accept: 'form',
    input: z.object({
      Title: z.string().min(1, "Title is required"),
      desc: z.string().min(1, "Description is required"),
      author: z.string().min(1, "Author is required"),
      category: z.string().min(1, "Category is required"),
      images: z.string().url("Images must be a valid URL")
    }),
    handler: async (data) => {
      try {
        const createdBook = await prisma.blog.create({
          data: {
            Title: data.Title,
            desc: data.desc,
            author: data.author,
            category: data.category,
            images: data.images,
          }
        });
        return {
          success: true,
          message: "Thank you",
          book: createdBook
        };
      } catch (e) {
        console.error(e);
        return {
          success: false,
          error: "Failed to create book"
        };
      }
    }
  })
};
