import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { FeaturedProjects, Hero, LatestPosts } from '~/components'
import { getBlogMdxItems } from '~/utils/mdx.server'
import { projects } from '~/data/projects'

export async function loader() {
	const posts = await getBlogMdxItems({ filter: 'latest' })
	return json({ posts })
}

export default function Index() {
	const data = useLoaderData<typeof loader>()
	const { posts } = data
	// @ts-ignore
	const { latest } = posts

	return (
		<main className='flex flex-col gap-20'>
			<Hero />

			<LatestPosts posts={latest} />

			<FeaturedProjects projects={projects} />
		</main>
	)
}
