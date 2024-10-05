import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import { format } from 'date-fns'
import title from 'title'
import PageTitle from '~/components/PageTitle'
import ReadingProgress from '~/components/ReadingProgress'
import { SITE_URL } from '~/data/site'

import { DocumentRenderer } from '@keystatic/core/renderer'
import { ChevronLeftIcon } from 'lucide-react'
import { TITLE_SPECIAL_CASES } from '~/utils/constants'
import type { Env } from '../../worker-configuration'

export async function loader({ context, params }: LoaderFunctionArgs) {
	const env = context.cloudflare.env as Env
	const slug = params.slug as string
	const response = await fetch(`${env.CMS_URL}/api/posts.${slug}.json`)
	const data = await response.json()

	// @ts-ignore
	if (!data?.post) throw json('Not Found', { status: 404 })

	// @ts-ignore
	return json({ post: data.post, slug })
}

export default function BlogPost() {
	const { post, slug } = useLoaderData<typeof loader>()
	const permalink = `${SITE_URL}/blog/${slug}`
	const tweetMessage = `I just read this awesome post! Check it out: 
	
${post.title} 👇`

	return (
		<>
			<ReadingProgress />
			<main className='flex w-full flex-col gap-12'>
				<Link
					to='/blog'
					className='inline-flex items-center justify-start gap-2 font-medium no-underline'
				>
					<ChevronLeftIcon className='h-4 w-4' />
					Back
				</Link>
				<div className='post mx-auto flex w-full max-w-none flex-col gap-12'>
					<header>
						<div className='mb-4 flex items-center gap-2'>
							<span className='text-xs font-semibold uppercase font-mono'>
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
								title(post.title, {
									special: TITLE_SPECIAL_CASES,
								})
							}
						</PageTitle>
					</header>
					<article className='prose prose-lg prose-invert max-w-none prose-blockquote:rounded-md prose-blockquote:border-none prose-blockquote:bg-brand/10 prose-blockquote:p-4 prose-blockquote:font-normal prose-h2:font-mono prose-h3:font-mono'>
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
					<div className='mt-4 flex items-center gap-2'>
						<span className='text-sm font-semibold font-mono'>
							Share this on:
						</span>
						<a
							href={`https://twitter.com/intent/tweet?${new URLSearchParams(
								{
									url: permalink,
									text: tweetMessage,
								},
							)}`}
							className='inline-flex items-center justify-start gap-2 !text-sm !font-semibold !no-underline !font-mono'
							target='_blank'
							rel='noreferrer noopener'
						>
							X
						</a>
					</div>
				</div>
			</main>
		</>
	)
}
