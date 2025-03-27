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
      backgroundImage: {
        'custom-gradient-bronze': 'linear-gradient(263deg, #DC8F51 80.95%, #FFDBBD 75.91%, #DC8F51 99%)',
        'custom-gradient-silver': 'linear-gradient(263deg, #AEBCBB 80.95%, #FFF 93.91%, #AEBCBB 74.61%)',
        'custom-gradient-gold': 'linear-gradient(263deg, #F99D1A  80.95%, #FFD79D 93.91%, #F99D1A 74.61%)',
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

