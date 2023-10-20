import { getBlogMdxItems } from '~/utils/mdx.server'

type RssEntry = {
	title: string
	link: string
	description: string
	date: string
	author?: string
	guid?: string
}

function generateRss({
	description,
	entries,
	link,
	title,
}: {
	title: string
	description: string
	link: string
	entries: RssEntry[]
}): string {
	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <description>${description}</description>
    <link>${link}</link>
    <language>en-us</language>
    <ttl>60</ttl>
    <atom:link href="https://i4o.dev/rss" rel="self" type="application/rss+xml" />
    ${entries
		.map(
			(entry) => `
      <item>
        <title><![CDATA[${entry.title}]]></title>
        <description><![CDATA[${entry.description}]]></description>
        <pubDate>${entry.date}</pubDate>
        <link>${entry.link}</link>
        ${entry.guid ? `<guid isPermaLink="false">${entry.guid}</guid>` : ''}
      </item>`
		)
		.join('')}
  </channel>
</rss>`
}

export async function loader() {
	const posts = await getBlogMdxItems({})

	const feed = generateRss({
		description: 'Software Engineer, Maker, Writer',
		title: 'Personal site and blog of Ilango Rajagopal',
		link: 'https://i4o.dev/blog',
		// @ts-ignore
		entries: posts.map((post) => ({
			title: post.title,
			description: post.description,
			date: post.date,
			link: `https://i4o.dev/blog/${post.slug}`,
			guid: `https://i4o.dev/blog/${post.slug}`,
		})),
	})

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=2419200',
		},
	})
}
