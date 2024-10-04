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
	const response = await fetch(`${process.env.CMS_URL}/api/posts.json`)
	const data = await response.json()
	// @ts-ignore
	const publishedPosts = data?.posts.filter((post) => !post.entry.draft)

	const feed = generateRss({
		description: 'Software Engineer, Maker, Writer',
		title: 'Personal site and blog of Ilango Rajagopal',
		link: 'https://i4o.dev/blog',
		// @ts-ignore
		entries: publishedPosts.map((post) => ({
			title: post.entry.title,
			description: post.entry.excerpt,
			date: post.entry.date_published,
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
