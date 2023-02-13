import type { ReactNode } from 'react'
import type { LoaderArgs, LinksFunction, MetaFunction } from '@remix-run/node'
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
import Navbar from './components/navbar'
import { Theme, ThemeHead, ThemeProvider, useTheme } from './utils/theme'
import { getThemeSession } from './utils/theme.server'
import styles from './styles/main.css'
import cuiStyles from '@i4o-oss/catalystui/main.css'

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: styles },
	{ rel: 'stylesheet', href: cuiStyles },
]

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1',
})

export type LoaderData = {
	theme: Theme | null
}

export const loader = async ({ request }: LoaderArgs) => {
	const themeSession = await getThemeSession(request)

	const data: LoaderData = {
		theme: themeSession.getTheme(),
	}

	return json(data)
}

function Document({ children }: { children: ReactNode }) {
	const data = useLoaderData<LoaderData>()
	const [theme] = useTheme()

	return (
		<html lang='en' className={`h-screen w-screen ${theme ?? ''}`}>
			<head>
				<Meta />
				<Links />
				<ThemeHead ssrTheme={Boolean(data.theme)} />
			</head>
			<body className='h-full w-full bg-white dark:bg-[#040303]'>
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
			<Navbar />
			<Outlet />
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
