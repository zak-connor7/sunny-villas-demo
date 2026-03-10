import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#0a0a0a',
        surface: '#111111',
        raised:  '#161616',
        border:  '#1f1f1f',
        orange:  '#f97316',
        success: '#22c55e',
        warning: '#f59e0b',
        danger:  '#ef4444',
        muted:   '#71717a',
        subtle:  '#3f3f46',
      },
      fontFamily: {
        display: ['Impact', 'Arial Black', 'sans-serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['"Courier New"', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
