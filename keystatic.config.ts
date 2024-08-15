import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
	collections: {
		posts: collection({
			label: 'Posts',
			slugField: 'title',
			path: 'app/content/posts/*',
			entryLayout: 'content',
			format: { contentField: 'content' },
			columns: ['draft', 'date_updated', 'date_published'],
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				excerpt: fields.text({ label: 'Excerpt', multiline: true }),
				date_published: fields.date({ label: 'Published Date' }),
				date_updated: fields.date({ label: 'Updated Date' }),
				draft: fields.checkbox({ label: 'Draft' }),
				featured: fields.checkbox({ label: 'Feature this post?' }),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
			},
		}),
		bookNotes: collection({
			label: 'Book Notes',
			slugField: 'title',
			path: 'app/content/book-notes/*',
			entryLayout: 'content',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				author: fields.text({ label: 'Author' }),
				date_published: fields.date({ label: 'Published Date' }),
				date_updated: fields.date({ label: 'Updated Date' }),
				draft: fields.checkbox({ label: 'Draft' }),
				featured: fields.checkbox({ label: 'Feature this book note?' }),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
			},
		}),
	},
	singletons: {
		// ------------------------------
		// Books
		// ------------------------------
		books: singleton({
			label: 'Books',
			path: 'app/content/books',
			format: { data: 'json' },
			schema: {
				read: fields.array(
					fields.object({
						groupName: fields.text({ label: 'Group Name' }),
						items: fields.array(
							fields.object({
								label: fields.text({
									label: 'Book Title',
								}),
								author: fields.text({
									label: 'Author',
								}),
								cover: fields.file({
									label: 'Book Cover',
								}),
								genre: fields.select({
									label: 'Genre',
									options: [
										{
											label: 'Anthropology',
											value: 'anthropology',
										},
										{
											label: 'Business & Startups',
											value: 'business-startups',
										},
										{ label: 'Classic', value: 'classic' },
										{
											label: 'Comics & Graphic Novels',
											value: 'comics-graphic-novels',
										},
										{ label: 'Fantasy', value: 'fantasy' },
										{
											label: 'History',
											value: 'history',
										},
										{
											label: 'Philosophy',
											value: 'philosophy',
										},
										{
											label: 'Productivity',
											value: 'productivity',
										},
										{ label: 'SciFi', value: 'scifi' },
										{
											label: 'Self Help',
											value: 'selfhelp',
										},
									],
									defaultValue: 'scifi',
								}),
							}),
							{
								itemLabel: (props) => props.fields.label.value,
							}
						),
					}),
					{
						label: 'Group Name',
						itemLabel: (props) => props.fields.groupName.value,
					}
				),
			},
		}),
	},
	storage: {
		kind: 'local',
	},
})
