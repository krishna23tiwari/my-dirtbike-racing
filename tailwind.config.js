module.exports = {
    theme: {
      extend: {
        fontFamily: {
          openSans: ['Open Sans', 'sans-serif'],
        },
        animation: {
          parralax: 'parralax 600s linear infinite',
          moto: 'moto 5s linear infinite',
          voiture: 'voiture 1s linear infinite',
        },
        keyframes: {
          parralax: {
            '0%': { backgroundPosition: '260px' },
            '100%': { backgroundPosition: '-10000vw' },
          },
          moto: {
            '0%': { transform: 'translateY(0) rotate(0)' },
            '5%': { transform: 'translateY(0) rotate(-5deg)' },
            '25%': { transform: 'translateY(60px) rotate(-20deg)' },
            '49%': { transform: 'translateY(0) rotate(-1deg)' },
            '51%': { transform: 'translateY(0) rotate(1deg)' },
            '75%': { transform: 'translateY(60px) rotate(20deg)' },
            '80%': { transform: 'translateY(60px) rotate(0deg)' },
            '98%': { transform: 'translateY(0) rotate(0)' },
          },
          voiture: {
            '0%': { transform: 'rotate(0)' },
            '25%': { transform: 'rotate(-5deg)' },
            '50%': { transform: 'rotate(0)' },
            '75%': { transform: 'rotate(5deg)' },
            '100%': { transform: 'rotate(0)' },
          },
        },
      },
    },
    plugins: [],
  }
  