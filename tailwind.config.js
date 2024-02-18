import defaultTheme from 'tailwindcss/defaultTheme'

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
    colors: {
      dark: '#261676',
      blue: {
        DEFAULT: '#2463ff',
        light: '#5B8AFF',
      },
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: ["'Mouse Memoirs'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'pink-gradient':
          'linear-gradient(to bottom, rgb(254,113,254), rgb(113,153,255))',
        'pink-light-gradient':
          'linear-gradient(to bottom, rgb(254,148,254), rgb(161,174,254))',
      },
      boxShadow: {
        'blue-button':
          '0 -2px 0 3px inset rgb(20, 14, 102),' +
          '0 1px 0 6px inset rgb(60, 116, 255)',
        'pink-button':
          '0 -2px 0 3px inset rgb(20, 14, 102),' +
          '0 1px 0 6px inset rgb(198, 66, 251)',
        'play-button':
          '0 -4px 0 5px inset rgb(36, 48, 65),' +
          '0 -12px 0 11px inset rgb(157, 45, 254)',
      },
    },
  },
  plugins: [],
}
