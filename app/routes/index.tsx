import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { format } from 'date-fns'
import { Bleed, Socials } from '~/components'
import { getBlogMdxItems } from '~/utils/mdx.server'
import type { Post } from '~/utils/types'

export async function loader() {
	const posts = await getBlogMdxItems({ filter: 'latest,featured' })
	return json({ posts })
}

export default function Index() {
	const data = useLoaderData<typeof loader>()
	const { posts } = data
	const { latest, featured } = posts

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
									<div className='flex flex-col gap-2'>
										<div
											className='flex items-end justify-start gap-2 text-left'
											key={`post${index}`}
										>
											<h3 className='m-0 font-serif text-base font-semibold leading-6'>
												{post.title}
											</h3>
											<span className='text-sm italic leading-6'>
												{format(
													new Date(post.date),
													'MMM dd'
												)}
											</span>
										</div>
										<p className='m-0 font-light'>
											{post.description}
										</p>
									</div>
								</Link>
							))}
						</div>
					</div>
					<div className='flex flex-col items-start gap-8'>
						<h2 className='m-0'>Featured Posts</h2>
						<div className='flex flex-col items-start gap-8'>
							{featured.map((post: Post, index: number) => (
								<Link
									className='no-underline'
									to={`/blog/${post.slug}`}
									key={`featured{index}`}
								>
									<div className='flex flex-col gap-2'>
										<div
											className='flex items-end justify-start gap-2 text-left'
											key={`post${index}`}
										>
											<h3 className='m-0 font-serif text-base font-semibold leading-6'>
												{post.title}
											</h3>
											<span className='text-sm italic leading-6'>
												{format(
													new Date(post.date),
													'MMM dd'
												)}
											</span>
										</div>
										<p className='m-0 font-light'>
											{post.description}
										</p>
									</div>
								</Link>
							))}
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
