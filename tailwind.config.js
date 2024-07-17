module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      '8xl': '6.06rem',
      'xs':'0.81rem'
    }
  },
  plugins: [require('tailwindcss-font-inter')],

 
}