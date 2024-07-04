import './_astro_actions_DQheYMOw.mjs';
import { c as client } from './db_C2CBN58r.mjs';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { c as callSafely, a as ActionError, b as ActionInputError, g as getApiContext$1 } from './shared_DMwlq4GL.mjs';

const getApiContext = getApiContext$1;
function defineAction({
  accept,
  input: inputSchema,
  handler
}) {
  const serverHandler = accept === "form" ? getFormServerHandler(handler, inputSchema) : getJsonServerHandler(handler, inputSchema);
  Object.assign(serverHandler, {
    safe: async (unparsedInput) => {
      return callSafely(() => serverHandler(unparsedInput));
    }
  });
  return serverHandler;
}
function getFormServerHandler(handler, inputSchema) {
  return async (unparsedInput) => {
    if (!(unparsedInput instanceof FormData)) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts FormData."
      });
    }
    if (!(inputSchema instanceof z.ZodObject)) return await handler(unparsedInput, getApiContext());
    const parsed = await inputSchema.safeParseAsync(formDataToObject(unparsedInput, inputSchema));
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, getApiContext());
  };
}
function getJsonServerHandler(handler, inputSchema) {
  return async (unparsedInput) => {
    if (unparsedInput instanceof FormData) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts JSON."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, getApiContext());
    const parsed = await inputSchema.safeParseAsync(unparsedInput);
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, getApiContext());
  };
}
function formDataToObject(formData, schema) {
  const obj = {};
  for (const [key, baseValidator] of Object.entries(schema.shape)) {
    let validator = baseValidator;
    if (baseValidator instanceof z.ZodOptional || baseValidator instanceof z.ZodNullable) {
      validator = baseValidator._def.innerType;
    }
    if (validator instanceof z.ZodBoolean) {
      obj[key] = formData.has(key);
    } else if (validator instanceof z.ZodArray) {
      obj[key] = handleFormDataGetAll(key, formData, validator);
    } else {
      obj[key] = handleFormDataGet(key, formData, validator, baseValidator);
    }
  }
  return obj;
}
function handleFormDataGetAll(key, formData, validator) {
  const entries = Array.from(formData.getAll(key));
  const elementValidator = validator._def.type;
  if (elementValidator instanceof z.ZodNumber) {
    return entries.map(Number);
  } else if (elementValidator instanceof z.ZodBoolean) {
    return entries.map(Boolean);
  }
  return entries;
}
function handleFormDataGet(key, formData, validator, baseValidator) {
  const value = formData.get(key);
  if (!value) {
    return baseValidator instanceof z.ZodOptional ? void 0 : null;
  }
  return validator instanceof z.ZodNumber ? Number(value) : value;
}

const createUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(6).max(20),
    email: z.string().email(),
    password: z.string().min(8),
    image: z.string()
  }),
  handler: async ({ image, name, email, password }) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return new Response("Invalid email", { status: 400 });
      }
      if (typeof password !== "string" || password.length < 6 || password.length > 255) {
        return new Response("Invalid password", { status: 400 });
      }
      const data = await client.user.create({
        data: {
          image,
          name,
          email,
          hashedPassword
        }
      });
      return data;
    } catch (e) {
      throw new Error("Internal Server Erorr");
    }
  }
});
const createComment = defineAction({
  accept: "form",
  input: z.object({
    blogId: z.string(),
    userId: z.string(),
    text: z.string()
  }),
  handler: async ({ blogId, text, userId }) => {
    try {
      const comment = await client.comments.create({
        data: {
          text,
          blog: {
            connect: {
              id: blogId
            }
          },
          user: {
            connect: {
              id: userId
            }
          }
        }
      });
      return comment;
    } catch {
      throw new Error("Internal Server Error");
    }
  }
});
const deleteComment = defineAction({
  input: z.object({
    id: z.string()
  }),
  handler: async ({ id }) => {
    try {
      const comment = await client.comments.findUnique({
        where: { id },
        select: { blogId: true, userId: true }
      });
      if (!comment) {
        throw new Error("Comment not found");
      }
      const deletedComment = await client.comments.delete({
        where: { id }
      });
      await client.blog.update({
        where: { id: comment.blogId },
        data: {
          Comments: {
            disconnect: { id }
          }
        }
      });
      await client.user.update({
        where: {
          id: comment.userId
        },
        data: {
          comments: {
            disconnect: { id }
          }
        }
      });
      return deletedComment;
    } catch {
      throw new Error("Internal Server Error");
    }
  }
});
const updateBlog = defineAction({
  accept: "form",
  input: z.object({
    id: z.string(),
    author: z.string(),
    image: z.string(),
    category: z.array(z.string()),
    title: z.string(),
    description: z.string()
  }),
  handler: async ({ id, author, category, description, image, title }) => {
    try {
      console.log("ACTIOOOOOON", id);
      const updateBlog2 = await client.blog.update({
        where: { id },
        data: {
          author,
          category,
          image,
          title,
          description
        }
      });
      return updateBlog2;
    } catch {
      throw new Error("Internal Server Error");
    }
  }
});
const createBlog = defineAction({
  accept: "form",
  input: z.object({
    author: z.string(),
    image: z.string(),
    category: z.array(z.string()),
    title: z.string(),
    description: z.string()
  }),
  handler: async ({ author, category, description, image, title }) => {
    try {
      const Blog = await client.blog.create({
        data: {
          author,
          category,
          image,
          title,
          description,
          url: "localhost:4000"
        }
      });
      return Blog;
    } catch (e) {
      throw new Error("Internal Server Erorr");
    }
  }
});

const server = {
  register: createUser,
  blog: createBlog,
  updateBlog,
  comment: createComment,
  deleteComment
};

export { server };
