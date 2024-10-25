import { Link } from '@remix-run/react'
import { format } from 'date-fns'

type Props = {
	title: string
	publishedAt: Date
	description: string
	slug: string
	tags: string[]
}

export default function PostCard({
	title,
	description,
	publishedAt,
	slug,
	tags,
}: Props) {
	return (
		<div className='group flex flex-col w-full items-start justify-center gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:border-brand'>
			<Link
				className='max-w-[80%] flex flex-col justify-between gap-2 md:flex-row md:items-center md:justify-start'
				to={`/blog/${slug}`}
			>
				<p className='text-lg text-neutral-100 font-mono group-hover:text-brand transition-colors duration-300'>
					{title}
				</p>
			</Link>
			<div className='flex items-center gap-4'>
				<span className='flex flex-shrink-0 flex-row items-center gap-4 text-xs leading-6'>
					{format(new Date(publishedAt), 'MMM dd, yyyy')}
				</span>
				{tags.length > 0 && (
					<span className='flex items-center gap-2'>
						{tags.map((tag) => (
							<>
								<span
									key={tag}
									className='text-xs font-mono text-neutral-100'
								>
									{`#${tag}`}
								</span>
								{tags.indexOf(tag) < tags.length - 1 && '·'}
							</>
						))}
					</span>
				)}
			</div>
			{description && (
				<p className='prose prose-invert max-w-[60ch] leading-loose mt-4'>
					{description}
				</p>
			)}
		</div>
	)
}
