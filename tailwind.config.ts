import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      keyframes: {
       'slide-in-bottom': {
         '0%': {
           transform: 'translateY(100px)',
           opacity: '0',
         },
         '100%': {
           transform: 'translateY(0)',
           opacity: '1',
         }
       }
      },
      animation: {
       'slide-in-bottom': 'slide-in-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
     },
    },
  },
  plugins: [],
} satisfies Config;
