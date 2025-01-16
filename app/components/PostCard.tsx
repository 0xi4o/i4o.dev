import { Link } from '@remix-run/react'
import { format } from 'date-fns'
// import { Fragment } from 'react/jsx-runtime'

type Props = {
	title: string
	publishedAt: Date
	description: string
	slug: string
	tags: string[]
}

export default function PostCard({ title, publishedAt, slug, tags }: Props) {
	return (
		<div className='flex w-full items-center justify-between gap-2'>
			<Link
				className='group max-w-[80%] flex flex-col justify-between gap-2 md:flex-row md:items-center md:justify-start'
				to={slug}
			>
				<p className='w-full text-neutral-100 font-mono uppercase group-hover:text-brand transition-colors duration-300'>
					{title}
				</p>
			</Link>
			<span className='flex flex-shrink-0 flex-row items-center gap-4 text-xs leading-6 italic'>
				{format(new Date(publishedAt), 'MMM dd, yyyy')}
			</span>
			{/* <div className='flex items-center gap-4'> */}
			{/* 	{tags.length > 0 && ( */}
			{/* 		<span className='flex items-center gap-1'> */}
			{/* 			{tags.map((tag) => ( */}
			{/* 				<Fragment key={tag}> */}
			{/* 					<span className='text-xs font-mono text-neutral-100'> */}
			{/* 						{`#${tag}`} */}
			{/* 					</span> */}
			{/* 					{tags.indexOf(tag) < tags.length - 1 && '·'} */}
			{/* 				</Fragment> */}
			{/* 			))} */}
			{/* 		</span> */}
			{/* 	)} */}
			{/* </div> */}
		</div>
	)
}
