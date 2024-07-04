import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import auth from "auth-astro";
import vercel from '@astrojs/vercel/serverless';
import db from "@astrojs/db";
import actions from "astro-actions"


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({
    include: ["**/react/*"],
  }), mdx(), sitemap(), auth(), db(),actions()],
  output: 'server',
  adapter: vercel(),
  experimental: {
    actions: true
  },
  redirects : {
    path : '/'
  },
});



