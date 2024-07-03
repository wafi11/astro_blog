import { lucia } from "../../lib/auth";
import { verify } from "@node-rs/argon2";
import prisma from "../../lib/db"
import jwt from 'jsonwebtoken';


import type { APIContext } from "astro";
const jwtSecret = import.meta.env.AUTH_SECRET; // Ganti dengan secret key JWT Anda
export async function POST(context: APIContext): Promise<Response> {
  const contentType = context.request.headers.get("content-type");
    
    if (!contentType || (!contentType.includes("multipart/form-data") && !contentType.includes("application/x-www-form-urlencoded"))) {
        return new Response("Unsupported content type", { status: 400 });
    }

  const formData = await context.request.formData();
	const email = formData.get("email");
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response("Invalid email", {
        status: 400
    });
}
	const password = formData.get("password");
	if (typeof password !== "string" || password.length < 6 || password.length > 255) {
		return new Response("Invalid password", {
			status: 400
		});
	}

	const user = await prisma.user.findUnique({
    where : {
      email
    }
  })
	if (!user) {
		return new Response("Incorrect username or password", {
			status: 400
		});
	}

  const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '24h' });

  const cookie = `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60};`;
  const headers = {
    'Content-Type': 'application/json',
    'Set-Cookie': cookie,
  };

  // Return response with token and redirect URL
  return new Response(JSON.stringify({
    message: "Authentication successful",
    token,
    redirect: "/" 
  }), {
    headers,
    status: 200
  });
}