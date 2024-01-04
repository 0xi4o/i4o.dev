import { Link } from '@remix-run/react'
import { SocialLinks } from '~/components'
import PageTitle from '~/components/PageTitle'

export default function About() {
	return (
		<main className='flex flex-col gap-20'>
			<article className='flex flex-col gap-8'>
				<PageTitle>About</PageTitle>
				<section className='prose prose-invert flex flex-col prose-p:my-4 first:prose-p:mt-0'>
					<p>
						Hi! I'm a software engineer residing in Bangalore,
						India.
					</p>
					<p>
						In my free time, I work on{' '}
						<Link
							className='cursor-pointer underline decoration-dashed underline-offset-8 transition-colors duration-200 hover:text-brand'
							to='/projects'
						>
							side projects
						</Link>
						.
					</p>
					<p>
						My main programming language is JavaScript/TypeScript
						but I've been learning Rust as well. I've also dabbled
						in Go, Lua, and Python. I write articles regularly about
						the things I'm learning and the projects I'm working on.
					</p>
					<p>
						When not working on side projects, I regularly read and
						occasionally play video games. Check out what I'm
						reading and playing{' '}
						<Link
							className='cursor-pointer underline decoration-dashed underline-offset-8 transition-colors duration-200 hover:text-brand'
							to='/now'
						>
							right now
						</Link>
						. You can also check out the{' '}
						<Link
							className='cursor-pointer underline decoration-dashed underline-offset-8 transition-colors duration-200 hover:text-brand'
							to='/uses'
						>
							tools and devices
						</Link>{' '}
						I use to get my work done.
					</p>
					<p>
						Since you're here, I'd appreciate it if you checked out
						some of my{' '}
						<Link
							className='cursor-pointer underline decoration-dashed underline-offset-8 transition-colors duration-200 hover:text-brand'
							to='/blog'
						>
							blog posts
						</Link>
						. And if you happen to like what you read, let me know
						:)
					</p>
				</section>
				<SocialLinks />
			</article>
		</main>
	)
}
