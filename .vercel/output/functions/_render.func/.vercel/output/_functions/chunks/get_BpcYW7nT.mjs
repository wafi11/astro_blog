import jwt from 'jsonwebtoken';
import { c as client } from './db_C2CBN58r.mjs';

async function BlogsData() {
  try {
    const data = await client.blog.findMany();
    return data;
  } catch {
    throw new Error("Internal Server Errorr");
  }
}
async function Popular() {
  try {
    const data = await client.blog.findMany({
      orderBy: {
        createdAt: "asc"
      }
    });
    return data;
  } catch {
    throw new Error("Internal Server Errorr");
  }
}
async function Trending() {
  try {
    const data = await client.blog.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    return data;
  } catch {
    throw new Error("Internal Server Errorr");
  }
}
async function BlogsDataById(id) {
  try {
    const data = await client.blog.findMany({
      where: {
        id
      }
    });
    return data;
  } catch {
    throw new Error("Internal Server Errorr");
  }
}
async function Category() {
  try {
    const categories = await client.blog.findMany({});
    const uniuqeCategories = /* @__PURE__ */ new Set();
    categories.forEach((item) => {
      item.category.forEach((cat) => uniuqeCategories.add(cat));
    });
    const uniuqeCategoriesArray = Array.from(uniuqeCategories);
    const completeData = await client.blog.findMany({
      where: {
        category: {
          hasSome: uniuqeCategoriesArray
        }
      }
    });
    return uniuqeCategoriesArray;
  } catch {
    throw new Error("Internal Server Error");
  }
}
async function getCommentByBlogId(blogId) {
  try {
    const data = await client.comments.findMany({
      where: {
        blogId
      },
      select: {
        id: true,
        text: true,
        createdAt: true,
        likes: {
          select: {
            id: true,
            likes: true
          }
        },
        replies: {
          select: {
            text: true,
            id: true,
            createdAt: true,
            Likes: {
              select: {
                likes: true,
                id: true
              }
            },
            user: {
              select: {
                id: true,
                image: true,
                name: true
              }
            }
          }
        },
        user: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    return data;
  } catch (e) {
    throw new Error("Internal Server Error");
  }
}
async function getUserFromToken(token) {
  try {
    const jwtKey = "12345";
    if (!token) {
      return null;
    }
    if (!jwtKey) ;
    const decoded = jwt.verify(token, jwtKey);
    if (typeof decoded === "string") {
      throw new Error("Invalid token payload");
    }
    const userId = decoded.userId;
    if (!userId) {
      throw new Error("User ID not found in token");
    }
    const user = await client.user.findUnique({
      where: {
        id: userId
      },
      select: {
        id: true,
        name: true,
        image: true,
        collections: {
          select: {
            id: true,
            blogId: true,
            blog: {
              select: {
                title: true
              }
            }
          }
        },
        comments: {
          select: {
            blogId: true,
            id: true,
            text: true,
            createdAt: true
          }
        },
        reply: {
          select: {
            commentId: true,
            id: true,
            createdAt: true
          }
        }
      }
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error getting user from token:", error);
    throw error;
  }
}

export { BlogsData as B, Category as C, Popular as P, Trending as T, BlogsDataById as a, getUserFromToken as b, getCommentByBlogId as g };
