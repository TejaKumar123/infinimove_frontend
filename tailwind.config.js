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
        'footer-linear': 'linear-gradient(to top,#001FFF,#142180,#17226E,#1A225A)',
        "service-border-linear": "linear-gradient(210deg,#F5F6FF 5%,#656EB1 46%,#3749C0 100%)",
        "right-feedback-linear": "linear-gradient(to right,#001FFF25 29%,#0014A525 60%,#0B021C25 100%)",
        "left-feedback-linear": "linear-gradient(to right,#0B021C25 29%,#0014A525 88%,#001FFF25 100%)",
        "divider-linear": "linear-gradient(to right,#1A225A,#FFFFFF,#1A225A)",
        "about-box-linear": "linear-gradient(to bottom,#8322E350,#8B76A055,#EDEDED37)"

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