export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];

export const darkMode = false;

export const  defaultColors = require('tailwindcss/defaultTheme')

export const colors = {
    ...defaultColors,
    ...{
        "custom-accent": {
            "500": "#5CA68F",
        },
    },
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // formerly 'purge'
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'poppins'],
        jakarta: ['Plus Jakarta Sans', 'jakarta'],
        questrial: ['Questrial', 'questrial'],
        kumbh: ['Kumbh Sans', 'kumbh']
      },
      colors: {
        accent: {
          600: 'oklch(0.6 0.118 184.704)',
          900: 'oklch(60% 0.118 184.704)',
        },
        'custom-accent': {
          500: '#5CA68F',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

export const variants = {
  extend: {},
};

export const plugins = [];

// export const corePlugins = {
//   preflight: false
// }