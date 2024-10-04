import { ORIGIN, staticPages } from '~/utils/constants'
import { toXmlSitemap } from '~/utils/helpers.server'

// code from: https://ericnish.io/blog/sitemap-xml-with-remix
export const loader = async () => {
	try {
		const response = await fetch(`${process.env.CMS_URL}/api/posts.json`)
		const data = await response.json()
		// @ts-ignore
		const publishedPosts = data?.posts.filter((post) => !post.entry.draft)
		const sitemap = toXmlSitemap([
			...staticPages
				.filter(({ to }) => to !== '/')
				.map(({ to }) => `${ORIGIN}${to}`),
			...publishedPosts.map(
				({ slug }: { slug: string }) => `${ORIGIN}/blog/${slug}`
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
