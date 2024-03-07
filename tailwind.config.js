/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // spacing: {
        
    // },
    extend: {
      colors: {
        mobilecolor: {
          100: "#4B3EAE",
          200: "rgba(255, 255, 255, 0.5)"
        }
        
      }
    },
  },
  plugins: [],
}


