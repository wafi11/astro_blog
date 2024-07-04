import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getApps, initializeApp } from 'firebase/app';
import { a as actions } from './_astro_actions_DQheYMOw.mjs';

const firebaseConfig = {
  apiKey: "AIzaSyCEyBegZXNul7Dz1bpAcp0QT07MSFmOLF8",
  authDomain: "tapaksuci-33bab.firebaseapp.com",
  projectId: "tapaksuci-33bab",
  storageBucket: "tapaksuci-33bab.appspot.com",
  messagingSenderId: "986620079962",
  appId: "1:986620079962:web:9d1e98764eb055f5228d63",
  measurementId: "G-BFV0EYFKX2"
};
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const STORAGE_FOLDER_PATH = "gs://tapaksuci-33bab.appspot.com";
const storage = getStorage(app, STORAGE_FOLDER_PATH);

const FormBlogClient = ({ id, initialData }) => {
  const [formData, setFormData] = useState({
    author: "",
    image: null,
    category: "",
    title: "",
    description: ""
  });
  useEffect(() => {
    if (initialData) {
      setFormData((prevData) => ({
        ...prevData,
        author: initialData.author,
        image: initialData.image,
        category: initialData.category,
        title: initialData.title,
        description: initialData.description
      }));
    }
  }, [initialData, id]);
  console.log(formData);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prevData) => ({
        ...prevData,
        image: files[0]
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = "";
    if (formData.image) {
      const storageRef = ref(storage, `images/${formData.image.name}`);
      await uploadBytes(storageRef, formData.image);
      imageUrl = await getDownloadURL(storageRef);
    }
    const form = new FormData();
    form.append("author", formData.author);
    form.append("image", imageUrl);
    form.append("category", formData.category);
    form.append("title", formData.title);
    form.append("description", formData.description);
    try {
      let response;
      if (id) {
        form.append("id", id);
        response = await actions.updateBlog.safe(form);
      } else {
        response = await actions.blog.safe(form);
      }
      const { data: responseData, error } = response;
      if (responseData) {
        alert(responseData);
      }
      if (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-screen pt-[70px]", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-white p-8 rounded shadow-md w-full max-w-lg", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl mb-6", children: id ? "Update Blog" : "Create Blog" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "author", className: "block text-gray-700 mb-2", children: "Author:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "author",
          name: "author",
          value: formData.author,
          onChange: handleChange,
          required: true,
          className: "w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "image", className: "block text-gray-700 mb-2", children: "Image:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "file",
          id: "image",
          name: "image",
          onChange: handleChange,
          required: true,
          className: "w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "category", className: "block text-gray-700 mb-2", children: "Category:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "category",
          name: "category",
          value: formData.category,
          onChange: handleChange,
          required: true,
          placeholder: "Separate categories with commas",
          className: "w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "title", className: "block text-gray-700 mb-2", children: "Title:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "title",
          name: "title",
          value: formData.title,
          onChange: handleChange,
          required: true,
          className: "w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "description", className: "block text-gray-700 mb-2", children: "Description:" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "description",
          name: "description",
          value: formData.description,
          onChange: handleChange,
          required: true,
          className: "w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600", children: "Create Blog" })
  ] }) });
};

export { FormBlogClient as F };
