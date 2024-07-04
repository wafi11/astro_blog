import { jsxs, jsx } from 'react/jsx-runtime';

const Content4 = ({ data, title }) => {
  const filteredArticles = data.filter((item) => item.author && item.description && item.createdAt && item.title && item.url && item.image);
  return /* @__PURE__ */ jsxs("div", { className: "border-t-[2px] border-black w-full h-fit pb-[150px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "bebas font-bold flex mb-5", children: [
      /* @__PURE__ */ jsx("h1", { className: "bg-black text-white w-fit tracking-wider px-4", children: title }),
      /* @__PURE__ */ jsx("h1", { className: "text-black tracking-wider px-4", children: "TOP STORIES IN THE LAST 48 HOURS" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-black bebas md:max-h-[400px]", children: filteredArticles.slice(0, 4).map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "gap-5 flex flex-col", children: [
      /* @__PURE__ */ jsx("img", { src: item.image, alt: "/", className: "w-full h-[200px] object-cover" }),
      /* @__PURE__ */ jsx("h1", { className: "", children: item.author }),
      /* @__PURE__ */ jsxs("div", { className: " items-center gap-4 grid", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold ", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm bebas", children: item.description }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300", children: new Date(item.createdAt).toLocaleDateString() }),
        /* @__PURE__ */ jsx("a", { href: item.url, target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:underline text-sm", children: "Read more" })
      ] })
    ] }, idx)) })
  ] });
};

export { Content4 as C };
