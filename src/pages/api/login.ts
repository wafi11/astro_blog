import bcrypt from 'bcrypt';
import prisma from '../../lib/db'; // Sesuaikan dengan lokasi Prisma client Anda
import jwt from 'jsonwebtoken';
import type { APIRoute } from 'astro';

const jwtSecret = import.meta.env.AUTH_SECRET; // Ganti dengan secret key JWT Anda

export const POST : APIRoute= async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const { email, password } = await request.json();
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
      }
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
      if (!passwordMatch) {
        return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
      }
      const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

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
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
  }
  return new Response(JSON.stringify({ error: "Invalid Content-Type" }), { status: 400 });
};
