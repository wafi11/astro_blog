/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, q as createAstro, o as maybeRenderHead } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from './_astro_assets_ChZyzG13.mjs';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';

const $$Astro = createAstro();
const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Users;
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": "Login Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid grid-cols-1 md:grid-cols-2   pt-[70px]  h-screen container py-10 justify-center items-center"> <div class="flex justify-center items-center bg-gray-300 rounded-l-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": "/images.avif", "alt": "/", "height": 200, "width": 200, "class": "w-full h-[400px] rounded-3xl" })} </div> <form id="Form" class="bg-gray-300 p-8 w-full flex flex-col justify-center items-center h-[400px]"> <div class="w-full mb-4"> <label for="email" class="block text-black mb-2">Email:</label> <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"> </div> <div class="w-full mb-4"> <label for="password" class="block text-black mb-2">Password:</label> <input type="password" id="password" name="password" required class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"> </div> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign In</button> <p id="error-message" class="mt-4 text-red-500"></p> </form> </section> ` })} `;
}, "D:/astroblog/src/pages/users.astro", void 0);

const $$file = "D:/astroblog/src/pages/users.astro";
const $$url = "/users";

export { $$Users as default, $$file as file, $$url as url };
