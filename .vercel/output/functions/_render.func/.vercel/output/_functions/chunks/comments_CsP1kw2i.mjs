import { c as client } from './db_C2CBN58r.mjs';

const POST = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const body = await request.json();
      const { text, blogId, userId } = body;
      if (!text || !blogId || !userId) {
        throw new Error("text, blogId, and userId are required");
      }
      const data = await client.comments.create({
        data: {
          text,
          blog: {
            connect: { id: blogId }
          },
          user: {
            connect: { id: userId }
          }
        }
      });
      return new Response(JSON.stringify({
        message: "Comment created successfully",
        data
      }), {
        status: 200
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  return new Response(JSON.stringify("Invalid Content-Type"), { status: 400 });
};
const DELETE = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const body = await request.json();
      const { id } = body;
      if (!id) {
        throw new Error("id is required");
      }
      const comment = await client.comments.findUnique({
        where: { id }
      });
      if (!comment) {
        return new Response(JSON.stringify({ error: "Comment not found" }), { status: 404 });
      }
      await client.comments.delete({
        where: { id }
      });
      await client.likes.deleteMany({
        where: {
          commentId: id
        }
      });
      return new Response(JSON.stringify({
        message: "Comment deleted successfully"
      }), {
        status: 200
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  return new Response(JSON.stringify("Invalid Content-Type"), { status: 400 });
};
const PATCH = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const body = await request.json();
      const { id, text } = body;
      if (!id || text) {
        throw new Error("id andtext are required");
      }
      const comment = await client.comments.findUnique({
        where: { id }
      });
      if (!comment) {
        return new Response(JSON.stringify({ error: "Comment not found" }), { status: 404 });
      }
      const updatedComment = await client.comments.update({
        where: { id },
        data: { text }
      });
      return new Response(JSON.stringify({
        message: "Comment updated successfully",
        data: updatedComment
      }), {
        status: 200
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  return new Response(JSON.stringify("Invalid Content-Type"), { status: 400 });
};

export { DELETE, PATCH, POST };
