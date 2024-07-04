/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, q as createAstro } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';
import { F as FormBlogClient } from './Form_C5-6NhKy.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let initialData;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    initialData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: formData.get("image")
    };
  }
  const { id } = Astro2.params;
  console.log(id);
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": "Form Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormBlogClient", FormBlogClient, { "client:load": true, "initialData": initialData, "id": id, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/utils/Form", "client:component-export": "default" })} ` })}`;
}, "D:/astroblog/src/pages/formblog/edit/[id]/index.astro", void 0);

const $$file = "D:/astroblog/src/pages/formblog/edit/[id]/index.astro";
const $$url = "/formblog/edit/[id]";

export { $$Index as default, $$file as file, $$url as url };
