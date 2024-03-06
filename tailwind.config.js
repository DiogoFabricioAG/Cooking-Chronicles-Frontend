/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      "opensans":["Open Sans", 'serif'],
      "esteban":["Esteban", 'serif'],
      "merriweather":["Merryweather", 'serif'],
    }
  },
  plugins: [],
}

