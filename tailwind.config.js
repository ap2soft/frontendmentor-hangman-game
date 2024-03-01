import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import("tailwindcss").Config} */
export default {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    colors: {
      dark: '#261676',
      blue: {
        DEFAULT: '#2463ff',
        light: '#5B8AFF',
      },
      white: '#FFFFFF',
      black: '#243041',
      lavender: '#887DC0',
    },
    extend: {
      fontFamily: {
        sans: ["'Mouse Memoirs'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        mobile: "url('/src/assets/images/bg-mobile.svg')",
        tablet: "url('/src/assets/images/bg-tablet.svg')",
        'pink-gradient':
          'linear-gradient(to bottom, rgb(254,113,254), rgb(113,153,255))',
        'pink-light-gradient':
          'linear-gradient(to bottom, rgb(254,148,254), rgb(161,174,254))',
        'modal-gradient':
          'linear-gradient(to bottom, rgb(52, 74, 186), rgba(0, 20, 121, 0.83))',
      },
      boxShadow: {
        'blue-button':
          '0 -2px 0 3px inset rgb(20, 14, 102),' +
          '0 1px 0 6px inset rgb(60, 116, 255)',
        'pink-button':
          '0 -2px 0 3px inset rgb(20, 14, 102),' +
          '0 1px 0 6px inset rgb(198, 66, 251)',
        'header-button': '0 -5px 0 -1px inset rgba(157, 45, 245, 0.25)',
        'play-button':
          '0 -4px 0 5px inset rgb(36, 48, 65),' +
          '0 -12px 0 11px inset rgb(157, 45, 254)',
        modal:
          '0 -8px 0 4px inset rgb(20, 14, 102),' +
          '0 6px 0 8px inset rgb(38, 99, 255)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
