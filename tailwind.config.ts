import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin"; // 1. Importamos aqui em cima

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js", // Adicionei suporte ao flowbite-react também caso use
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    flowbite // 2. Usamos a variável aqui, sem o "require"
  ],
};

export default config;