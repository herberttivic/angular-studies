/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/app/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        "primary-dark" : "#192152",
        "primary-light" : "#459CD9",
        "secondary" : "#FFA126"
      }
    },
    fontFamily: {
      'display': ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      'body': ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      'sans': ['Inter', 'Arial', 'Helvetica', 'sans-serif']
    }
  },
  plugins: [],
}

