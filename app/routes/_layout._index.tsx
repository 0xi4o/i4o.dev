import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { FeaturedProjects, Hero } from '~/components'
import { projects } from '~/data/projects'
import keystaticConfig from '../../keystatic.config'
import { createReader } from '@keystatic/core/reader'
import PostCard from '~/components/PostCard'

export async function loader() {
	const reader = createReader(process.cwd(), keystaticConfig)
	// TODO: check if there are other ways to filter instead of fetching everything and then slicing.
	const posts = await reader.collections.posts.all()
	return json({ posts: posts.slice(0, 3) })
}

function LatestPosts({ posts }) {
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
