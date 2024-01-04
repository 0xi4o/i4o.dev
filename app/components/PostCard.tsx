import { format } from 'date-fns'
import { Link } from '@remix-run/react'

type Props = {
	title: string
	publishedAt: Date
	description: string
	slug: string
}

export default function PostCard({ title, publishedAt, slug }: Props) {
	return (
		<Link
			className='group flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:border-brand'
			to={`/blog/${slug}`}
		>
			<div className='flex max-w-[70%] flex-col justify-between gap-2 md:flex-row md:items-center md:justify-start'>
				<div className='flex max-w-full items-center'>
					<p className='truncate text-neutral-100'>{title}</p>
				</div>
				<span className='flex flex-shrink-0 flex-row items-center gap-4 text-xs italic leading-6'>
					{format(new Date(publishedAt), 'MMM dd')}
				</span>
			</div>

			<svg
				viewBox='0 0 18 18'
				fill='none'
				className='h-4 w-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand'
			>
				<path
					d='M5.25 12.75L12.75 5.25'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M5.25 5.25H12.75V12.75'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</Link>
	)
}
