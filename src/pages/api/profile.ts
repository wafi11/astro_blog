import { lucia } from "../../lib/auth";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import type { APIContext } from "astro";

const prisma = new PrismaClient();

export async function GET({ cookies }: APIContext): Promise<Response> {
    try {
        // Get the token from cookies
        const token = cookies.get("token").value; // Ensure this matches your session cookie name

        if (!token) {
            return new Response("Unauthorized: No token found", { status: 401 });
        }

        // Get JWT key from environment variables
        const jwtKey = import.meta.env.AUTH_SECRET;

        if (!jwtKey) {
            return new Response("Internal Server Error: JWT key not found", { status: 500 });
        }

        // Verify the token
        const decoded = jwt.verify(token, jwtKey);
        if (typeof decoded === 'string') {
            throw new Error('Invalid token payload');
        }

        // Get the userId from the decoded token
        const userId = (decoded as jwt.JwtPayload).userId as string;
        if (!userId) {
            return new Response("Unauthorized: User ID not found in token", { status: 401 });
        }

        // Fetch the user from the database
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                accounts: true,
                sessions: true,
                likes: true,
            },
        });

        if (!user) {
            return new Response("Not Found: User not found", { status: 404 });
        }

        return new Response(JSON.stringify(user), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error('Error getting user from token:', error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
