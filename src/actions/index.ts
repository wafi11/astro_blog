import { createBlog, createComment, createUser, deleteComment, updateBlog } from "./post";
export const server = {
  register: createUser,
  blog : createBlog,
  updateBlog,
  comment : createComment,
  deleteComment
};
