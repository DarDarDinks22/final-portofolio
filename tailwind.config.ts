import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        smoothSpin: {
          "0%": { transform: "rotate(0deg)"}, 
          "100%": { transform: "rotate(360deg)"}
        },
        navBarOpen: {
          "0%": { opacity:"0", transform: "translateY(-1rem)"}, 
          "100%": { opacity:"1", transform: "translateY(0)"}
        }, 
      }, 
      animation: {
        smoothSpin: "smoothSpin 0.6s ease-in-out forwards", 
        navBarOpen: "navBarOpen 0.6s ease-in-out forwards", 
      }, 

    },
  },
  plugins: [],
} satisfies Config;
