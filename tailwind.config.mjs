/** @type {import('tailwindcss').Config} */
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
        backgroundImage:{
          bannerImg:"url('/image/banner_1.jpg')",
          blackOverlay:
          "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
        },
      },
    },
  },
  plugins: [],
};
