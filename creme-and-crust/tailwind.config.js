/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#3B241C',
          50: '#F6F1EE',
          100: '#E9DFDA',
          200: '#D2BFB5',
          300: '#AD8E80',
          500: '#6E4A3B',
          700: '#4F3026',
          900: '#24150F',
        },
        cream: {
          DEFAULT: '#FFF8EF',
          50: '#FFFCF7',
          100: '#FFF8EF',
          200: '#F7EDE0',
        },
        caramel: {
          DEFAULT: '#C58B55',
          50: '#FBF4EC',
          100: '#F4E3D0',
          300: '#DDB184',
          500: '#C58B55',
          700: '#9A6538',
          900: '#6B4325',
        },
        beige: {
          DEFAULT: '#E9D8C7',
          50: '#FAF5EF',
          100: '#F5EBDF',
          200: '#E9D8C7',
          300: '#D9C0A6',
          500: '#A88970',
        },
        success: { 50: '#EEF7F0', 500: '#3E8A57', 700: '#2B6640' },
        warning: { 50: '#FDF6E7', 500: '#B7791F', 700: '#8A5A12' },
        error: { 50: '#FDF0EF', 500: '#B42318', 700: '#8F1C14' },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(59, 36, 28, 0.25)',
        lift: '0 24px 48px -20px rgba(59, 36, 28, 0.35)',
      },
    },
  },
  plugins: [],
};
