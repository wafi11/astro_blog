// import { lucia } from "../lib/auth";
// import { PrismaClient } from "@prisma/client";
// import type { APIContext } from "astro";

// const prisma = new PrismaClient();
// export async function GET(context: APIContext): Promise<Response> {
//     // Extract cookies from context
//     const cookies = context.cookies.get();
//     const sessionId = cookies["session_id"]; // Adjust according to your session cookie name

//     if (!sessionId) {
//         return new Response("Unauthorized", { status: 401 });
//     }

//     // Manually fetch and validate the session from your database or session store
//     const session = await prisma.session.findUnique({
//         where: { userId: sessionId }
//     });

//     if (!session) {
//         return new Response("Unauthorized", { status: 401 });
//     }

//     const userId = session.userId;

//     // Fetch the user data
//     const user = await prisma.user.findUnique({
//         where: { id: userId },
//         select: {
//             id: true,
//             email: true,
//             name: true,
//             image: true,
//         },
//     });

//     if (!user) {
//         return new Response("User not found", { status: 404 });
//     }

//     return new Response(JSON.stringify(user), {
//         status: 200,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
// }
