/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        reg: ['var(--font-switzer-reg)', 'sans-serif'],
        black: ['var(--font-switzer-black)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};