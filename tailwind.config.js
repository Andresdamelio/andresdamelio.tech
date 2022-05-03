module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // './components/**/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '1/7': '15%',
        '6/7': '85%',
      },
      height: {
        34: '8.5rem',
      },
      colors: {
        white: '#fff',
        orange: {
          100: '#fff6f0',
          200: '#ffe9db',
          300: '#ff9656',
          400: '#BF4900',
        },
        violet: {
          100: '#3F087A',
          200: '#30065C',
          300: '#210440',
        },
        azure: {
          100: '#f1f7fe',
          200: '#d2e5e7',
        },
        black: {
          100: '#313238',
          200: '#1d1e24',
          300: '#323330',
          400: '#000000',
        },
        yellow: {
          100: '#fff7af',
          200: '#fff499',
          300: '#fabf2b',
          800: '#7E6117',
        },
        dark: {
          400: '#22384c',
          500: '#1d262b',
        },
      },
      borderWidth: {
        5: '5px',
      },
      padding: {
        7: '1.75rem',
        60: '14.5rem',
      },
      borderRadius: {
        20: '20px',
      },
      lineHeight: {
        '3xl': '1.875rem',
        lg: '1.125rem',
      },
      fontFamily: {
        mitr: ['"Mitr"', 'system-ui', '-apple-system'],
        roboto: ['"Roboto"', 'system-ui', '-apple-system'],
      },
      zIndex: {
        60: 60,
      },
    },
  },
  variants: {
    backgroundColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    textColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    placeholderColor: ['dark', 'hover', 'active', 'focus'],
  },
  plugins: [],
}
