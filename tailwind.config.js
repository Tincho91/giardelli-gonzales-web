/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        customBlue: {
          DEFAULT: '#143141',
          dark: '#0f2a37',
        },
        customGrey: {
          DEFAULT: '#DCDCDC'
        },
        customOrange: {
          DEFAULT: '#DD6C49'
        },
      },
    },

  },
  plugins: [require("tailwindcss-animate")],
}