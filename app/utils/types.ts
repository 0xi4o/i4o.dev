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

export type TailwindColor =
	| 'brand'
	| 'orange'
	| 'violet'
	| 'red'
	| 'amber'
	| 'yellow'
	| 'lime'
	| 'green'
	| 'emerald'
	| 'teal'
	| 'cyan'
	| 'blue'
	| 'indigo'
	| 'purple'
	| 'fushia'
	| 'pink'
	| 'rose'

export type Artist = {
	name: string
	images: { url: string }[]
	external_urls: { spotify: string }
	followers: { total: number }
}

export type NowPlayingTrackResponse = {
	isPlaying: boolean
	title: string
	artist: string
	url: string
	img: string
}

// https://github.com/ngryman/reading-time/blob/master/src/types.ts
export interface Options {
	wordBound?: (char: string) => boolean
	wordsPerMinute?: number
}

export interface ReadingTimeStats {
	time: number
	minutes: number
}

export interface WordCountStats {
	total: number
}

export interface ReadingTimeResult extends ReadingTimeStats {
	words: WordCountStats
}
