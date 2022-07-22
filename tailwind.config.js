/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/*.css'],
  theme: {
    screens: {
      sm: '23.438em',
      // 375px
      md: '48em',
      // 768px
      lg: '64em',
      // 1024px
      xl: '90em',
      // 1440px
      '2xl': '160em',
      // 2560px
    },
    extend: {
      colors: {
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
        grayBlue: 'hsl(233, 8%, 62%)',
        lightGrayBlue: 'hsl(220, 16%, 96%)',
        lightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
