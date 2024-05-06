import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { FeaturedProjects, Hero } from '~/components'
import { projects } from '~/data/projects'
import keystaticConfig from '../../keystatic.config'
import { createGitHubReader } from '@keystatic/core/reader/github'
import PostCard from '~/components/PostCard'

export async function loader() {
	const reader = createGitHubReader(keystaticConfig, {
		repo: '0xi4o/i4o.dev',
		token: process.env.GITHUB_PAT,
	})
	// TODO: check if there are other ways to filter instead of fetching everything and then slicing.
	const posts = await reader.collections.posts.all()
	const publishedPosts = posts.filter((post) => !post.entry.draft)
	const sortedPublishedPosts = publishedPosts.sort(
		// @ts-ignore
		(a, b) =>
			// @ts-ignore
			new Date(b.entry.date_published).valueOf() -
			// @ts-ignore
			new Date(a.entry.date_published).valueOf()
	)
	return json({ posts: sortedPublishedPosts })
}

function LatestPosts({ posts }: { posts: any[] }) {
	return (
		<article className='flex flex-col gap-8'>
			<header className='flex w-full flex-row justify-between gap-2'>
				<h2 className='text-xl text-neutral-100'>Latest Posts</h2>
				<Link
					className='cursor-pointer underline decoration-dashed underline-offset-8 transition-colors duration-200 hover:text-brand'
					to='/blog'
				>
					See all posts
				</Link>
			</header>
			{posts.length === 0 && <p>Soon, stay connected 👀...</p>}

			<section className='grid grid-cols-1 gap-4 md:grid-cols-2'>
				{posts.length !== 0 &&
					posts
						.slice(0, 2)
						.map((post) => (
							<PostCard
								key={post.slug}
								publishedAt={post.entry.date_published}
								title={post.entry.title}
								description={post.entry.excerpt}
								slug={post.slug}
							/>
						))}
			</section>
		</article>
	)
}

export default function Index() {
	const { posts } = useLoaderData<typeof loader>()

	return (
		<main className='flex flex-col gap-20'>
			<Hero />

			<LatestPosts posts={posts} />

			<FeaturedProjects projects={projects} />
		</main>
	)
}
