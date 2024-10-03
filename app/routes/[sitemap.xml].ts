import { ORIGIN, staticPages } from '~/utils/constants'
import { toXmlSitemap } from '~/utils/helpers.server'
import keystaticConfig from '../../keystatic.config'
import { createReader } from '@keystatic/core/reader'

// code from: https://ericnish.io/blog/sitemap-xml-with-remix
export const loader = async () => {
	try {
		const reader = createReader(process.cwd(), keystaticConfig)
		const posts = await reader.collections.posts.all()
		const sitemap = toXmlSitemap([
			...staticPages
				.filter(({ to }) => to !== '/')
				.map(({ to }) => `${ORIGIN}${to}`),
			...posts.map(
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
