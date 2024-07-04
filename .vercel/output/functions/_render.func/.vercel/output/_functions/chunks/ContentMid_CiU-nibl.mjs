import { jsxs, jsx } from 'react/jsx-runtime';

const ContentMid = ({ data }) => {
  const filteredArticles = data.filter((item) => {
    return item.author && item.description && item.description && item.title && item.url && item.image;
  });
  const images = "https://images.unsplash.com/photo-1612550761236-e813928f7271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzc2luZXNzfGVufDB8fDB8fHww";
  const slicesData = filteredArticles.slice(0, 4);
  return /* @__PURE__ */ jsxs("section", { className: "sm:grid-cols-1 md:grid-cols-3 grid lg:grid-cols-5 gap-5 px-10 ", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-3 grid grid-cols-1 md:grid-cols-2  h-auto gap-5 pb-[50px] w-full ", children: slicesData.map((item, index) => /* @__PURE__ */ jsxs("div", { className: " border p-2 mt-2 w-full flex flex-col gap-3 shadow-md rounded-[24px] ", children: [
      /* @__PURE__ */ jsx("img", { src: item.image || images, alt: item.title, className: "w-full h-32 object-cover rounded-[16px] p-1" }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold bebas ", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: item.description }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-400", children: [
        "By ",
        item.author,
        " on ",
        new Date(item.createdAt).toLocaleDateString()
      ] }),
      /* @__PURE__ */ jsx("a", { href: item.url, target: "_blank", rel: "noopener noreferrer", className: "text-blue-500 hover:underline", children: "Read more" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-4" })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-3 md:col-span-2 w-full relative bebas px-0 lg:px-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-4xl py-2 border-y-2 border-black w-full", children: "Most Popular" }),
      filteredArticles.slice(4, 8).map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "p-4 mt-4 flex gap-4", children: [
        /* @__PURE__ */ jsx("img", { src: item.image || images, alt: item.title, className: "w-20 h-20 object-cover" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-col flex", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium", children: item.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-400 tracking-wider", children: [
            "By ",
            item.author,
            " | ",
            new Date(item.createdAt).toLocaleDateString()
          ] }),
          /* @__PURE__ */ jsx("a", { href: item.url, target: "_blank", rel: "noopener noreferrer", className: "text-blue-500 hover:underline", children: "Read more" })
        ] })
      ] }, idx))
    ] })
  ] });
};

export { ContentMid as C };
