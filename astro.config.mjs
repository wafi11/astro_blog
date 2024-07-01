import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import auth from "auth-astro";
import vercel from '@astrojs/vercel/serverless';
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx(), sitemap({
    
  }), auth(), db()],
  output: 'server',
  adapter: vercel(),
  experimental: {
    actions: true
  }
});

