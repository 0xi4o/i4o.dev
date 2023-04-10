import { Fragment, useEffect, useState } from 'react'
import { json, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { run } from '@mdx-js/mdx'
import { MDXProvider } from '@mdx-js/react'
import * as runtime from 'react/jsx-runtime'
import { getMdxFile } from '~/utils/mdx.server'
import { format } from 'date-fns'
import { BOOK_NOTES_DIR } from '~/utils/constants'

export async function loader({ params }: LoaderArgs) {
	const { frontmatter, code } = await getMdxFile({
		dir: BOOK_NOTES_DIR,
		slug: params.slug as string,
	})
	return json({ frontmatter, code })
}

function PostContent() {
	const data = useLoaderData<typeof loader>()
	const { code } = data
	const [mdxModule, setMdxModule] = useState()
	const Content = mdxModule ? mdxModule?.default : Fragment

	useEffect(() => {
		;(async () => {
			setMdxModule(await run(code, runtime))
		})()
	}, [code])

	return (
		<MDXProvider>
			<Content />
		</MDXProvider>
	)
}

export default function BlogPost() {
	const data = useLoaderData<typeof loader>()
	const { frontmatter } = data

	return (
		<>
			<span className='text-xs font-semibold uppercase'>
				{format(new Date(frontmatter.data.date_published), 'PP')}
			</span>
			<h1 className='mt-4 mb-2'>{frontmatter.data.title}</h1>
			<p className='mt-0 text-base italic'>{`by ${frontmatter.data.author}`}</p>
			<PostContent />
		</>
	)
}
