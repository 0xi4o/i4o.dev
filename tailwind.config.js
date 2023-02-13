/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx,md,mdx}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
