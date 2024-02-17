import type { LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { format } from 'date-fns'
import PageTitle from '~/components/PageTitle'
import keystaticConfig from '../../keystatic.config'
import { createReader } from '@keystatic/core/reader'
import { DocumentRenderer } from '@keystatic/core/renderer'
import title from 'title'

export async function loader({ params }: LoaderFunctionArgs) {
	const reader = createReader(process.cwd(), keystaticConfig)
	const slug = params.slug as string
	const post = await reader.collections.bookNotes.read(slug, {
		resolveLinkedFiles: true,
	})
	if (!post) throw json('Not Found', { status: 404 })
	return json({ post })
}

export default function BlogPost() {
	const { post } = useLoaderData<typeof loader>()

	return (
		<>
			<span className='text-xs font-semibold uppercase'>
				{format(
					new Date(
						// @ts-ignore
						post.date_published
					),
					'PP'
				)}
			</span>
			<PageTitle>
				{
					// @ts-ignore
					title(post.title)
				}
			</PageTitle>
			<p className='mt-0 text-base italic'>{`by ${post.author}`}</p>
			<DocumentRenderer document={post.content} />
		</>
	)
}
