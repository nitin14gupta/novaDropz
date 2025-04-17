/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: '#E6EBF4',
          100: '#C1CFEA',
          200: '#9BB3E0',
          300: '#7596D6',
          400: '#5A7ECE',
          500: '#3A5BA0', // Primary base color - Royal Blue
          600: '#344F8D',
          700: '#2D4379',
          800: '#263666',
          900: '#1F2852',
        },
        // Secondary colors
        secondary: {
          50: '#FFEEE6',
          100: '#FFD4C1',
          200: '#FFB99B',
          300: '#FF9D74',
          400: '#FF824D',
          500: '#FF6B3B', // Secondary base color - Sunset Orange
          600: '#E55C2F',
          700: '#CC4D23',
          800: '#B23E17',
          900: '#992F0B',
        },
        // Accent colors
        accent: {
          50: '#E6FBF8',
          100: '#C1F7EF',
          200: '#9BF2E6',
          300: '#74EDDC',
          400: '#4DE8D3',
          500: '#32E0C4', // Accent base color - Mint Green
          600: '#29C4AA',
          700: '#20A88F',
          800: '#178C75',
          900: '#0E705B',
        },
        // Neutral colors for text and backgrounds
        neutral: {
          50: '#F4F4F4', // Background Light - Beige White
          100: '#E0E0E0',
          200: '#CCCCCC',
          300: '#B8B8B8',
          400: '#A3A3A3',
          500: '#888888', // Text Light - Light Gray
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333', // Text Dark - Charcoal Black
          900: '#1A1A1A',
          950: '#0D0D0D',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'Georgia', 'serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      borderRadius: {
        'button': '0.5rem',
        'card': '1rem',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        'gradient-size': '200% 200%',
      },
    },
  },
  plugins: [],
};
