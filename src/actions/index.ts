import { defineAction, z } from "astro:actions";
import prisma from "../lib/db";

export const server = {
  Like: defineAction({
    input: z.object({
      liked: z.boolean(),
      postSlug: z.string().refine(async (s) =>
        Boolean(
          await prisma.blog.findUnique({
            where: {
              id: s,
            },
          })
        )
      ),
    }),
    handler: async ({ liked, postSlug }) => {
      try {
        const data = await prisma.blog.findUnique({
          where: {
            id: postSlug,
          },
        });
        if (!data) {
          throw new Error("Internal Server Error");
        }
        const Likes = await prisma.likes.create({
          data: {
            likes: liked,
            blogId: data.id,
          },
        });
        return Likes;
      } catch {
        return new Response(JSON.stringify("Internal Server Erorr" ))
      }
    },
  }),
};
