export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];

export const darkMode = false;

export const theme = {
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
      accent: 'oklch(0.6 0.118 184.704)', // Custom Teal Color
    },
  },
};

export const variants = {
  extend: {},
};

export const plugins = [];
