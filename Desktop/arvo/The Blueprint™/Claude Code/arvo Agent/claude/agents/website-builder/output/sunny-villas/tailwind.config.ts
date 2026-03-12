import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#2D2E33',
        rust:    '#BA7D6E',
        cream:   '#F9F4EF',
        surface: '#FDFCFB',
        muted:   '#6C6D74',
        border:  '#E8E3DD',
        taupe:   '#A89582',
        subtle:  '#B4B5BA',
      },
      fontFamily: {
        display: ['var(--font-forum)', 'Georgia', 'serif'],
        sans:    ['var(--font-redhat)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '5px',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
