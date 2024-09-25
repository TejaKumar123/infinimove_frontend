/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'button-radial': 'radial-gradient(circle at center, #FFFFFF, #FCFDFF, #A5B3FA)',
        'navbar-linear': 'linear-gradient(to right, #CED4FF52, #8F9DFF52, #8E9BFF52, #001FFF52)',
        'footer-linear': 'linear-gradient(to top,#001FFF,#142180,#17226E,#1A225A)'

      },
      fontFamily: {
        heading: ["heading", "sans-serif"],
        subheading: ["subheading", "sans-serif"],
        para: ["para", "sans-serif"],
      }
    },
  },
  plugins: [],
}