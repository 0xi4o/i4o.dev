import fs from 'graceful-fs'
import path from 'path'
import { promisify } from 'node:util'
import matter from 'gray-matter'
import { BLOG_POSTS_DIR } from './constants'
import type { GetBlogMdxItemsParams, PostGroup, Post } from './types'

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

async function getBlogMdxItems({
	dir = BLOG_POSTS_DIR,
	filter = 'all',
	count = 3,
	grouped = 'none',
}: GetBlogMdxItemsParams) {
	const files = await readdir(dir, { withFileTypes: true })

	const promises = files.map(async (f) => {
		const filePath = path.join(dir, f.name)
		const file = await readFile(filePath, 'utf8')

		return file
	})

	const items = await Promise.all(promises)

	const posts = items.map((item) => {
		const content = matter(item)
		const date = content.data.date_published.toISOString()

		return {
			title: content.data.title,
			description: content.data.description,
			date,
			slug: content.data.slug,
			draft: content.data.draft,
		}
	})

	const onlyPublished = posts.filter((post) => !post.draft)

	const sortedPosts = onlyPublished.sort(
		(a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
	)

	if (grouped === 'year') {
		const articlesGroupedByYear = onlyPublished.reduce(
			(groups: PostGroup, post: Post) => {
				const year = post.date.toString().split('-')[0]
				if (!groups[year]) {
					groups[year] = []
				}

				groups[year].push(post)

				return groups
			},
			{}
		)

		const sortedAndGroupedArticles: PostGroup = {}

		for (const year in articlesGroupedByYear) {
			const sortedArticlesList = articlesGroupedByYear[year].sort(
				(a, b) =>
					new Date(b.date).valueOf() - new Date(a.date).valueOf()
			)

			sortedAndGroupedArticles[year] = sortedArticlesList
		}

		return sortedAndGroupedArticles
	}

	if (filter === 'latest') {
		// latest posts
		return sortedPosts.slice(0, count)
	} else if (filter === 'featured') {
		// featured posts
	} else if (filter === 'latest,featured') {
		// latest and featured posts
	}

	return sortedPosts
}

export { getBlogMdxItems }
