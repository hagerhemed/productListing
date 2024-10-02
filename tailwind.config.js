/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
    './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        seconaryColor:'#D9F99D',
        grayColor:'#E5E5E5'
    },
    fontFamily:{
      bodyFont:['Lexend Deca']
    }
    },
  },
  plugins: [],
}

