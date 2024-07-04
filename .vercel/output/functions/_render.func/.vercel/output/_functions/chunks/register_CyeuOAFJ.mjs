import { c as client } from './db_C2CBN58r.mjs';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const userSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(4)
});
const sanitizeInput = (input) => {
  if (typeof input !== "string") {
    return "";
  }
  return input.replace(/[^\w\s@.-]/g, "");
};
async function POST(context) {
  try {
    const contentType = context.request.headers.get("content-type");
    console.log("Content-Type:", contentType);
    if (!contentType || !contentType.includes("multipart/form-data") && !contentType.includes("application/x-www-form-urlencoded")) {
      return new Response("Unsupported content type", { status: 400 });
    }
    const formData = await context.request.formData();
    const body = {
      name: sanitizeInput(formData.get("name")),
      email: sanitizeInput(formData.get("email")),
      password: sanitizeInput(formData.get("password"))
      // image: sanitizeInput(formData.get("image") as string)
    };
    const result = userSchema.safeParse(body);
    if (!result.success) {
      return new Response(JSON.stringify({ error: "Invalid request body", details: result.error.errors }), { status: 400 });
    }
    const { email, name, password } = result.data;
    const hashedPassword = await bcrypt.hash(password, 12);
    const data = await client.user.create({
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
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

export { POST };
