import { c as client } from './db_C2CBN58r.mjs';

const GET = async ({ request, params }) => {
  try {
    const { Id } = params;
    const datas = await client.blog.findUnique({
      where: {
        id: Id
      }
    });
    const likes = await client.collection.findMany({
      where: {
        blogId: datas.id
      },
      select: {
        id: true,
        collect: true
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

export { GET };
