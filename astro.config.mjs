import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://newconstitution.pages.dev",
  integrations: [solidJs(), tailwind()],
});
