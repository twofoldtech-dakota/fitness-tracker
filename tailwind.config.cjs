/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        grey: '#68798D',
        dark: {
          100: '#292E38',
          200: '#1C1F26',
          300: '#0E1116',
        },
        primary: {
          100: '#66EBA6',
          200: '#00A851',
          300: '#00A851'
        },
        secondary: {
          100: '#D64CF6',
          200: '#D64CF6',
        },
        white: '#fff'
      }
    },
  },
  plugins: []
};