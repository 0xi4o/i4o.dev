import { Fragment, useEffect, useState } from 'react'
import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { run } from '@mdx-js/mdx'
import { MDXProvider } from '@mdx-js/react'
import * as runtime from 'react/jsx-runtime'
import { getMdxFile } from '~/utils/mdx.server'
import { format } from 'date-fns'
import { BOOK_NOTES_DIR } from '~/utils/constants'
import PageTitle from '~/components/PageTitle'

export async function loader({ params }: LoaderFunctionArgs) {
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
	// @ts-ignore
	const Content = mdxModule ? mdxModule?.default : Fragment

	useEffect(() => {
		// eslint-disable-next-line
		;(async () => {
			// @ts-ignore
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
				{format(
					new Date(
						// @ts-ignore
						frontmatter.data.date_published
					),
					'PP'
				)}
			</span>
			<PageTitle>
				{
					// @ts-ignore
					frontmatter?.data?.title
				}
			</PageTitle>
			<p className='mt-0 text-base italic'>{
				// @ts-ignore
				`by ${frontmatter.data.author}`
			}</p>
			<PostContent />
		</>
	)
}
