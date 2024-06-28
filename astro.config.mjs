import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(),  mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'dracula' },
    remarkRehype: { footnoteLabel: 'Footnotes' },
    gfm: false,
  }),sitemap()],
  output: 'server',
  experimental: {
    actions: true
  }
});