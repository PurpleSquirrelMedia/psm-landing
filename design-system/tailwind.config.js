// Purple Squirrel - Tailwind Config
// Extends Tailwind with PS design tokens

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.html",
    "./*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand
        'ps-purple': '#9945FF',
        'ps-green': '#14F195',
        'ps-pink': '#FF6B9D',

        // Purple scale
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#9945FF',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },

        // Solana green
        solana: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#14F195',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },

      fontFamily: {
        sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)',
        'gradient-purple': 'linear-gradient(135deg, #9945FF 0%, #FF6B9D 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(153, 69, 255, 0.15) 0%, transparent 70%)',
      },

      boxShadow: {
        'glow': '0 0 40px rgba(153, 69, 255, 0.3)',
        'glow-lg': '0 0 60px rgba(153, 69, 255, 0.4)',
        'glow-green': '0 0 40px rgba(20, 241, 149, 0.3)',
      },

      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },

      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
