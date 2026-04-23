export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mint:{
           50:  '#f2fbf7',
          100: '#d6f5e8',
          200: '#aeead1',
          300: '#7fdbb7',
          400: '#4cc99a',
          500: '#2bbf8a', 
          600: '#1e9e72',
          700: '#187d5b',
          800: '#145f47',
          900: '#0f4a38',
        }
      }
    },
  },
  plugins: [],
}