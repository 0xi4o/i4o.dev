import type { ReactNode } from 'react'
import type {
	LinksFunction,
	LoaderFunctionArgs,
	MetaFunction,
	SerializeFrom,
} from '@remix-run/node'
import { json } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useLocation,
} from '@remix-run/react'
import { ThemeHead, ThemeProvider, useTheme } from '~/utils/theme'
import { getThemeSession } from '~/utils/theme.server'
import styles from '~/main.css'
import cuiStyles from '@i4o/catalystui/main.css'
import Navbar from './components/Navbar'
import BlurCircle from '~/components/BlurCircle'
import theme from '~/data/theme'
import Footer from './components/Footer'
import { getCurrentTrack } from '~/utils/helpers'

export const links: LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
	},
	{ rel: 'stylesheet', href: styles },
	{ rel: 'stylesheet', href: cuiStyles },
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
		content: '',
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

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const nowPlayingTrack = await getCurrentTrack()
	const data = await nowPlayingTrack.json()
	const themeSession = await getThemeSession(request)

	return json({
		spotify: data,
		theme: themeSession.getTheme(),
	})
}

function Document({ children }: { children: ReactNode }) {
	const data = useLoaderData<LoaderData>()
	const [theme] = useTheme()

	return (
		<html
			lang='en'
			className={`h-screen w-screen ${theme ?? ''} cui-${theme}`}
		>
			<head>
				<Meta />
				<Links />
				<ThemeHead ssrTheme={Boolean(data.theme)} />
			</head>
			<body className='mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 bg-neutral-950 px-10 py-8 font-sans text-sm text-neutral-400 md:gap-20 md:py-16'>
				{process.env.NODE_ENV === 'production' ? (
					<>
						<script
							async
							src='https://analytics.i4o.dev/script.js'
							data-website-id='a23700f3-870e-47f9-8912-52e806ef4d43'
						></script>
					</>
				) : null}
				<script
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
				<script src='https://substackapi.com/widget.js' async />
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

function App() {
	const data = useLoaderData<LoaderData>()
	const location = useLocation()

	return (
		<Document>
			<Navbar data={data.spotify} pathname={location.pathname} />
			<BlurCircle position='top' color={theme.colors.blur.top} />
			<BlurCircle position='bottom' color={theme.colors.blur.bottom} />
			<Outlet />
			<Footer />
		</Document>
	)
}

export default function AppWithProviders() {
	const data = useLoaderData<LoaderData>()

	return (
		<ThemeProvider specifiedTheme={data.theme}>
			<App />
		</ThemeProvider>
	)
}
