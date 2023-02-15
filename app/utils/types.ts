export interface GetBlogMdxItemsParams {
	dir?: string
	filter?: 'latest' | 'featured' | 'latest,featured' | 'all'
	count?: number
	grouped?: 'year' | 'none'
}

export interface Post {
	title: string
	date: Date
	slug?: string
}

export interface PostGroup {
	[y: string]: Post[]
}
