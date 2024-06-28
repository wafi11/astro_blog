import type { APIRoute } from 'astro';
import prisma from '../../lib/db'; // Adjust the path if necessary

export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get("Content-Type") === "application/json") {
      const body = await request.json();
      
      const {Title,desc,images,category,author} = body
      const data = await prisma.blog.create({
        data : {
          author,
          category,
          desc,
          images,
          Title,
          like : 0
        }
      })
      return new Response(JSON.stringify({
        message: data
      }), {
        status: 200
      })
    }
    return new Response(JSON.stringify("Internal Server Error"), { status: 400 });
}
