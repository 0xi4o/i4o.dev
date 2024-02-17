import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { format } from 'date-fns'
import PageTitle from '~/components/PageTitle'
import keystaticConfig from '../../keystatic.config'
import { createReader } from '@keystatic/core/reader'

export async function loader() {
	const reader = createReader(process.cwd(), keystaticConfig)
	const posts = await reader.collections.bookNotes.all()
	return json({ posts })
}

export default function Blog() {
	const { posts } = useLoaderData<typeof loader>()

	return (
		<>
			<PageTitle>Book Notes</PageTitle>
			<div className='mt-8 flex flex-col items-start gap-6'>
				{
					// @ts-ignore
					posts.map((post, index) => (
						<div
							className='flex flex-wrap items-end justify-start gap-2 text-left'
							key={`post${index}`}
						>
							<Link
								className='no-underline'
								to={`/book-notes/${post.slug}`}
							>
								<h3 className='m-0 font-serif text-base font-medium leading-6'>
									{post.entry.title.name}
								</h3>
							</Link>
							<span className='text-sm italic leading-6'>
								{format(
									new Date(
										post.entry.date_published as string
									),
									'MMM dd'
								)}
							</span>
						</div>
					))
				}
			</div>
		</>
	)
}
