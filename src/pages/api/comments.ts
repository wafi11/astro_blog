import { type APIRoute } from 'astro';
import prisma from "../../lib/db"
import { getUserFromToken } from '../actions/get.astro';

export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get("Content-Type") === "application/json") {
        try {
            const body = await request.json();

            const {text,blogId,token}  = body
            const tokens = await getUserFromToken(token)
           const data = await prisma.comments.create({
                data : {
                    text,
                    blogId,
                    userId : tokens.id
                }
           })

            return new Response(JSON.stringify({
                message: "Blog posts created successfully",
                data:data
            }), {
                status: 200
            });
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
    }
    return new Response(JSON.stringify("Invalid Content-Type"), { status: 400 });
};