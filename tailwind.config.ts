import type { Config } from "tailwindcss";

const config: Config = {
  // Isso aqui é o que permite o Dark Mode funcionar via classe no HTML
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores da UFSC para facilitar seu uso
        mtmAzul: "#0a1931",
        mtmAmarelo: "#f0c419",
      },
    },
  },
  plugins: [],
};
export default config;