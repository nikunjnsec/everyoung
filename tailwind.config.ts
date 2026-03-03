import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        "brand-black": "#0A0A0A",
        "brand-white": "#FAFAFA",
        "brand-gray": "#F4F4F4",
        "brand-border": "#E5E5E5",
        "brand-muted": "#9B9B9B",
        "accent-red": "#C0392B",
      },
      letterSpacing: {
        "extra-wide": "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
