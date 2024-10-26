import { json, type LoaderFunctionArgs } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import type { Env } from 'worker-configuration'
import PageTitle from '~/components/PageTitle'
import PostCard from '~/components/PostCard'

export async function loader({ context }: LoaderFunctionArgs) {
	const env = context.cloudflare.env as Env
	const response = await fetch(`${env.CMS_URL}/api/series`)
	const data = await response.json()
	// @ts-ignore
	return json({ series: data.series })
}

export default function Series() {
	const data = useLoaderData<typeof loader>()
	const { series } = data

	return (
		<main className='flex flex-col gap-16'>
			<article className='flex flex-col gap-4'>
				<PageTitle>Series</PageTitle>
				<p className='prose prose-invert max-w-[60ch] leading-loose'>
					Series are a collection of articles that cover a specific
					topic that are too long to be covered in a single article.
					I'll be writing about building non-trivial projects,
					explorations of interesting topics, and more.
				</p>
			</article>
			<article className='flex flex-col gap-4'>
				<section className='flex flex-col gap-4'>
					{series.map(
						// @ts-ignore
						(item) => (
							<PostCard
								key={item.slug}
								title={item.entry.title}
								description={item.entry.excerpt}
								publishedAt={item.entry.date_published}
								slug={`/series/${item.slug}`}
								tags={item.entry.tags}
							/>
						),
					)}
				</section>
			</article>
		</main>
	)
}
