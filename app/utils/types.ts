export interface GetBlogMdxItemsParams {
	dir?: string
	filter?: 'latest' | 'featured' | 'latest,featured' | 'all'
	count?: number
	grouped?: 'year' | 'none'
}

export interface GetMdxFileParams {
	dir?: string
	slug: string
}

export interface Post {
	title: string
	description: string
	date: Date
	slug?: string
	draft?: boolean
	featured?: boolean
}

export interface PostGroup {
	[y: string]: Post[]
}
