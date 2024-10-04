import { ArrowRightIcon, GithubIcon, TwitterIcon } from 'lucide-react'

const SOCIALS = [
	{
		href: 'https://twitter.com/i4o_dev',
		icon: <TwitterIcon className='h-4 w-4' />,
		label: 'Follow me on Twitter',
	},
	{
		href: 'https://github.com/i4o-dev',
		icon: <GithubIcon className='h-4 w-4' />,
		label: 'Check out my Github profile',
	},
	{
		href: 'https://poly.work/ilango',
		icon: (
			// biome-ignore lint: it's fine
			<svg
				className='h-4 w-4'
				role='img'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				fill='currentColor'
				stroke='currentColor'
			>
				<path d='M19.125 0H4.875A4.865 4.865 0 0 0 0 4.875v14.25C0 21.825 2.175 24 4.875 24h6.6c2.7 0 4.875-2.175 4.875-4.875V16.65h2.775c2.7 0 4.875-2.175 4.875-4.875v-6.9C24 2.175 21.825 0 19.125 0zM16.5 1.275h2.625a3.6 3.6 0 0 1 3.6 3.6v2.7H16.5v-6.3zM15.075 9v6.45H8.85V9h6.225zM8.85 1.2h6.225v6.375H8.85V1.2zM1.275 4.8a3.6 3.6 0 0 1 3.6-3.6H7.5v6.375H1.275V4.8zM7.5 9v6.45H1.2V9h6.3zm0 13.725H4.8a3.6 3.6 0 0 1-3.6-3.6V16.8h6.3v5.925zm7.575-3.525a3.6 3.6 0 0 1-3.6 3.6H8.85v-5.925h6.225V19.2zm7.65-7.35a3.6 3.6 0 0 1-3.6 3.6H16.5V9h6.225v2.85z' />
			</svg>
		),
		label: 'View my Polywork timeline',
	},
	{
		href: 'https://ilango.substack.com/',
		icon: (
			// biome-ignore lint: it's fine
			<svg
				className='h-4 w-4'
				role='img'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				fill='currentColor'
				stroke='currentColor'
			>
				<path d='M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z' />
			</svg>
		),
		label: 'Subscribe to my Substack',
	},
	{
		href: 'https://hachyderm.io/@i4o',
		icon: (
			// biome-ignore lint: it's fine
			<svg
				className='h-5 w-5'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				fill='currentColor'
				stroke='currentColor'
				viewBox='0 0 448 512'
			>
				<path d='M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z' />
			</svg>
		),
		label: 'Follow me on Mastodon',
	},
]

function Socials() {
	return (
		<div className='flex cursor-pointer items-center justify-center rounded-md border border-zinc-100 bg-transparent p-4 transition-all duration-300 dark:border-zinc-700/40'>
			<div className='flex h-full w-full flex-col items-start justify-start px-4 py-2'>
				<h3 className='m-0 mb-6 text-base'>Socials</h3>
				<div className='flex w-full flex-col items-start gap-6'>
					{SOCIALS.map((social, index) => (
						<a
							className='transition-color flex items-center justify-between gap-2 no-underline duration-200'
							href={social.href}
							// biome-ignore lint: it's fine
							key={index}
							rel='noreferrer noopener'
							target='_blank'
						>
							<span className='inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-500'>
								{social.icon}
								{social.label}
							</span>
							<ArrowRightIcon className='text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-500' />
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default Socials
