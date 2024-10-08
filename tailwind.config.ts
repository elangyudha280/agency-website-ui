import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        c:{
          green:{
            '200':'#4CAF4F',
            '700':'#103E13'
          },
          slate:{
            '100':'#F5F7FA',
            '200':'#E0E0E0',
            '300':'#717171',
            '400':'#455A64'
          }
        },
      },
      fontFamily: {
        'poppins': ['"Poppins"','sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
