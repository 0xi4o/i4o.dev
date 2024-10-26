import { json, type LoaderFunctionArgs } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import PageTitle from '~/components/PageTitle'

import PostCard from '~/components/PostCard'
import { groupPostsByYear } from '~/utils/helpers.server'
import type { Env } from '../../worker-configuration'

export async function loader({ context }: LoaderFunctionArgs) {
	const env = context.cloudflare.env as Env
	const response = await fetch(`${env.CMS_URL}/api/posts.json`)
	const data = await response.json()
	// @ts-ignore
	const publishedPosts = data?.posts.filter((post) => !post.entry.draft)
	const sortedPublishedPosts = publishedPosts.sort(
		// @ts-ignore
		(a, b) =>
			// @ts-ignore
			new Date(b.entry.date_published).getTime() -
			// @ts-ignore
			new Date(a.entry.date_published).getTime(),
	)
	const postsGroupedByYear = groupPostsByYear(sortedPublishedPosts)
	return json({ posts: postsGroupedByYear })
}

export default function Blog() {
	const data = useLoaderData<typeof loader>()
	const { posts: postsGroupedByYear } = data
	const currentYear = new Date().getFullYear()
	const sortedYears = Object.keys(postsGroupedByYear).sort(
		(a, b) => Number.parseInt(b, 10) - Number.parseInt(a, 10),
	)

	return (
		<main className='flex flex-col gap-16'>
			<article className='flex flex-col gap-4'>
				<PageTitle>Blog</PageTitle>
				<p className='prose prose-invert max-w-[60ch] leading-loose'>
					I usually write about software engineering, indie-hacking,
					and personal growth. Blogging, for me, is a way to keep
					track of stuff — learning, projects, thoughts, etc. If you
					find something useful here, do let me know on{' '}
					<a
						className='cursor-pointer underline decoration-dashed underline-offset-8 transition-colors duration-200 hover:text-brand'
						href='https://x.com/0xi4o'
						target='_blank'
						rel='noreferrer'
					>
						X
					</a>
					.
				</p>
			</article>
			<article className='flex flex-col gap-4'>
				<section className='flex flex-col gap-4'>
					{sortedYears.map((year) => (
						<div
							className='mb-4 flex flex-col items-start gap-8'
							key={`year${year}`}
						>
							{currentYear !== Number(year) ? (
								<h2 className='m-0 text-2xl font-mono'>
									{year}
								</h2>
							) : null}
							<div className='mb-8 flex w-full flex-col items-start gap-6'>
								{
									// @ts-ignore
									postsGroupedByYear[year].map(
										// @ts-ignore
										(post, index) => (
											<PostCard
												key={post.slug}
												title={post.entry.title}
												description={post.entry.excerpt}
												publishedAt={
													post.entry.date_published
												}
												slug={`/blog/${post.slug}`}
												tags={post.entry.tags}
											/>
										),
									)
								}
							</div>
						</div>
					))}
				</section>
			</article>
		</main>
	)
}
