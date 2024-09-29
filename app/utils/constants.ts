import type { TailwindColor } from '~/utils/types'

export const BLOG_POSTS_DIR = 'app/content/posts'
export const BOOK_NOTES_DIR = 'app/content/book-notes'

export const ORIGIN = 'https://i4o.dev'

// export a list of all static pages
export const staticPages = [
	{ to: '/', text: 'Home' },
	{ to: '/blog', text: 'Blog' },
	{ to: '/projects', text: 'Projects' },
	{ to: '/about', text: 'About' },
	{ to: '/reading', text: 'Reading - Books, Comics and Graphic Novels' },
	{ to: '/now', text: "Now - What I'm currently doing" },
	{ to: '/uses', text: 'Uses - Devices and Tools I use everyday' },
]

export const MAP_COLOR_VARIANT_TO_BG: Record<TailwindColor, string> = {
	brand: 'bg-brand-500',
	orange: 'bg-orange-500',
	violet: 'bg-violet-500',
	red: 'bg-red-500',
	amber: 'bg-amber-500',
	yellow: 'bg-yellow-500',
	lime: 'bg-lime-500',
	green: 'bg-green-500',
	emerald: 'bg-emerald-500',
	teal: 'bg-violet-500',
	cyan: 'bg-cyan-500',
	blue: 'bg-blue-500',
	indigo: 'bg-indigo-500',
	purple: 'bg-purple-500',
	fushia: 'bg-fushia-500',
	pink: 'bg-pink-500',
	rose: 'bg-rose-500',
}

export const TITLE_SPECIAL_CASES = ['OpenAPI']
