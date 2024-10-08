import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx,md,mdx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				brand: {
					DEFAULT: 'hsl(var(--brand))',
					states: 'hsl(var(--brand-states))',
					foreground: 'hsl(var(--brand-foreground))',
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					subtle: 'hsl(var(--foreground-subtle))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
				serif: ['var(--font-serif)', ...fontFamily.serif],
				code: ['var(--font-code)', ...fontFamily.mono],
				mono: ['var(--font-mono)', ...fontFamily.mono],
			},
			boxShadow: {
				glow: '0 0 1rem -0.35rem var(--brand)',
			},
		},
	},
	plugins: [typography],
} as Config
