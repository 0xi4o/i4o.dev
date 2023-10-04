import { collection, config, fields } from '@rescribejs/core'

export const configObj = config({
	collections: {
		blog: collection({
			format: 'mdx',
			label: 'Blog',
			slug: 'blog',
			path: 'content/blog/*',
			schema: {
				title: fields.text({
					label: 'Title',
					description: 'Title',
				}),
				content: fields.document({
					label: 'Content',
				}),
				slug: fields.slug({
					label: 'Post URL',
					description: 'URL of the post',
				}),
				excerpt: fields.text({
					label: 'Excerpt',
					description: 'A short description of the post',
					multiline: true,
				}),
				published: fields.boolean({
					label: 'Publish Post',
					description:
						'If the post should be published. Post will be saved as a draft by default.',
				}),
				publishedAt: fields.date({
					label: 'Publish Date',
					description: 'Set the publish date of the post',
				}),
			},
		}),
	},
})
