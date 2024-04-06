import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1224px" },

      lg: { max: "1023px" },

      md: { max: "790px" },

      sm: { max: "611px" },

      base: { max: "576px" },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
