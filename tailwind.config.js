module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths as necessary
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#E6F0FF',
          200: '#BFDAFF',
          900: '#1E3A8A',
        },
        purple: {
          100: '#F3E8FF',
          900: '#4C1D95',
        },
        pink: {
          100: '#FCE7F3',
          900: '#831843',
        },
      },
    },
  },
};
