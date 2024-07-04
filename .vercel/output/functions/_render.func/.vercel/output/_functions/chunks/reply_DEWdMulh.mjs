import { c as client } from './db_C2CBN58r.mjs';

const POST = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const body = await request.json();
      const { text, userId, commentId } = body;
      if (!userId || !text || !commentId) {
        throw new Error("Missing required fields");
      }
      console.log(commentId);
      const parentComment = await client.comments.findUnique({
        where: { id: commentId }
      });
      if (!parentComment) {
        throw new Error("Parent comment not found");
      }
      const reply = await client.replyComments.create({
        data: {
          text,
          userId,
          commentId
        }
      });
      return new Response(
        JSON.stringify({
          message: "Reply created successfully",
          reply
        }),
        {
          status: 200
        }
      );
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500
      });
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
      const comment = await client.replyComments.findUnique({
        where: { id }
      });
      if (!comment) {
        return new Response(JSON.stringify({ error: "Comment not found" }), { status: 404 });
      }
      await client.replyComments.delete({
        where: { id }
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
      const { replyId, text } = body;
      if (!replyId || text) {
        throw new Error("replyId andtext are required");
      }
      const comment = await client.comments.findUnique({
        where: { id: replyId }
      });
      if (!comment) {
        return new Response(JSON.stringify({ error: "Comment not found" }), { status: 404 });
      }
      const updatedComment = await client.replyComments.update({
        where: { id: replyId },
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
