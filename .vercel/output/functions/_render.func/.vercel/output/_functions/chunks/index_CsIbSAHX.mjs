/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layouts } from './Layouts_DYuZMLcp.mjs';
import { F as FormBlogClient } from './Form_C5-6NhKy.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layouts, { "title": "Form Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormBlogClient", FormBlogClient, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/utils/Form", "client:component-export": "default" })} ` })}`;
}, "D:/astroblog/src/pages/formblog/index.astro", void 0);

const $$file = "D:/astroblog/src/pages/formblog/index.astro";
const $$url = "/formblog";

export { $$Index as default, $$file as file, $$url as url };
