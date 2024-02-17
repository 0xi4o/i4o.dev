import { config, fields, collection } from '@keystatic/core'

export default config({
	storage: {
		kind: 'local',
	},
	collections: {
		posts: collection({
			label: 'Posts',
			slugField: 'title',
			path: 'app/content/posts/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
				excerpt: fields.text({ label: 'Excerpt', multiline: true }),
				date_published: fields.date({ label: 'Published Date' }),
				date_updated: fields.date({ label: 'Published Date' }),
				draft: fields.checkbox({ label: 'Draft' }),
				featured: fields.checkbox({ label: 'Feature this post?' }),
			},
		}),
		bookNotes: collection({
			label: 'Book Notes',
			slugField: 'slug',
			path: 'app/content/book-notes/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
				slug: fields.slug({ name: { label: 'URL' } }),
				author: fields.text({ label: 'Author' }),
				date_published: fields.date({ label: 'Published Date' }),
				date_updated: fields.date({ label: 'Published Date' }),
				draft: fields.checkbox({ label: 'Draft' }),
				featured: fields.checkbox({ label: 'Feature this book note?' }),
			},
		}),
	},
})
