import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { getBlogMdxItems } from '~/utils/mdx.server'
import { format } from 'date-fns'
import type { Post } from '~/utils/types'
import { BOOK_NOTES_DIR } from '~/utils/constants'
import PageTitle from '~/components/PageTitle'

export async function loader() {
	const posts = await getBlogMdxItems({ dir: BOOK_NOTES_DIR })
	return json({ posts })
}

export default function Blog() {
	const data = useLoaderData<typeof loader>()
	const { posts } = data

	return (
		<>
			<PageTitle>Book Notes</PageTitle>
			<div className='mt-8 flex flex-col items-start gap-6'>
				{
					// @ts-ignore
					posts.map((post: Post, index: number) => (
						<div
							className='flex flex-wrap items-end justify-start gap-2 text-left'
							key={`post${index}`}
						>
							<Link
								className='no-underline'
								to={`/book-notes/${post.slug}`}
							>
								<h3 className='m-0 font-serif text-base font-medium leading-6'>
									{post.title}
								</h3>
							</Link>
							<span className='text-sm italic leading-6'>
								{format(new Date(post.date), 'MMM dd')}
							</span>
						</div>
					))
				}
			</div>
		</>
	)
}
