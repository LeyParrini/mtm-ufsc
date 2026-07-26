import type { Config } from "tailwindcss";

const config: Config = {
  // Faz o Dark Mode funcionar por classe no HTML
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores da UFSC
        mtmVerde: "#006341",
        mtmCinza: "#e6e6e6",
        mtmAzul: "#0a1931",
        mtmAmarelo: "#f0c419",
      },
    },
  },
  plugins: [],
};
export default config;