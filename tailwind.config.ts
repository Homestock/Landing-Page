import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme primary
        deep: '#0A0A0C',           // page background
        panel: '#141417',          // card background
        'panel-2': '#1A1A1F',      // alt card bg
        // Text
        paper: '#FFFFFF',
        // Accents
        accent: '#007AFF',
        amber: '#F59E0A',
        sage: '#6B9E80',
        rose: '#ED8C8C',
        violet: '#8C5CFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '0.95' }],
        '9xl': ['8rem', { lineHeight: '0.95' }],
        '10xl': ['10rem', { lineHeight: '0.92' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter2: '-0.04em',
        tighter3: '-0.03em',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
