/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        skinColor: '#011842',
        firstColor: '#6E57E0',
        firstColorSecond: '#382A83',
        firstColorAlt: '#5A43CB',
        firstColorLighter: '#C1B6FC',
        titleColor: '#242329',
        textColor: '#6D6A7C',
        textColorLight: '#A19FAD',
        inputColor: '#F0EEFC',
        bodyColor: '#FBFBFE',
        containerColor: '#EBEBEB',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
