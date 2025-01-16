import { json, type LoaderFunctionArgs } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import { Hero } from '~/components'
import PostCard from '~/components/PostCard'
import { type Project, projects } from '~/data/projects'
import type { Env } from '../../worker-configuration'
import ProjectCard from '../components/ProjectCard'
import { ChevronRightIcon } from 'lucide-react'
import Employer from '~/components/Employer'

export async function loader({ context }: LoaderFunctionArgs) {
	const env = context.cloudflare.env as Env
	const response = await fetch(`${env.CMS_URL}/api/posts`)
	const data = await response.json()
	// @ts-ignore
	const publishedPosts = data?.posts.filter((post) => !post.entry.draft)
	const sortedPublishedPosts = publishedPosts.sort(
		// @ts-ignore
		(a, b) =>
			// @ts-ignore
			new Date(b.entry.date_published).valueOf() -
			// @ts-ignore
			new Date(a.entry.date_published).valueOf(),
	)
	return json({ posts: sortedPublishedPosts })
}

// biome-ignore lint: it's fine
function LatestPosts({ posts }: { posts: any[] }) {
	return (
		<article className='flex flex-col gap-8'>
			<header className='flex w-full items-center flex-row justify-between gap-2'>
				<h2 className='text-2xl text-neutral-100 font-mono uppercase'>
					Latest Posts
				</h2>
				<Link
					className='flex items-center gap-1 cursor-pointer font-mono uppercase text-sm transition-colors duration-200 hover:text-brand'
					to='/blog'
				>
					View all
					<ChevronRightIcon className='h-4 w-4' />
				</Link>
			</header>
			{posts.length === 0 && <p>Soon, stay connected 👀...</p>}

			<section className='flex flex-col gap-4'>
				{posts.length !== 0 &&
					posts
						.slice(0, 3)
						.map((post) => (
							<PostCard
								key={post.slug}
								publishedAt={post.entry.date_published}
								title={post.entry.title}
								description={post.entry.excerpt}
								slug={`/blog/${post.slug}`}
								tags={post.entry.tags}
							/>
						))}
			</section>
		</article>
	)
}

function FeaturedProjects({
	projects,
}: {
	projects: Project[]
}) {
	return (
		<article className='flex flex-col gap-8'>
			<header className='flex w-full flex-row justify-between gap-2'>
				<h2 className='text-2xl text-neutral-100 font-mono uppercase'>
					Featured Projects
				</h2>
				<Link
					className='flex items-center gap-1 cursor-pointer font-mono uppercase text-sm transition-colors duration-200 hover:text-brand'
					to='/projects'
				>
					View all
					<ChevronRightIcon className='h-4 w-4' />
				</Link>
			</header>
			{projects.length === 0 && <p>Oops, I must work^^^^^</p>}

			<section className='flex flex-col gap-4'>
				{projects.length !== 0 &&
					projects
						.filter((project) => project.isFeatured)
						.map((project, index) => (
							<ProjectCard
								// biome-ignore lint: it's fine
								key={`project-${index}`}
								{...project}
							/>
						))}
			</section>
		</article>
	)
}

function Work() {
	return (
		<article className='flex flex-col gap-8'>
			<header className='flex w-full flex-row justify-between gap-2'>
				<h2 className='text-2xl text-neutral-100 font-mono uppercase'>
					Work
				</h2>
			</header>
			<p className='prose prose-invert max-w-none leading-loose font-sans'>
				I'm a Software Engineer at <Employer /> building an open-source
				low-code LLM orchestration platform. I write about web
				development, side projects, learning and personal growth.
			</p>
		</article>
	)
}

export default function Index() {
	const { posts } = useLoaderData<typeof loader>()

	return (
		<main className='flex flex-col gap-16'>
			<Hero />

			<LatestPosts posts={posts} />

			<FeaturedProjects projects={projects} />

			<Work />
		</main>
	)
}
