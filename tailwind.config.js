module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        101: '101',
        999: '999',
      },
      colors: {
        red: {
          600: '#cf0652',
        },
      },
      spacing: {
        34: '8.5rem',
        58: '14.5rem',
        74: '18.5rem',
        76: '19rem',
      },
      minHeight: {
        9: '2.25rem',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      divideColor: ['group-hover'],
    },
  },
  plugins: [],
};
