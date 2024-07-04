/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, q as createAstro, o as maybeRenderHead } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as getUserFromToken } from './get_BpcYW7nT.mjs';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const FormatDate = ({ date }) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
  return /* @__PURE__ */ jsx("span", { children: formattedDate });
};
const Profile = ({ data }) => {
  if (!data) {
    return null;
  }
  const [activeTab, setActiveTab] = useState("comments");
  const showComments = () => setActiveTab("comments");
  const showCollections = () => setActiveTab("collections");
  return /* @__PURE__ */ jsxs("section", { className: "pt-[70px] h-full w-full container grid grid-cols-1 lg:grid-cols-4 gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-2 py-5", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: data.image,
        width: 200,
        height: 200,
        alt: "/",
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-2 flex flex-col gap-4 py-5 justify-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold font-blog bg-black text-white w-fit px-4 py-2", children: "Profile Page" }),
      /* @__PURE__ */ jsxs("p", { className: "text-3xl font-bebas px-4 py-2", children: [
        "name : ",
        data.name
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-xl font-medium font-bebas", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: `bg-black text-white px-4 py-2 ${activeTab === "comments" ? "bg-opacity-75" : ""}`,
            onClick: showComments,
            children: "Comment"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: `bg-black text-white px-4 py-2 ${activeTab === "collections" ? "bg-opacity-75" : ""}`,
            onClick: showCollections,
            children: "Collection"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "h-[300px] w-full bg-gray-400 duration-300 overflow-y-auto", children: [
        activeTab === "comments" && data.comments.map((item) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex flex-col gap-2 font-blog text-md bg-gray-200 hover:bg-neutral-400 px-4 py-3",
            children: /* @__PURE__ */ jsxs("a", { href: `/blog/${item.blogId}`, children: [
              /* @__PURE__ */ jsx("p", { children: item.text }),
              /* @__PURE__ */ jsx(FormatDate, { date: item.createdAt.toISOString() })
            ] })
          },
          item.id
        )),
        activeTab === "collections" && data.collections.map((item) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex flex-col  font-blog text-md bg-gray-200 hover:bg-neutral-400 px-4 py-3",
            children: /* @__PURE__ */ jsx("a", { href: `/blog/${item.blogId}`, children: /* @__PURE__ */ jsxs("p", { children: [
              "Collection Name: ",
              item.blog.title
            ] }) })
          },
          item.id
        ))
      ] })
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  const token = Astro2.cookies.get("token")?.value;
  const data = await getUserFromToken(token);
  if (!token || !data) {
    Astro2.redirect("/");
  }
  const datas = Astro2.locals.name;
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": "Profile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-[70px] text-black"> <h1>${datas} </h1> </section> ${renderComponent($$result2, "ProfileContent", Profile, { "data": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/content/Profile", "client:component-export": "default" })} ` })}`;
}, "D:/astroblog/src/pages/profile.astro", void 0);

const $$file = "D:/astroblog/src/pages/profile.astro";
const $$url = "/profile";

export { $$Profile as default, $$file as file, $$url as url };
