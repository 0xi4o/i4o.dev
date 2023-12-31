import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#2CB67D',
					50: '#AEEBD2',
					100: '#9EE7C9',
					200: '#7DE0B7',
					300: '#5CD8A5',
					400: '#3BD092',
					500: '#2CB67D',
					600: '#21895E',
					700: '#165C3F',
					800: '#0B2E20',
					900: '#000101',
				},
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [typography],
} satisfies Config
