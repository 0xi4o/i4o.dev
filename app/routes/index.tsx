import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { format } from 'date-fns'
import { Bleed, Socials } from '~/components'
import { getBlogMdxItems } from '~/utils/mdx.server'
import type { Post } from '~/utils/types'

export async function loader() {
	const posts = await getBlogMdxItems({ filter: 'latest' })
	return json({ posts })
}

export default function Index() {
	const data = useLoaderData<typeof loader>()
	const { posts } = data
	const { latest } = posts

	const experience = [
		{
			title: 'SSE',
			company: 'Creable',
			href: 'https://creable.com/',
		},
		{
			title: 'SSE',
			company: 'Rocketium',
			href: 'https://rocketium.com/',
		},
		{
			title: 'Frontend',
			company: 'Infratab',
			href: 'https://infratab.com/',
		},
	]

	const openSource = [
		{
			label: 'Rescribe',
			description:
				'Simple, feature-rich open-source site generator framework for Remix.',
			href: 'https://rescribe.site/',
		},
		{
			label: 'Catalyst UI',
			description:
				'Catalyst UI is a component library built on top of Radix UI Primitives and styled with Tailwind CSS.',
			href: 'https://catalyst-ui.com/',
		},
	]

	const projects = [
		{
			label: 'Aurelius',
			description:
				'Minimal, open-source writing app. Eliminate distractions when writing, track your daily writing goal, and more.',
			href: 'https://aurelius.ink/',
		},
		{
			label: 'Synthwave Stack',
			description:
				'Custom Remix Stack for quickly shipping web apps with auth, database, UI components, and more.',
			href: 'https://github.com/i4o-oss/synthwave-stack/',
		},
		{
			label: 'DotConfig',
			description:
				'A Webpack configuration wizard I built to make the initial setup for new web application projects easier.',
			href: 'https://dotconfig.netlify.app/',
		},
	]

	const writing = [
		{
			label: 'Blog',
			href: '/blog',
		},
		{
			label: 'Tweets',
			href: 'https://twitter.com/i4o_dev',
		},
		{
			label: 'Substack',
			href: 'https://ilango.substack.com/',
		},
	]

	return (
		<>
			<Bleed>
				<div>
					<h1 className='font-serif text-3xl'>
						Fullstack Engineer. Maker. Blogger.
					</h1>
					<p>
						Hey, I'm Ilango. I'm a software engineer based in
						Bangalore, India. I build open-source web apps mostly
						using TypeScript. I write about web development,
						indiehacking, learning and personal growth.
					</p>
				</div>
			</Bleed>
			<div className='mt-16 -ml-44 grid w-[64rem] grid-cols-5 gap-16'>
				<div className='col-span-3 flex flex-col gap-16'>
					<div className='flex flex-col items-start gap-8'>
						<h2 className='m-0'>Latest Posts</h2>
						<div className='flex flex-col items-start gap-8'>
							{latest.map((post: Post, index: number) => (
								<Link
									className='no-underline'
									to={`/blog/${post.slug}`}
									key={`latest${index}`}
								>
									<div className='group flex flex-col gap-2'>
										<div
											className='flex items-end justify-start gap-2 text-left'
											key={`post${index}`}
										>
											<h3 className='m-0 font-serif text-base font-semibold leading-6 transition-colors duration-200 group-hover:text-brand-500'>
												{post.title}
											</h3>
											<span className='text-sm italic leading-6 transition-colors duration-200 group-hover:text-gray-500 group-hover:dark:text-gray-400'>
												{format(
													new Date(post.date),
													'MMM dd'
												)}
											</span>
										</div>
										<p className='m-0 font-light transition-colors duration-200 group-hover:text-gray-500 group-hover:dark:text-gray-400'>
											{post.description}
										</p>
									</div>
								</Link>
							))}
						</div>
					</div>
					<div className='flex flex-col items-start gap-8'>
						<h2 className='m-0'>Work</h2>
						<div className='m-0 flex items-start gap-2'>
							<h3 className='my-0 font-serif text-base font-semibold leading-6 transition-colors duration-200 group-hover:text-brand-500'>
								Experience:
							</h3>
							<ul className='m-0 flex list-none gap-2 pl-0'>
								{experience.map((work, index) => (
									<li
										className='m-0 flex pl-0 leading-6'
										key={index}
									>
										{`${work.title} at`}
										&nbsp;
										<a
											href={work.href}
											target='_blank'
											rel='noopener noreferrer'
										>
											<h5>{work.company}</h5>
										</a>
										{index === experience.length - 1
											? ''
											: ','}
									</li>
								))}
							</ul>
						</div>
						<div className='m-0 flex items-start gap-2'>
							<h3 className='my-0 font-serif text-base font-semibold leading-6 transition-colors duration-200 group-hover:text-brand-500'>
								Projects:
							</h3>
							<ul className='m-0 flex list-none gap-2 pl-0'>
								{projects.map((project, index) => (
									<li
										className='m-0 flex pl-0 leading-6'
										key={index}
									>
										<a
											href={project.href}
											target='_blank'
											rel='noopener noreferrer'
										>
											<h5>{project.label}</h5>
										</a>
										{index === projects.length - 1
											? ''
											: ','}
									</li>
								))}
							</ul>
						</div>
						<div className='m-0 flex items-start gap-2'>
							<h3 className='my-0 font-serif text-base font-semibold leading-6 transition-colors duration-200 group-hover:text-brand-500'>
								Open Source:
							</h3>
							<ul className='m-0 flex list-none gap-2 pl-0'>
								{openSource.map((project, index) => (
									<li
										className='m-0 flex pl-0 leading-6'
										key={index}
									>
										<a
											href={project.href}
											target='_blank'
											rel='noopener noreferrer'
										>
											<h5>{project.label}</h5>
										</a>
										{index === openSource.length - 1
											? ''
											: ','}
									</li>
								))}
							</ul>
						</div>
						<div className='m-0 flex items-start gap-2'>
							<h3 className='my-0 font-serif text-base font-semibold leading-6 transition-colors duration-200 group-hover:text-brand-500'>
								Writing:
							</h3>
							<ul className='m-0 flex list-none gap-2 pl-0'>
								{writing.map((project, index) => (
									<li
										className='m-0 flex pl-0 leading-6'
										key={index}
									>
										<a
											href={project.href}
											target='_blank'
											rel='noopener noreferrer'
										>
											<h5>{project.label}</h5>
										</a>
										{index === writing.length - 1
											? ''
											: ','}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className='col-span-2 flex flex-col gap-4'>
					<Socials />
				</div>
			</div>
		</>
	)
}
