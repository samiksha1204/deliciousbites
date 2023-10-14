import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Define your custom colors
      colors: {
        // Primary color
        write: "#D71313",
        texts: "#155C6E",

        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};

export default config;
