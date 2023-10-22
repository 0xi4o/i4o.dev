import theme from '~/data/theme'
import type { Artist, TailwindColor } from './types'

export function convertAsteriskToStrongTag(str: string) {
	return str.replace(
		/\*{1,2}(.*?)\*{1,2}/g,
		`<strong class="font-normal ${
			// @ts-ignore
			MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]
		}">$1</strong>`
	)
}

export function formatDate(date: Date) {
	return new Intl.DateTimeFormat('en-GB').format(date)
}

export const MAP_COLOR_VARIANT_TO_BG: Record<TailwindColor, string> = {
	brand: 'bg-brand-500',
	orange: 'bg-orange-500',
	violet: 'bg-violet-500',
	red: 'bg-red-500',
	amber: 'bg-amber-500',
	yellow: 'bg-yellow-500',
	lime: 'bg-lime-500',
	green: 'bg-green-500',
	emerald: 'bg-emerald-500',
	teal: 'bg-violet-500',
	cyan: 'bg-cyan-500',
	blue: 'bg-blue-500',
	indigo: 'bg-indigo-500',
	purple: 'bg-purple-500',
	fushia: 'bg-fushia-500',
	pink: 'bg-pink-500',
	rose: 'bg-rose-500',
}

export const MAP_COLOR_VARIANT_TO_TEXT: Record<TailwindColor, string> = {
	brand: 'text-brand-500',
	orange: 'text-orange-500',
	violet: 'text-violet-500',
	red: 'text-red-500',
	amber: 'text-amber-500',
	yellow: 'text-yellow-500',
	lime: 'text-lime-500',
	green: 'text-green-500',
	emerald: 'text-emerald-500',
	teal: 'text-violet-500',
	cyan: 'text-cyan-500',
	blue: 'text-blue-500',
	indigo: 'text-indigo-500',
	purple: 'text-purple-500',
	fushia: 'text-fushia-500',
	pink: 'text-pink-500',
	rose: 'text-rose-500',
}

export function removeTrailingSlash(pathname: string) {
	const matchTrailingSlash = /\w+\/$/
	if (matchTrailingSlash.test(pathname)) return pathname.slice(0, -1)
	return pathname
}

export function sortAndGroupPostsByYear(posts: any[]) {
	const articlesGroupedByYear = posts.reduce((groups, post) => {
		const year = post.data.date_published.toISOString().split('-')[0]
		if (!groups[year]) {
			groups[year] = []
		}

		groups[year].push(post)

		return groups
	}, {})

	const sortedAndGroupedArticles: any = {}

	for (const year in articlesGroupedByYear) {
		const sortedArticlesList = articlesGroupedByYear[year].sort(
			(a: any, b: any) =>
				new Date(b.data.date_published).valueOf() -
				new Date(a.data.date_published).valueOf()
		)

		sortedAndGroupedArticles[year] = sortedArticlesList
	}

	return sortedAndGroupedArticles
}

// code shamelessly inspired from: https://github.com/dreyfus92/astro-portfolio
export const getAccessToken = async () => {
	// Get environment variables
	const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
	const client_id = process.env.SPOTIFY_CLIENT_ID
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET

	const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
		'base64'
	)
	const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		// @ts-ignore
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token,
		}),
	})
	return response.json()
}

export const nowPlaying = async () => {
	const { access_token } = await getAccessToken()

	const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
}

export const getCurrentTrack = async () => {
	const response = await nowPlaying()

	if (response.status === 204 || response.status > 400) {
		return new Response(JSON.stringify({ isPlaying: false }), {
			status: 200,
		})
	}

	const { item } = await response.json()

	const track = {
		isPlaying: true,
		title: item.name,
		artist: item.artists.map((_artist: Artist) => _artist.name).join(', '),
		url: item.external_urls.spotify,
		img: item.album.images[0].url,
	}

	return new Response(JSON.stringify(track), {
		status: 200,
	})
}

// export const getTopTracks = async () => {
// 	const { access_token } = await getAccessToken();
//
//  const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
//
// 	return fetch(TOP_TRACKS_ENDPOINT, {
// 		headers: {
// 			Authorization: `Bearer ${access_token}`,
// 		},
// 	});
// };
//
// export const getRecentlyPlayed = async () => {
// 	const { access_token } = await getAccessToken();
//
//  const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
//
// 	return fetch(RECENTLY_PLAYED_ENDPOINT, {
// 		headers: {
// 			Authorization: `Bearer ${access_token}`,
// 		},
// 	});
// };

export const toXmlSitemap = (urls: any[]) => {
	const urlsAsXml = urls
		.map((url) => `<url><loc>${url}</loc></url>`)
		.join('\n')

	return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${urlsAsXml}
    </urlset>`
}
