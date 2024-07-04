/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, o as maybeRenderHead, p as addAttribute } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import jwt from 'jsonwebtoken';
import { c as client } from './db_C2CBN58r.mjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const $$Button = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-2 text-center pt-[100px]"> <button id="tgt"${addAttribute(`px-4 py-2 text-lg cursor-pointer border-none rounded text-black`, "class")}>
Bookmark
${renderComponent($$result2, "FontAwesomeIcon", FontAwesomeIcon, { "icon": faBookmark })} </button> </div> ` })} `;
}, "D:/astroblog/src/components/utils/Button.astro", void 0);

const User = async (token) => {
  try {
    const jwtKey = "12345";
    if (!token) {
      throw new Error("Token Not Found");
    }
    if (!jwtKey) ;
    const decoded = jwt.verify(token, jwtKey);
    if (typeof decoded === "string") {
      throw new Error("Invalid token payload");
    }
    const userId = decoded.userId;
    if (!userId) {
      throw new Error("User ID not found in token");
    }
    const user = await client.user.findUnique({
      where: {
        id: userId
      },
      include: {
        accounts: true,
        sessions: true,
        likes: true
      }
    });
    if (!user) {
      throw new Error("User not found");
    }
    console.log(user);
    return user;
  } catch (e) {
    console.log("erorr", e);
  }
};
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Button", $$Button, {})}`;
}, "D:/astroblog/src/pages/test.astro", void 0);
const $$file = "D:/astroblog/src/pages/test.astro";
const $$url = "/test";

export { User, $$Test as default, $$file as file, $$url as url };
