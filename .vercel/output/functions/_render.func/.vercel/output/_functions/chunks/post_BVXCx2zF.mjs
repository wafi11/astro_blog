import { m as createComponent, n as renderTemplate } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { c as client } from './db_C2CBN58r.mjs';

async function postCategory(type) {
  try {
    const data = await client.blog.findMany({
      where: {
        category: {
          equals: [type]
        }
      }
    });
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("internal Server Erorr");
  }
}
async function getEverything(type) {
  try {
    const data = await client.blog.findMany({
      where: {
        OR: [
          {
            category: {
              equals: [type]
            }
          },
          {
            title: {
              contains: type,
              mode: "insensitive"
            }
          },
          {
            description: {
              contains: type,
              mode: "insensitive"
            }
          }
        ]
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("internal Server Error");
  }
}
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "D:/astroblog/src/actions/post.astro", void 0);

export { getEverything as g, postCategory as p };
