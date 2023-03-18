import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { getBlogMdxItems } from '~/utils/mdx.server'
import { format } from 'date-fns'
import type { Post } from '~/utils/types'

export async function loader() {
	const posts = await getBlogMdxItems({ grouped: 'year' })
	return json({ posts })
}

export default function Blog() {
	const data = useLoaderData<typeof loader>()
	const { posts: postsGroupedByYear } = data
	const currentYear = new Date().getFullYear()
	const sortedYears = Object.keys(postsGroupedByYear).sort(
		(a, b) => parseInt(b, 10) - parseInt(a, 10)
	)

	return (
		<>
			<h1 className='mb-8 font-serif'>Blog</h1>
			{sortedYears.map((year) => (
				<div
					className='mb-4 flex flex-col items-start gap-8'
					key={`year${year}`}
				>
					{currentYear !== Number(year) ? (
						<h2 className='m-0 mt-8'>{year}</h2>
					) : null}
					<div className='flex flex-col items-start gap-6'>
						{postsGroupedByYear[year].map(
							(post: Post, index: number) => (
								<div
									className='flex flex-wrap items-end justify-start gap-2 text-left'
									key={`post${index}`}
								>
									<Link
										className='no-underline'
										to={`/blog/${post.slug}`}
									>
										<h3 className='m-0 font-serif text-base font-medium leading-6'>
											{post.title}
										</h3>
									</Link>
									<span className='text-sm italic leading-6'>
										{format(new Date(post.date), 'MMM dd')}
									</span>
								</div>
							)
						)}
					</div>
				</div>
			))}
		</>
	)
}
