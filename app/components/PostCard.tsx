import { Link } from '@remix-run/react'
import { format } from 'date-fns'
import { ExternalLinkIcon } from 'lucide-react'

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
			<div className='flex max-w-[80%] flex-col justify-between gap-2 md:flex-row md:items-center md:justify-start'>
				<div className='flex max-w-full items-center'>
					<p className='truncate text-neutral-100 font-mono'>
						{title}
					</p>
				</div>
				<span className='flex flex-shrink-0 flex-row items-center gap-4 text-xs italic leading-6'>
					{format(new Date(publishedAt), 'MMM dd')}
				</span>
			</div>

			<ExternalLinkIcon className='w-4 h-4' />
		</Link>
	)
}
