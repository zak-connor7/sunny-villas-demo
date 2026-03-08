import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fdfaf6',
        dark: '#1a1610',
        accent: '#c49a6c',
        'accent-dark': '#a07840',
        muted: '#9a8878',
        border: '#e5d9c8',
        surface: '#f0e8d8',
      },
      fontFamily: {
        display: ['Forum', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}

export default config
