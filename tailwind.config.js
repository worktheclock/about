/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const dlsColors = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F5F7FB',
    200: '#DBE2F0',
    300: '#ABB3C1',
    400: '#696B71',
    500: '#484B51',
    600: '#313131',
    700: '#121212',
  },
  blue: {
    100: '#DCFEFE',
    200: '#C7FFFF',
    300: '#00CBEC',
    400: '#00A1C7',
    500: '#005482',
  },
  vermillion: {
    100: '#FFDFDC',
    200: '#FFC9C9',
    300: '#FF5543',
    400: '#ED2E20',
    500: '#C22626',
  },
  lemon: {
    100: '#FFFCB1',
    200: '#FFF2CF',
    300: '#FFDB45',
    400: '#FFC247',
    500: '#FF9933',
  },
  green: {
    100: '#D2FFF1',
    200: '#C4FFE8',
    300: '#8FEDCF',
    400: '#17AB52',
    500: '#1F7D45',
  },
  blurple: {
    100: '#DBDBFF',
    200: '#BFBFFF',
    300: '#6B59ED',
    400: '#5033E1',
    500: '#3826CC',
  },
  violet: {
    100: '#EEDFFF',
    200: '#E8D1FF',
    300: '#CE9CFF',
    400: '#A112FF',
    500: '#820DDE',
    600: '#6112A3',
  },
  cerise: {
    100: '#FFDFF5',
    200: '#FFD1F2',
    300: '#E1449A',
    400: '#D62687',
    500: '#C4147D',
    600: '#9E1769',
  },
}

module.exports = {
  // Files run through Tailwind
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],

  // Theme based on our Marketing DLS
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      ...dlsColors,
    }),

    fontFamily: {
      sans: [
        'Source Sans Pro',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      mono: [
        'Source Code Pro',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.125rem' }], // 12px / 18px
      sm: ['0.875rem', { lineHeight: '1.313rem' }], // 14px / 21px
      base: ['1rem', { lineHeight: '1.5rem' }], // 16px / 24px
      lg: ['1.125rem', { lineHeight: '1.688rem' }], // 18px / 27px
      xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px / 28px
      '2xl': ['1.5rem', { lineHeight: '2.125rem' }], // 24px / 34px
      '3xl': ['1.875rem', { lineHeight: '2.625rem' }], // 30px / 42px
      '4xl': ['2.25rem', { lineHeight: '2.688rem' }], // 36px / 43px
      '5xl': ['2.5rem', { lineHeight: '3rem' }], // 40px / 48px
      '6xl': ['3rem', { lineHeight: '3.625rem' }], // 48px / 58px
      '7xl': ['3.25rem', { lineHeight: '3.875rem' }], // 52px / 62px
      '8xl': ['4.5rem', { lineHeight: '5.375rem' }], // 72px / 86px
    },

    letterSpacing: {
      tightest: '-0.02em',
      tighter: '-0.01em',
      tight: '-0.005em',
      normal: 0,
      wide: '0.03em',
    },

    // This extends (not replaces) theme properties
    extend: {
      // Breakpoints and responsive modifiers
      screens: {
        xs: '480px',
      },

      spacing: {
        xxs: '0.5rem', // 8px
        xs: '1rem', // 16px
        sm: '1.5rem', // 24px
        md: '2rem', // 32px
        lg: '2.5rem', // 40px
        xl: '3rem', // 48px
        '2xl': '3.5rem', // 56px
        '3xl': '4rem', // 64px
        '4xl': '4.5rem', // 72px
        '5xl': '6rem', // 96px
      },

      borderWidth: {
        3: '3px',
      },

      keyframes: {
        flashBackground: {
          '0%': { background: dlsColors.lemon[200] },
          '100%': { backgroundColor: 'none' },
        },
        fadeOutSlow: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },

      animation: {
        'flash-background': 'flashBackground 1s ease-out',
        fadeOutSlow: 'fadeOut 1s ease-out',
        fadeIn: 'fadeIn 0.175s ease-in forwards',
      },
    },
  },

  /**
   * This prefix is added before Tailwind classes so we can progressively
   * remove Bootstrap without any class name conflicts.
   *
   * TODO: Remove this once Bootstrap is removed completely
   */
  prefix: 'tw-',

  // Remove this when Bootstrap and custom CSS tech debt is removed completely
  important: true,

  plugins: [
    plugin(({ addBase }) => {
      const extractColors = (colors, colorGroup = '') => {
        return Object.keys(colors).reduce((previousColors, colorKey) => {
          const value = colors[colorKey]
          const cssVariable = colorGroup ? `--sg-color-${colorGroup}-${colorKey}` : `--sg-color-${colorKey}`

          const newColors = typeof value === 'string' ? { [cssVariable]: value } : extractColors(value, colorKey)

          return { ...previousColors, ...newColors }
        }, {})
      }

      addBase({
        ':root': extractColors(dlsColors),
      })
    }),
  ],
}
