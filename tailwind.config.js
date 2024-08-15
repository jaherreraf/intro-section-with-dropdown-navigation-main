/** @type {import('tailwindcss').Config} */
/*
- Almost White: hsl(0, 0%, 98%)
- Medium Gray: hsl(0, 0%, 41%)
- Almost Black: hsl(0, 0%, 8%)
- Family: [Epilogue](https://fonts.google.com/specimen/Epilogue)
- Weights: 500, 700

*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'almostWhite':'hsl(0, 0%, 98%)',
        'mediumGray': 'hsl(0, 0%, 41%)',
        'almostBlack': 'hsl(0, 0%, 8%)',
      },
      colors:{
        'almostWhite':'hsl(0, 0%, 98%)',
        'mediumGray': 'hsl(0, 0%, 41%)',
        'almostBlack': 'hsl(0, 0%, 8%)',
      },
      fontFamily:{
        epilogue: ['Epilogue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}