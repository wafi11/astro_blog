/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, q as createAstro, o as maybeRenderHead, p as addAttribute } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from './_astro_assets_ChZyzG13.mjs';
import { g as getEverything } from './post_BVXCx2zF.mjs';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';
import { MdArrowOutward } from 'react-icons/md';
import { C as Content3 } from './Content3_KX7LEHWE.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const search = Astro2.url.searchParams.get("q") || "";
  const data = await getEverything(search);
  const hasData = data && data.length > 0;
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": hasData ? data[0].title : "No Results Found", "description": hasData ? data[0].description : "Try searching for something else" }, { "default": ($$result2) => renderTemplate`${hasData ? renderTemplate`${maybeRenderHead()}<section class="pt-[70px] w-full relative h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-10
           "> <div class="container col-span-1 md:col-span-2 lg:col-span-4 relative  "> ${renderComponent($$result2, "Image", $$Image, { "src": data[0].image, "alt": "/", "width": 400, "height": 400, "class": "w-full rounded-3xl object-cover h-full brightness-50" })} <div class="absolute bottom-10 w-fit lg:w-[800px] space-y-10 font-blog px-10 text-white"> <h1 class="flex gap-4  space-x-4"> ${data[0].category.map((item) => renderTemplate`<p class="space-x-4 text-md uppercase border-b-2 border-white pb-2"> ${item} </p>`)} </h1> <h1 class="text-md md:text-3xl lg:text-5xl  font-bold "> ${data[0].title} </h1> <div class="flex gap-4"> <button class="border-2 px-4 py-2 rounded-full flex gap-2 "> <a${addAttribute(`/blog/${data[0].id}`, "href")}>View Articles</a> ${renderComponent($$result2, "MdArrowOutward", MdArrowOutward, { "size": 20 })} </button> <button class="border-2 px-4 py-2 rounded-full  bg-gray-100/25">
By ${data[0].author} </button> </div> </div> </div> <div class="col-span-1  grid grid-rows-2 w-full h-full items-center container md:px-3 "> ${data.slice(0, 1).map((item) => renderTemplate`<a${addAttribute(`/blog/${item.id}`, "href")} class="relative  w-full h-full"> ${renderComponent($$result2, "Image", $$Image, { "src": item.image, "alt": "/", "width": 400, "height": 500, "class": "rounded-2xl h-full w-full  object-cover brightness-75" })} <p class="absolute bottom-10 text-xl font-medium px-5 text-white"> ${item.title} </p> </a>`)} </div> </section>` : renderTemplate`<div class="text-center py-10"> <h1 class="text-5xl font-blog font-bold">No Results Found</h1> <p class="text-xl font-blog font-bold">
Try searching for something else.
</p> </div>`}${hasData && renderTemplate`<section class="p-10 m-14"> ${renderComponent($$result2, "Content3", Content3, { "data": data, "title": search, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/content/Content3", "client:component-export": "default" })} </section>`}` })}`;
}, "D:/astroblog/src/pages/search.astro", void 0);

const $$file = "D:/astroblog/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
