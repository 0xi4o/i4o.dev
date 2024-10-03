import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import { format } from 'date-fns'
import PageTitle from '~/components/PageTitle'
import keystaticConfig from '../../keystatic.config'
import { createReader } from '@keystatic/core/reader'
import { DocumentRenderer } from '@keystatic/core/renderer'
import title from 'title'
import ReadingProgress from '~/components/ReadingProgress'

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
			<ReadingProgress />
			<main className='flex w-full flex-col gap-12'>
				<Link
					to='/book-notes'
					className='inline-flex items-center justify-start gap-2 font-medium no-underline'
				>
					<svg
						width='15'
						height='15'
						viewBox='0 0 15 15'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z'
							fill='currentColor'
							fillRule='evenodd'
							clipRule='evenodd'
						></path>
					</svg>
					Back
				</Link>
				<div className='post mx-auto flex w-full max-w-none flex-col gap-12'>
					<header role='presentation'>
						<div className='mb-4 flex items-center gap-2'>
							<span className='text-xs font-semibold uppercase'>
								{format(
									new Date(post.date_published as string),
									'PP',
								)}
							</span>
							{/* <span>·</span>
							<span className='text-xs font-semibold uppercase'>
								{`${post.readingTime.minutes} min read`}
							</span> */}
						</div>
						<PageTitle>
							{
								// @ts-ignore
								title(post.title)
							}
						</PageTitle>
					</header>
					<article className='prose prose-lg prose-invert max-w-none prose-blockquote:rounded-md prose-blockquote:border-none prose-blockquote:bg-brand/10 prose-blockquote:p-4 prose-blockquote:font-normal'>
						<DocumentRenderer
							// @ts-ignore
							document={post.content}
						/>
					</article>
					{/*<div className='mt-2 flex flex-col items-start gap-2'>*/}
					{/*	<span className='text-sm font-normal'>*/}
					{/*		If you liked this post, consider subscribing to my*/}
					{/*		newsletter:*/}
					{/*	</span>*/}
					{/*	<SubscribeForm />*/}
					{/*</div>*/}
					{/* <div className='mt-4 flex items-center gap-2'>
						<span className='text-sm font-semibold'>
							Share this on:
						</span>
						<a
							href={`https://twitter.com/intent/tweet?${new URLSearchParams(
								{
									url: permalink,
									text: tweetMessage,
								}
							)}`}
							className='inline-flex items-center justify-start gap-2 !text-sm !font-semibold !no-underline'
							target='_blank'
							rel='noreferrer noopener'
						>
							Twitter
						</a>
					</div> */}
				</div>
			</main>
		</>
	)
}
