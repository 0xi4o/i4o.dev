import type { ReactNode } from 'react'
import type {
	LinksFunction,
	LoaderArgs,
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
} from '@remix-run/react'
import { ThemeHead, ThemeProvider, useTheme } from '~/utils/theme'
import { getThemeSession } from '~/utils/theme.server'
import { Layout } from '~/components'
import styles from '~/main.css'
import cuiStyles from '@i4o/catalystui/main.css'

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

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	viewport: 'width=device-width,initial-scale=1',
	'msapplication-TileColor': '#2b5797',
	'og:site': 'https://i4o.dev',
	'og:url': 'https://i4o.dev',
	'og:title': 'Ilango',
	'og:description': '',
	'og:image': '',
	'theme-color': '#ffffff',
	title: 'Ilango',
	'twitter:card': 'summary_large_image',
	'twitter:site': '@i4o_dev',
	'twitter:url': 'https://i4o.dev/',
	'twitter:creator': '@i4o_dev',
	'twitter:title': 'Ilango',
	'twitter:description': '',
	'twitter:image': '',
})

export type LoaderData = SerializeFrom<typeof loader>

export const loader = async ({ request }: LoaderArgs) => {
	const themeSession = await getThemeSession(request)

	return json({
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
			<body className='h-full w-full bg-zinc-50 dark:bg-[#040303]'>
				{process.env.NODE_ENV === 'production' ? (
					<script
						async
						src='https://analytics.i4o.dev/script.js'
						data-website-id='a23700f3-870e-47f9-8912-52e806ef4d43'
					></script>
				) : null}
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

function App() {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
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
