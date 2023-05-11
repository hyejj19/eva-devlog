/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
    extend: {
      colors: {
        'main-orange': '#EB6440',
        'main-teal': '#497174',
        'medium-teal': '#D6E4E5',
        'light-teal': '#EFF5F5',
        'deep-gray': '#1E1F21',
      },
    },
  },
  plugins: [],
};
