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
			className='group flex max-w-sm cursor-pointer flex-col gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:border-brand'
			to={`/blog/${slug}`}
		>
			<div className='flex w-full flex-col justify-between gap-2 md:flex-row md:items-center md:justify-between'>
				<div className='flex flex-grow items-center'>
					<p className='truncate text-neutral-100'>{title}</p>
				</div>
				<span className='flex flex-shrink-0 flex-row items-center gap-4 text-xs italic leading-6'>
					{format(new Date(publishedAt), 'MMM dd')}
				</span>
			</div>
		</Link>
	)
}
