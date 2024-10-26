import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import PageTitle from '~/components/PageTitle'
import title from 'title'

import type { Env } from '../../worker-configuration'
import { TITLE_SPECIAL_CASES } from '~/utils/constants'
import { format } from 'date-fns'
import { ChevronLeftIcon } from 'lucide-react'
import React, { Fragment } from 'react'
import Markdoc from '@markdoc/markdoc'

export async function loader({ context, params }: LoaderFunctionArgs) {
	const env = context.cloudflare.env as Env
	const slug = params.slug as string
	const response = await fetch(`${env.CMS_URL}/api/series.${slug}.json`)
	const data = await response.json()

	// @ts-ignore
	if (data && !data.series) throw json('Not Found', { status: 404 })
	// @ts-ignore
	const series = data?.series

	// @ts-ignore
	return json({ series, slug })
}

export default function BlogPost() {
	const { series, slug } = useLoaderData<typeof loader>()
	// const permalink = `${SITE_URL}/blog/${slug}`;

	return (
		<main className='flex w-full flex-col gap-16'>
			<Link
				to='/series'
				className='inline-flex items-center justify-start gap-2 font-medium no-underline font-mono uppercase'
			>
				<ChevronLeftIcon className='h-4 w-4' />
				All Series
			</Link>
			<div className='post mx-auto flex w-full max-w-none flex-col gap-12'>
				<header>
					<div className='mb-4 flex items-center gap-4'>
						<span className='text-xs font-semibold uppercase font-mono'>
							{format(
								new Date(series.date_published as string),
								'PP',
							)}
						</span>
						{series.tags.length > 0 && (
							<span className='flex items-center gap-1'>
								{series.tags.map((tag: string) => (
									<Fragment key={tag}>
										<span className='text-xs font-mono text-neutral-100'>
											{`#${tag}`}
										</span>
										{series.tags.indexOf(tag) <
											series.tags.length - 1 && '·'}
									</Fragment>
								))}
							</span>
						)}
						{/* <span>·</span>
                            <span className='text-xs font-semibold uppercase'>
                                {`${post.readingTime.minutes} min read`}
                            </span> */}
					</div>
					<PageTitle>
						{
							// @ts-ignore
							title(series.title, {
								special: TITLE_SPECIAL_CASES,
							})
						}
					</PageTitle>
					<article className='prose prose-lg prose-invert max-w-none prose-blockquote:rounded-md prose-blockquote:border-none prose-blockquote:bg-brand/10 prose-blockquote:p-4 prose-blockquote:font-normal prose-h2:font-mono prose-h3:font-mono'>
						{Markdoc.renderers.react(series.excerpt, React)}
					</article>
				</header>
				<section className='flex flex-col gap-4 text-xl font-mono uppercase'>
					Coming soon...
				</section>
			</div>
		</main>
	)
}
