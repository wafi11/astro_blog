import { c as client } from './db_C2CBN58r.mjs';

const POST = async ({ request, params }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const { Id } = params;
      const body = await request.json();
      const { userId } = body;
      if (typeof !Id === "string") {
        return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
      }
      const like = await client.likes.create({
        data: {
          likes: true,
          replies: {
            connect: {
              id: Id
            }
          },
          user: {
            connect: {
              id: userId
            }
          }
        }
      });
      return new Response(
        JSON.stringify({
          message: "Blog liked",
          data: like
        }),
        { status: 200 }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: error.message || "Internal Server Error" }),
        { status: 500 }
      );
    }
  }
  return new Response(JSON.stringify({ error: "Invalid Content-Type" }), { status: 400 });
};
const GET = async ({ request, params }) => {
  try {
    const { Id } = params;
    const datas = await client.replyComments.findUnique({
      where: {
        id: Id
      }
    });
    const likes = await client.likes.findMany({
      where: {
        respliesId: datas.id
      },
      select: {
        id: true,
        likes: true
      }
    });
    return new Response(JSON.stringify(likes), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const DELETE = async ({ request, params }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const { Id } = params;
      const like = await client.likes.delete({
        where: { id: Id }
      });
      return new Response(
        JSON.stringify({ message: "Like status updated successfully", data: like }),
        { status: 200 }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: error.message || "Internal Server Error" }),
        { status: 500 }
      );
    }
  }
  return new Response(JSON.stringify({ error: "Invalid Content-Type" }), { status: 400 });
};

export { DELETE, GET, POST };
