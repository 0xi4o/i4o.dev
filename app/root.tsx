import type {
	LinksFunction,
	LoaderFunctionArgs,
	MetaFunction,
	SerializeFrom,
} from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import type { ReactNode } from 'react'
import BlurCircle from '~/components/BlurCircle'
import theme from '~/data/theme'
import { getCurrentTrack } from '~/utils/helpers.server'
import '~/main.css'

export const links: LinksFunction = () => [
	{ rel: 'manifest', href: '/site.webmanifest' },
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href: '/apple-touch-icon.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: '/favicon-32x32.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: '/favicon-16x16.png',
	},
	{ rel: 'mask-icon', href: '/safari-pinned-tab.svg' },
]

export const meta: MetaFunction = () => [
	{
		charSet: 'utf-8',
	},
	{
		name: 'msapplication-TileColor',
		content: '#2cb67d',
	},
	{
		property: 'og:site',
		content: 'https://i4o.dev',
	},
	{
		property: 'og:url',
		content: 'https://i4o.dev',
	},
	{
		property: 'og:title',
		content: 'Personal site and blog of Ilango Rajagopal',
	},
	{
		property: 'og:description',
		content: 'Software Engineer, Maker, Writer',
	},
	{
		property: 'og:image',
		content: '/og.png',
	},
	{
		name: 'theme-color',
		content: '#090909',
	},
	{
		title: 'Ilango Rajagopal - Software Engineer, Maker, Writer',
	},
	{
		name: 'description',
		content: 'Software Engineer, Maker, Writer',
	},
	{
		name: 'twitter:card',
		content: 'summary_large_image',
	},
	{
		name: 'twitter:site',
		content: '@0xi4o',
	},
	{
		name: 'twitter:url',
		content: 'https://i4o.dev/',
	},
	{
		name: 'twitter:creator',
		content: '@0xi4o',
	},
	{
		name: 'twitter:title',
		content: 'Personal site and blog of Ilango Rajagopal',
	},
	{
		name: 'twitter:description',
		content: 'Software Engineer, Maker, Writer',
	},
	{
		name: 'twitter:image',
		content: '',
	},
	{
		name: 'viewport',
		content: 'width=device-width,initial-scale=1',
	},
]

export type LoaderData = SerializeFrom<typeof loader>

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
	const nowPlayingTrack = await getCurrentTrack(context)
	const data = await nowPlayingTrack.json()
	// const themeSession = await getThemeSession(request)

	return json({
		spotify: data,
		// theme: themeSession.getTheme(),
	})
}

function Document({ children }: { children: ReactNode }) {
	return (
		<html lang='en' className='h-screen w-screen'>
			<head>
				<link rel='preconnect' href='https://fonts.bunny.net' />
				<link
					href='https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900'
					rel='stylesheet'
				/>
				<Meta />
				<Links />
				{/*<ThemeHead ssrTheme={Boolean(data.theme)} />*/}
				<script
					defer
					src='https://medama.i4o.dev/script.js'
					data-hash
				/>
			</head>
			<body className='bg-neutral-950 font-sans'>
				<script
					// biome-ignore lint: it's fine
					dangerouslySetInnerHTML={{
						__html: `
        	                window.CustomSubstackWidget = {
    	                        substackUrl: 'ilango.substack.com',
                                placeholder: 'paul@house-atreides.com',
                            	buttonText: 'Subscribe',
   	                    	    theme: 'custom',
       	            	        colors: {
           	    	                primary: '#FFFFFF',
           	    	                input: '#000000',
           	        	            email: '#FFFFFF',
      	                	        text: '#000000',
   	                        	},
                           }
                       `,
					}}
				/>
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

export default function App() {
	return (
		<Document>
			<BlurCircle position='top' color={theme.colors.blur.top} />
			<BlurCircle position='bottom' color={theme.colors.blur.bottom} />
			<Outlet />
		</Document>
	)
}
