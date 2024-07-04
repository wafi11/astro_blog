/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, q as createAstro, o as maybeRenderHead } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { g as getEverything } from './post_BVXCx2zF.mjs';
import './_astro_assets_ChZyzG13.mjs';
import { C as Content4 } from './Content4_BbaRzzsQ.mjs';
import { C as Content3 } from './Content3_KX7LEHWE.mjs';

const topic = [
  {
    "nama": "apple",
    "image": "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww"
  },
  {
    "nama": "microsoft",
    "image": "https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9zb2Z0fGVufDB8fDB8fHww"
  },
  {
    "nama": "bitcoin",
    "image": "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0Y29pbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "nama": "tesla",
    "image": "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "nama": "samsung",
    "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "nama": "google",
    "image": "https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29vZ2xlfGVufDB8fDB8fHww"
  }
];
const Category = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full text-start pt-[100px] items-center container py-10 gap-5", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bebas py-5", children: "Explore Our Topics" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2",
        children: topic.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-200 w-full flex flex-col p-4  group h-[300px] rounded-xl", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bebas font-bold text-2xl items-center text  uppercase ", children: item.nama }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: " ",
              children: /* @__PURE__ */ jsxs("a", { href: `/explore?query=${item.nama}`, className: "flex blog font-bold  items-center gap-4", children: [
                "Read Now ",
                /* @__PURE__ */ jsx(FaArrowRight, { className: "group-hover:rotate-90 transition duration-300 focus:rotate-90" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex-grow flex items-end ", children: /* @__PURE__ */ jsx("img", { src: item.image, alt: item.nama, className: "h-[150px] w-full object-cover rounded-xl" }) })
        ] }, index))
      }
    )
  ] });
};

const Banner = ({ data }) => {
  return /* @__PURE__ */ jsx("div", { className: "pt-[80px] bg-gray-500 h-fit py-5 w-full  grid grid-cols-5" });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const search = Astro2.url.searchParams.get("query") || "apple";
  const data = await getEverything(search);
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": "Astro Blogs" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Banner", Banner, { "data": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/banner/Banner", "client:component-export": "default" })} ${renderComponent($$result2, "Category", Category, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/utils/category", "client:component-export": "default" })} ${maybeRenderHead()}<div class="px-10"> ${renderComponent($$result2, "Content3", Content3, { "data": data, "title": search, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/content/Content3", "client:component-export": "default" })}</div> <div class="px-10 pt-[200px]"> ${renderComponent($$result2, "Content4", Content4, { "data": data, "title": search })} </div> ` })}`;
}, "D:/astroblog/src/pages/blog/index.astro", void 0);

const $$file = "D:/astroblog/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
