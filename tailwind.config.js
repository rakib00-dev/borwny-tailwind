/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        header: "url('../images/about/welcome-banner.jpg')",
      },
      textColor: {
        primary: '#d92cf9',
      },
      backgroundColor: {
        primary: '#b636ff',
        secondPrimary: '#f9fbfd',
      },
      transitionDuration: {
        two: '2000ms',
      },
    },
  },
  plugins: [require('daisyui')],
};
