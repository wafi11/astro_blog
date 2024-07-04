/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, q as createAstro, o as maybeRenderHead, p as addAttribute } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { C as Content3 } from './Content3_KX7LEHWE.mjs';
import { B as BannerTrending, $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';
import { p as postCategory, g as getEverything } from './post_BVXCx2zF.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { C as Category } from './get_BpcYW7nT.mjs';

const SliderImages = ({ data }) => {
  const filteredArticles = data.filter((item) => {
    return item.author && item.description && item.createdAt && item.title && item.url && item.image;
  });
  console.log(filteredArticles);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? 0 : index);
  };
  return /* @__PURE__ */ jsx("section", { className: "h-[600px] text-white flex flex-col rounded-2xl my-[100px] container relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full overflow-hidden rounded-xl bg-cover", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: filteredArticles[expandedIndex].image,
        alt: filteredArticles[0].title,
        className: "h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black bg-opacity-70  py-10", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-blog pl-10 pr-3  text-start relative w-fit    ", children: [
        "Blogs",
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 absolute bg-white right-0 bottom-2 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-5 py-10 px-5", children: [
        filteredArticles.slice(0, 3).map((item, idx) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "flex flex-col gap-5 border-r-2 px-5",
            initial: { width: "100%" },
            animate: { width: expandedIndex === idx ? "100%" : "60%" },
            transition: { duration: 0.3 },
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-white border-2 px-4 py-2 rounded-full w-fit", children: item.author }),
              /* @__PURE__ */ jsx(
                "h1",
                {
                  className: `font-bebas text-white text-3xl ${expandedIndex === idx ? "text-3xl " : ""}`,
                  children: item.title
                }
              ),
              expandedIndex === idx && /* @__PURE__ */ jsx("p", { className: "text-md font-blog text-white text-md", children: item.description }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleExpand(idx),
                  className: `h-12 w-12 rounded-full bg-gray-200/15 text-center items-center flex justify-center
                      `,
                  children: expandedIndex === idx ? /* @__PURE__ */ jsx(FaMinus, {}) : /* @__PURE__ */ jsx(FaPlus, {})
                }
              )
            ]
          },
          idx
        )),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-10 left-10 space-x-2", children: [
          /* @__PURE__ */ jsx("button", { className: "text-4xl font-bebas  text-white", children: "Astro Blog" }),
          /* @__PURE__ */ jsx("button", { className: " rounded-full bg-white right-0   w-4 h-4" })
        ] })
      ] })
    ] })
  ] }) });
};

const $$Astro = createAstro();
const $$Trending = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Trending;
  const country = Astro2.url.searchParams.get("category") || "general";
  await postCategory(country);
  const datas = await getEverything(country);
  const categorys = await Category();
  console.log(categorys);
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": "Trendings Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerTrending", BannerTrending, { "data": datas, "categorys": categorys, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/banner/BannerTrending", "client:component-export": "default" })} ${maybeRenderHead()}<section class="grid grid-cols-1 z-10  md:grid-cols-3 lg:grid-cols-6 gap-6 container py-10 bg-gray-100 rounded-b-2xl"> <div class="col-span-1 md:col-span-3 font-bebas gap-5 flex flex-col"> <h1 class=" font-bold text-5xl py-5 flex ">Top Blogs
<span class="h-3 w-3 bg-black rounded-full bottom-0"></span> </h1> <img${addAttribute(datas[0].image, "src")} alt="/" class="rounded-2xl h-[250px] w-full object-cover"> <p class="text-md text-gray-400">${new Date(datas[0].createdAt).toLocaleDateString()}</p> <a${addAttribute(`/blog/${datas[0].id}`, "href")}> <h1 class="text-xl font-semibold  font-blog">${datas[0].title}</h1> </a> <p class="text-md font-semibold  font-blog text-gray-400">${datas[0].description}</p> <div class="flex gap-4 items-center pt-5"> <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 bg-gray-900 rounded-full"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 14a4 4 0 0 1-4-4 4 4 0 1 1 8 0 4 4 0 0 1-4 4zm0 2c4.4 0 8 1.79 8 4v2H4v-2c0-2.21 3.6-4 8-4z"></path> </svg> <p class="text-md font-semibold grid font-bebas tracking-wider text-gray-900"> <span>Written By : </span> ${datas[0].author} </p> </div> </div> <div class="col-span-1 md:col-span-3   font-blog pt-7 "> <div class="grid  gap-4 pt-[80px] "> ${datas.slice(1, 3).map((item) => renderTemplate`<a${addAttribute(`/blog/${item.id}`, "href")}> <div class="grid grid-cols-2 gap-3"> <img${addAttribute(item.image, "src")} alt="/" class="h-full w-full object-cover rounded-2xl"> <div class="flex flex-col gap-3"> <p class="text-sm text-gray-600 font-bebas pt-2">${new Date(item.createdAt).toLocaleDateString()}</p> <h1 class="text-xl  font-bebas">${item.title}</h1> <h1 class="text-md  font-blog text-gray-500">${item.description}</h1> </div> </div> </a>`)} </div> </div> </section> <section class="pt-[50px] font-bebas container"> ${renderComponent($$result2, "Content3", Content3, { "data": datas, "title": "Blogs Content", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/content/Content3", "client:component-export": "default" })} </section> ${renderComponent($$result2, "SliderImage", SliderImages, { "data": datas, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/sliderImages", "client:component-export": "default" })} ` })}`;
}, "D:/astroblog/src/pages/trending.astro", void 0);

const $$file = "D:/astroblog/src/pages/trending.astro";
const $$url = "/trending";

export { $$Trending as default, $$file as file, $$url as url };
