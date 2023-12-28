/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'heming' : ["Heming variable", "sans-serif"],
        'helvetica' : ["Helvetica Light Regular", "sans-serif"],
      },
      colors: {
        'm-dark' : 'rgb(14,16,21)',
        'm-title': 'rgb(222,227,233)'
      }
  },
  plugins: [],
  }
}

