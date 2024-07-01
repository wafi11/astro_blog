import type { APIContext } from "astro";
import prisma from "../../lib/db"; // Adjust the path if necessary
import { z } from "zod";
import bcrypt from "bcrypt";

// Define a schema for user inputs
const userSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(4),
  // image: z.string().url()
});

// A function to sanitize inputs, if necessary
const sanitizeInput = (input: string | null | undefined) => {
  if (typeof input !== 'string') {
    return ''; // Or handle it as per your application's logic
  }
  return input.replace(/[^\w\s@.-]/g, '');
};

export async function POST(context: APIContext): Promise<Response> {
  try {
    const contentType = context.request.headers.get("content-type");
    console.log("Content-Type:", contentType); // Debugging line
   
    if (!contentType || (!contentType.includes("multipart/form-data") && !contentType.includes("application/x-www-form-urlencoded"))) {
      return new Response("Unsupported content type", { status: 400 });
  }


    const formData = await context.request.formData();

    const body = {
      name: sanitizeInput(formData.get("name") as string),
      email: sanitizeInput(formData.get("email") as string),
      password: sanitizeInput(formData.get("password") as string),
      // image: sanitizeInput(formData.get("image") as string)
    };

    const result = userSchema.safeParse(body);
    if (!result.success) {
      return new Response(JSON.stringify({ error: "Invalid request body", details: result.error.errors }), { status: 400 });
    }

    const { email, name, password } = result.data;



    const hashedPassword = await bcrypt.hash(password, 12);

    const data = await prisma.user.create({
      data: {
        email,
        name,
        // image,
        hashedPassword
      }
    });

    return new Response(JSON.stringify({ message: data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
