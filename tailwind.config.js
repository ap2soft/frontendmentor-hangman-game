const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("tailwindcss").Config} */
export default {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    fontSize: {
      base: '1.625rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '5.5rem',
      '3xl': '8.5rem',
    },
    extend: {
      fontFamily: {
        sans: ["'Mouse Memoirs'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
