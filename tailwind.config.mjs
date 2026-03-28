/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        meander_dark: "url('/meander_dark.svg')",
        meander_light: "url('/meander_light.svg')",
      },
    },
  },
};
