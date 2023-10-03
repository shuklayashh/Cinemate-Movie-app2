/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
    
      screens:{
        "othet" : {'min' : '340px','max' : '1200px'},
      },
      colors : {
        darkbg : "#7c3aed",
        blue: {
          850: "#7dd3fc"
        }
      }
    },
  },
  plugins: [],
}