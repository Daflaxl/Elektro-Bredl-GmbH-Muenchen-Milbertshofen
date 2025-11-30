/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e293b', // Dunkles Anthrazit/Navy
          light: '#334155',
        },
        accent: {
          DEFAULT: '#b45309', // Kupfer/Messing Ton
          light: '#d97706',
        },
        background: '#fefbf3', // Warmes Creme-Weiß
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

