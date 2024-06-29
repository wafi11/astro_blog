import type { APIRoute } from 'astro';
import prisma from '../../lib/db'; // Adjust the path if necessary
import { z } from "zod";
import bcrypt from "bcrypt";

const userSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(4),
  image: z.string().url()
});

export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get("Content-Type") === "application/json") {
      const body = await request.json();
      
      const result = userSchema.safeParse(body);
      if (!result.success) {
        return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400 });
      }   
      const { email, name, password, image } = result.data;
      if (email !== "wafiwafiwafi90@gmail.com"){
        return new Response(JSON.stringify("Internal Server Error"), { status: 400 });
      }

      if(!email || !name || !password || !image){
        return new Response(JSON.stringify("Internal Server Error"), { status: 400 });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const data = await prisma.user.create({
        data : {
            email,
            name,
            image,
            hashedPassword
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
