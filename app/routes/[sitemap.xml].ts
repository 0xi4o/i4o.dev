import { ORIGIN, staticPages } from '~/utils/constants'
import { toXmlSitemap } from '~/utils/helpers.server'
import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import type { Env } from '../../worker-configuration'

// code from: https://ericnish.io/blog/sitemap-xml-with-remix
export const loader = async ({ context }: LoaderFunctionArgs) => {
	try {
		const env = context.cloudflare.env as Env
		const response = await fetch(`${env.CMS_URL}/api/posts.json`)
		const data = await response.json()
		// @ts-ignore
		const publishedPosts = data?.posts.filter((post) => !post.entry.draft)
		const sitemap = toXmlSitemap([
			...staticPages
				.filter(({ to }) => to !== '/')
				.map(({ to }) => `${ORIGIN}${to}`),
			...publishedPosts.map(
				({ slug }: { slug: string }) => `${ORIGIN}/blog/${slug}`,
			),
		])

		return new Response(sitemap, {
			status: 200,
			headers: {
				'Content-Type': 'application/xml',
				'X-Content-Type-Options': 'nosniff',
				'Cache-Control': 'public, max-age=3600',
			},
		})
	} catch (e) {
		throw new Response('Internal Server Error', { status: 500 })
	}
}
