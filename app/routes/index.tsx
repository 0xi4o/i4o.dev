import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { Bleed, Socials } from '~/components'
import { getBlogMdxItems } from '~/utils/mdx.server'

export async function loader() {
	const posts = await getBlogMdxItems({})
	return json({ posts })
}

export default function Index() {
	const data = useLoaderData<typeof loader>()

	return (
		<>
			<Bleed>
				<div>
					<h1 className='font-serif'>
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
			<div className='mt-32 -ml-44 grid w-[64rem] grid-cols-5 gap-4'>
				<div className='col-span-3'></div>
				<div className='col-span-2 flex flex-col gap-4'>
					<Socials />
				</div>
			</div>
		</>
	)
}
