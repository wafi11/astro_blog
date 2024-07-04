/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, o as maybeRenderHead } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from './_astro_assets_ChZyzG13.mjs';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": "Login Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid grid-cols-1 md:grid-cols-2 pt-[70px] h-screen container py-10 justify-center items-center"> <div class="flex justify-center items-center bg-gray-300 rounded-l-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": "/images.avif", "alt": "/", "height": 200, "width": 200, "class": "w-full h-[500px] rounded-3xl" })} </div> <form id="Form" class="bg-gray-300 p-8 w-full flex flex-col justify-center items-center h-[500px]"> <div class="w-full mb-4"> <label for="name" class="block text-black mb-2">Username:</label> <input type="text" id="name" name="name" required class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"> </div> <div class="w-full mb-4"> <label for="email" class="block text-black mb-2">Email:</label> <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"> </div> <div class="w-full mb-4"> <label for="password" class="block text-black mb-2">Password:</label> <input type="password" id="password" name="password" required class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"> </div> <div class="w-full mb-4"> <label for="image" class="block text-black mb-2">Image:</label> <input type="file" id="image" name="image" required class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"> </div> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign In</button> <p id="error-message" class="mt-4 text-red-500"></p> </form> </section> ` })} `;
}, "D:/astroblog/src/pages/register.astro", void 0);

const $$file = "D:/astroblog/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
