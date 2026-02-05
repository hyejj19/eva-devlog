/** @type {import('tailwindcss').Config} */
const disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
};

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        '2xl': { css: disabledCss },
      },
      colors: {
        // 브랜드 컬러
        'main-orange': {
          DEFAULT: '#EB6440',
          light: '#FF8566',
          dark: '#D14A26',
        },
        'main-teal': {
          DEFAULT: '#497174',
          light: '#5A8B8F',
          dark: '#38595C',
        },
        'medium-teal': '#D6E4E5',
        'light-teal': '#EFF5F5',
        'deep-gray': {
          DEFAULT: '#1E1F21',
          light: '#2A2B2E',
          lighter: '#36383C',
        },

        // 시맨틱 컬러
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
        info: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        },

        // 시맨틱 텍스트 컬러
        text: {
          primary: {
            light: '#111827',
            dark: '#F9FAFB',
          },
          secondary: {
            light: '#4B5563',
            dark: '#D1D5DB',
          },
          muted: {
            light: '#6B7280',
            dark: '#9CA3AF',
          },
        },

        // 시맨틱 배경 컬러
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1E1F21',
          elevated: {
            light: '#EFF5F5',
            dark: '#2A2B2E',
          },
        },

        // 시맨틱 Border 컬러
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#374151',
          strong: {
            light: '#D1D5DB',
            dark: '#4B5563',
          },
        },
      },
      // 4px 기반 Spacing 확장
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      },
      // Typography 확장
      fontSize: {
        'display': ['2.25rem', { lineHeight: '1.1', fontWeight: '800' }],
        'display-md': ['3rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['1.875rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-md': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-md': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
