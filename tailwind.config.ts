import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#226BF7',
          dark: '#1c56c6',
        },
        black: '#000000',
      },
    },
  },
  plugins: [],
} satisfies Config;
