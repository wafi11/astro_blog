import { c as client } from './db_C2CBN58r.mjs';

const POST = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const body = await request.json();
      if (!Array.isArray(body)) {
        return new Response(JSON.stringify({ error: "Expected an array of news items" }), { status: 400 });
      }
      const newsItems = body.map((item) => {
        const { title, url, description, image, category, author } = item;
        if (!title || !url || !description || !image || !category || !author) {
          throw new Error("Missing required fields");
        }
        return {
          title,
          url,
          description,
          image,
          category,
          author
        };
      });
      const data = await client.blog.createMany({
        data: newsItems
      });
      return new Response(JSON.stringify({
        message: "Blog posts created successfully",
        data
      }), {
        status: 200
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), { status: 500 });
    }
  }
  return new Response(JSON.stringify("Invalid Content-Type"), { status: 400 });
};
const GET = async ({ request }) => {
  try {
    const data = await client.blog.findMany();
    return new Response(JSON.stringify({
      message: "Blog posts created successfully",
      data
    }), {
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), { status: 500 });
  }
};

export { GET, POST };
