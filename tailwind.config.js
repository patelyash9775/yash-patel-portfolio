/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0f172a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.1)',
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(cyan|blue|purple|emerald)-(400|500|600)/,
    },
    {
      pattern: /text-(cyan|blue|purple|emerald)-(400|500|600)/,
    },
    {
      pattern: /border-(cyan|blue|purple|emerald)-(400|500|600)/,
    },
    {
      pattern: /from-(cyan|blue|purple|emerald)-(400|500|600)/,
    },
    {
      pattern: /to-(cyan|blue|purple|emerald)-(400|500|600)/,
    },
  ],
}
