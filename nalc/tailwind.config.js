/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#F2F7FC',
          100: '#E2EDF8',
          200: '#B9D1E8',
          300: '#8EB5D6',
          400: '#5F96C2',
          500: '#3279AE',
          600: '#1769A6',
          700: '#0B5A96',
          800: '#0A4778',
          900: '#0A3158',
          950: '#061B36',
        },
      },
    },
  },
  plugins: [],
};
