const { mainTheme } = require('proyecto-viviana-ui/tailwindcss');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/proyecto-viviana-ui/dist/index/*',
  ],
  theme: {
    extend: {
      ...mainTheme,
    },
  },
  plugins: [],
};
