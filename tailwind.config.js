/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'coin-spin': {
          to : { transform: 'rotateY(360deg)' },
        }
      },
      animation: {
        'coin-spin': 'coin-spin 6s linear infinite',
      },
    },
    fontFamily: {
      'duara': ['"Comfortaa"', ],
      'nzito': ['"Josefin Sans"', ],
    },
  },
  plugins: [],
}
