/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, q as createAstro, o as maybeRenderHead, p as addAttribute } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from './_astro_assets_ChZyzG13.mjs';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';
import { g as getEverything } from './post_BVXCx2zF.mjs';

const $$Astro = createAstro();
const $$Category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Category;
  const search = Astro2.url.searchParams.get("cat") || "entertainment";
  const datas = await getEverything(search);
  console.log(datas);
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": "Category Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-[70px] grid grid-cols-5 gap-4 p-10 h-full  "> <div class="col-span-4 flex flex-col  font-bebas gap-10   mt-10"> <h1 class="text-[60px] leading-none font-bold mb-2">${datas[0].title}</h1> <div class="flex justify-between"> <p class="text-gray-500 text-sm">${new Date(datas[0].createdAt).toLocaleDateString()}</p> <p class="text-gray-600 text-md ">Author : ${datas[0].author}</p> </div> <a${addAttribute(`/blog/${datas[0].id}`, "href")} class="text-blue-500 hover:underline block"> <img${addAttribute(datas[0].image, "src")}${addAttribute(search, "alt")} class="w-full h-[400px] object-cover "> </a> <p class="text-gray-600 text-[4vh] font-blog">${datas[0].description}</p> </div> <div class="col-span-1 space-y-4 font-bebas mt-10 rounded-xl "> <h1 class="text-white bg-black w-fit px-4 text-3xl">Other News</h1> ${datas.slice(0, 2).map((item, index) => renderTemplate`<div class="text-black  bg-gray-200 shadow-md rounded-md p-2"> <img${addAttribute(item.image, "src")}${addAttribute(search, "alt")} class="w-full h-48 object-cover rounded-t-md"> <h1 class="text-xl font-bold mb-2">${item.title}</h1> <p class="text-gray-600">${item.author}</p> <p class="text-gray-500 text-sm">${new Date(item.createdAt).toLocaleDateString()}</p> <a${addAttribute(item.url, "href")} class="text-blue-500 hover:underline mt-2 block">Read more</a> </div>`)} </div> </section> <section class="p-10 py-5 bebas tracking-wider  "> <button class="w-full border-t-[2px] border-black"> <p class="w-fit px-4 py-2 text-lg bg-black text-white ">${search}</p> </button> <div class="grid grid-cols-4 gap-4 w-full py-4 h-full "> ${datas.map((item) => renderTemplate`<div class="w-full border-2  border-gray-400 shadow-md  p-2"> ${renderComponent($$result2, "Image", $$Image, { "src": item.image, "alt": item.title, "width": 200, "height": 400, "class": "w-full h-[300px] object-cover" })} <a${addAttribute(item.url, "href")} class="bebas font-bold tracking-wide text-md mt-4"> <p class="pt-4 text-xl"> ${item.title} </p> </a> </div>`)} </div> </section> ` })}`;
}, "D:/astroblog/src/pages/category.astro", void 0);

const $$file = "D:/astroblog/src/pages/category.astro";
const $$url = "/category";

export { $$Category as default, $$file as file, $$url as url };
