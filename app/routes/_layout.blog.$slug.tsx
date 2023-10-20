import { Fragment, useEffect, useState } from 'react'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { run } from '@mdx-js/mdx'
import { MDXProvider } from '@mdx-js/react'
import * as runtime from 'react/jsx-runtime'
import { getMdxFile } from '~/utils/mdx.server'
import { format } from 'date-fns'
import title from 'title'
import { SITE_URL } from '~/data/site'

export async function loader({ params }: LoaderFunctionArgs) {
	const { frontmatter, code } = await getMdxFile({
		slug: params.slug as string,
	})
	return json({ frontmatter, code })
}

function PostContent() {
	const data = useLoaderData<typeof loader>()
	const { code } = data
	const [mdxModule, setMdxModule] = useState()
	// @ts-ignore
	const Content = mdxModule ? mdxModule?.default : Fragment

	useEffect(() => {
		;(async () => {
			setMdxModule(await run(code, runtime))
		})()
	}, [code])

	return (
		<MDXProvider>
			<Content />
		</MDXProvider>
	)
}

export default function BlogPost() {
	const data = useLoaderData<typeof loader>()
	const { frontmatter: fm } = data
	const frontmatter = JSON.parse(JSON.stringify(fm))
	const permalink = `${SITE_URL}/blog/${frontmatter.slug}`
	const tweetMessage = `I just read this awesome post! Check it out: 
	
${frontmatter.title} 👇`

	return (
		<main className='flex w-full flex-col gap-12'>
			<Link
				to='/blog'
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
					<div className='flex items-center gap-2'>
						<span className='text-xs font-semibold uppercase'>
							{format(new Date(frontmatter.date_published), 'PP')}
						</span>
						<span>·</span>
						<span className='text-xs font-semibold uppercase'>
							{frontmatter.readingTime}
						</span>
					</div>
					<h1 className='mt-4 font-serif text-3xl text-neutral-100'>
						{title(frontmatter.title)}
					</h1>
				</header>
				<article className='prose prose-lg prose-invert max-w-none prose-blockquote:rounded-md prose-blockquote:border-none prose-blockquote:bg-brand-500/10 prose-blockquote:p-4 prose-blockquote:font-normal'>
					<PostContent />
				</article>
				{/*<div className='mt-2 flex flex-col items-start gap-2'>*/}
				{/*	<span className='text-sm font-normal'>*/}
				{/*		If you liked this post, consider subscribing to my*/}
				{/*		newsletter:*/}
				{/*	</span>*/}
				{/*	<SubscribeForm />*/}
				{/*</div>*/}
				<div className='mt-4 flex items-center gap-2'>
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
				</div>
			</div>
		</main>
	)
}
