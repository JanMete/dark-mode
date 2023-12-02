// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'rgb(255,92,92)',
        primaryVariant: '#ff2d2d',
        secondaryColor: '#1b9999',
        onPrimary: 'rgb(250,250,250)',
        onBackground: 'rgb(66,66,66)',
        onBackgroundAlt: 'rgba(66,66,66,0.7)',
        background: 'rgb(255,255,255)',
        boxShadow: 'rgba(0,0,0,0.5)',

        //DARK MODE

        darkPrimaryColor: 'rgb(150,65,255)',
        darkPrimaryVariant: '#6c63ff',
        darkSecondaryColor: '#03dac5',
        darkOnPrimary: '#000',
        darkOnBackground: 'rgba(255,255,255,0.9)',
        darkOnBackgroundAlt: 'rgba(255,255,255,0.7)',
        darkBackground: '#121212',
      },
      fontFamily: {
        kaushan: ['Kaushan Script', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), 'prettier-plugin-tailwindcss'],
  important: true,
};
