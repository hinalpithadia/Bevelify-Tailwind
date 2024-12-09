/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter'],
        'playfair': ['playfair'],
      },
      colors: {
        'lightblue': '#83B2FA',
        'lightblue-hover': '#6493d9',
        'darkblue': '#182158',
        'darkblue-hover': '#283585',
        'gold': '#DBB079'
      },
      scrollbar: {
        hide: {
          'scrollbar-width': 'none', /* For Firefox */
          '&::-webkit-scrollbar': {
            display: 'none' /* For Chrome, Safari, and Opera */
          }
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none', /* For Firefox */
          '&::-webkit-scrollbar': {
            display: 'none' /* For Chrome, Safari, and Opera */
          }
        }
      });
    }
  ],
}

