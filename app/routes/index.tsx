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

	return (
		<>
			<Bleed>
				<div>
					<h1 className='font-serif text-3xl'>
						Fullstack Engineer. Blogger. Indiehacker.
					</h1>
					<p>
						Hey, I'm Ilango. I'm a software engineer based in
						Bangalore, India. I build open-source web apps mostly
						using TypeScript. I write about web development,
						indiehacking, learning and personal growth.
					</p>
				</div>
			</Bleed>
			<div className='mt-24 -ml-44 grid w-[64rem] grid-cols-5 gap-4'>
				<div className='col-span-3'>
					<div className='mb-4 flex flex-col items-start gap-8'>
						<h2 className='m-0'>Latest Posts</h2>
						<div className='flex flex-col items-start gap-6'>
							{posts.map((post: Post, index: number) => (
								<div
									className='flex items-end justify-start gap-2 text-left'
									key={`post${index}`}
								>
									<Link
										className='no-underline'
										to={`/blog/${post.slug}`}
									>
										<h3 className='m-0 font-serif text-base font-medium leading-6'>
											{post.title}
										</h3>
									</Link>
									<span className='text-sm italic leading-6'>
										{format(new Date(post.date), 'MMM dd')}
									</span>
								</div>
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
