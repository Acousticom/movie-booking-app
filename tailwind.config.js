/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'tablet':{'max':'700px'},
      'mobile':{'max':'350px'}
    },
    extend: {},
  },
  plugins: [],
}

