/* empty css                          */
import { m as createComponent, n as renderTemplate, o as maybeRenderHead, p as addAttribute, q as createAstro, t as renderComponent } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';
import { C as ContentMid } from './ContentMid_CiU-nibl.mjs';
import { C as Content3 } from './Content3_KX7LEHWE.mjs';
import { C as Content4 } from './Content4_BbaRzzsQ.mjs';
import 'clsx';
import { format } from 'date-fns';
import { B as BlogsData, P as Popular, T as Trending } from './get_BpcYW7nT.mjs';

const $$Astro = createAstro();
const $$Content1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Content1;
  const { data } = Astro2.props;
  const filteredArticles = data.filter((item) => {
    return item.author && item.description && item.title && item.url && item.image;
  });
  return renderTemplate`${maybeRenderHead()}<div class="grid  grid-cols-1 md:grid-cols-5 gap-5 px-10  h-full pt-[70px]"> <div class="col-span-1 md:col-span-3  h-fit w-full border-b-[1px] border-black pb-6"> <img${addAttribute(filteredArticles[0].image, "alt")}${addAttribute(filteredArticles[0].image, "src")}${addAttribute(1e3, "width")}${addAttribute(1e3, "height")} class="object-cover h-[480px] w-full"> <div class="flex flex-col justify-center gap-5"> <div class="flex justify-center gap-4 pt-4 text-lg  blog relative items-center"> <p>${filteredArticles[0].author}</p> <button class="w-[5px] h-[5px]  bg-black rounded-full "></button> <p>${format(new Date(filteredArticles[0].createdAt), "dd MMM yyyy")}</p> </div> <a${addAttribute(`/blog/${filteredArticles[0].id}`, "href")}> <p class="text-center blog text-3xl">${filteredArticles[0].title}</p> </a> <p class="text-md "> ${filteredArticles[0].description}</p> </div> <div class="flex justify-between pt-5"> <button class="text-black border-2 border-gray-300 hover:text-white hover:bg-gray-400 px-3 py-2">
Read Now
</button> <button class="text-black blog px-3 py-2"> <span class="text-gray-400"> ${50} </span>
Comments
</button> </div> </div> <div class="col-span-1 md:col-span-2 h-fit w-full "> <div class="my-5 pt-5"> <h1 class="text-2xl bebas font-semibold bg-black text-white w-fit p-2 ">
Other Post
</h1> </div> <img${addAttribute(filteredArticles[4].image, "alt")}${addAttribute(filteredArticles[1].image, "src")}${addAttribute(1e3, "width")}${addAttribute(1e3, "height")} class="object-cover h-[200px] w-full"> <h1 class="text-4xl  blog py-5 w-full text-start">${filteredArticles[1].title}</h1> <p class="text-md "> ${filteredArticles[1].description}</p> </div></div>`;
}, "D:/astroblog/src/components/content/Content1.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = await BlogsData();
  const populer = await Popular();
  const Trendings = await Trending();
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": "Home Page", "titles": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content1", $$Content1, { "data": data, "title": "Data", "title": "Home Page" })} ${renderComponent($$result2, "ContentMid", ContentMid, { "data": populer, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/content/ContentMid", "client:component-export": "default" })} ${maybeRenderHead()}<section class="px-10"> ${renderComponent($$result2, "Content3", Content3, { "data": populer, "title": "Hot News", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/content/Content3", "client:component-export": "default" })}</section> <section class="px-10 pt-[200px]"> ${renderComponent($$result2, "Content4", Content4, { "data": Trendings, "title": "Trending" })} </section> ` })}`;
}, "D:/astroblog/src/pages/index.astro", void 0);

const $$file = "D:/astroblog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
