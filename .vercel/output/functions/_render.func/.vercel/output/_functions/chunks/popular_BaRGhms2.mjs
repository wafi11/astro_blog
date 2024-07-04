/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, o as maybeRenderHead } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { motion } from 'framer-motion';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';
/* empty css                        */
import { C as ContentMid } from './ContentMid_CiU-nibl.mjs';
import { C as Content3 } from './Content3_KX7LEHWE.mjs';
import { C as Content4 } from './Content4_BbaRzzsQ.mjs';
import { T as Trending } from './get_BpcYW7nT.mjs';

const BannerPopular = ({ data }) => {
  const filteredArticles = data.filter((item) => {
    return item.author && item.description && item.createdAt && item.title && item.url && item.image;
  });
  return /* @__PURE__ */ jsx("section", { className: "mb-[50px] bg-[#EEEDEB] h-screen  w-full text-[#2D2D2D] overflow-hidden ", children: /* @__PURE__ */ jsxs("div", { className: "px-10 py-5 grid grid-cols-6 gap-4 items-center h-full", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "col-span-3 w-full flex flex-col gap-5 font-bebas ",
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx("h3", { className: "font-blog text-xl ", children: filteredArticles[0].author }),
          /* @__PURE__ */ jsx("p", { className: "font-bold text-3xl ", children: filteredArticles[0].title }),
          /* @__PURE__ */ jsx("p", { className: "font-blog text-xl ", children: filteredArticles[0].description }),
          /* @__PURE__ */ jsx(
            motion.img,
            {
              src: filteredArticles[0].image,
              alt: "/",
              className: "w-full h-[400px] object-cover",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5, duration: 0.5 }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-2 col-span-3 items-center", children: [
      /* @__PURE__ */ jsx(
        motion.h1,
        {
          className: "text-xl font-bold font-blog ",
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: "Recent Post"
        }
      ),
      filteredArticles.slice(1, 3).map((item, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "border-t-2 border-[#2D2D2D] flex justify-between ",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 * (index + 1), duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-4 pt-2", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-md font-blog", children: item.author }),
              /* @__PURE__ */ jsx("h4", { className: "text-3xl font-bebas", children: item.title }),
              /* @__PURE__ */ jsx("h4", { className: "text-md font-blog", children: item.description })
            ] }),
            /* @__PURE__ */ jsx(
              motion.img,
              {
                src: item.image,
                alt: "/",
                className: "w-[200px] h-[100px] pt-2",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.5 * (index + 1), duration: 0.5 }
              }
            )
          ]
        },
        item.title
      ))
    ] })
  ] }) });
};

const $$Popular = createComponent(async ($$result, $$props, $$slots) => {
  const data = await Trending();
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": "Popular Page ", "data": data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerPopular", BannerPopular, { "data": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/banner/BannerPopular", "client:component-export": "default" })} ${renderComponent($$result2, "ContentMid", ContentMid, { "data": data })} ${maybeRenderHead()}<section class="px-10"> ${renderComponent($$result2, "Content3", Content3, { "data": data, "title": "Popular", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/content/Content3", "client:component-export": "default" })} </section> <section class="px-10 py-[50px]"> ${renderComponent($$result2, "Content4", Content4, { "data": data, "title": "Popular" })} </section> ` })}`;
}, "D:/astroblog/src/pages/popular.astro", void 0);

const $$file = "D:/astroblog/src/pages/popular.astro";
const $$url = "/popular";

export { $$Popular as default, $$file as file, $$url as url };
