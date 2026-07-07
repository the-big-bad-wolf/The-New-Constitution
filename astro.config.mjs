import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://newconstitution.pages.dev",
  integrations: [solidJs(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
