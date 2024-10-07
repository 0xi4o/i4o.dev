import { Buffer } from 'node:buffer'
import type { AppLoadContext } from '@remix-run/cloudflare'
import type { Env } from '../../worker-configuration'
import type { Artist } from './types'

// code shamelessly inspired from: https://github.com/dreyfus92/astro-portfolio
export const getAccessToken = async (context: AppLoadContext) => {
	const env = context.cloudflare.env as Env
	// Get environment variables
	const refresh_token = env.SPOTIFY_REFRESH_TOKEN
	const client_id = env.SPOTIFY_CLIENT_ID
	const client_secret = env.SPOTIFY_CLIENT_SECRET

	const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
		'base64',
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

export const nowPlaying = async (context: AppLoadContext) => {
	// @ts-ignore
	const { access_token } = await getAccessToken(context)

	const NOW_PLAYING_ENDPOINT =
		'https://api.spotify.com/v1/me/player/currently-playing'

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
}

export const getCurrentTrack = async (context: AppLoadContext) => {
	const response = await nowPlaying(context)

	if (response.status === 204 || response.status > 400) {
		return new Response(JSON.stringify({ isPlaying: false }), {
			status: 200,
		})
	}

	// @ts-ignore
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

// biome-ignore lint: it's fine
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

// biome-ignore lint: it's fine
export const groupPostsByYear = (posts: any[]) => {
	return posts.reduce((groups, post) => {
		const year = post.entry.date_published.toString().split('-')[0]

		if (!groups[year]) {
			groups[year] = []
		}

		groups[year].push(post)

		return groups
	}, {})
}
