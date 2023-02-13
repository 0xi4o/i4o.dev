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
import {
	getThemeSession,
	ThemeBody,
	ThemeHead,
	ThemeProvider,
	useTheme,
} from './utils/theme-provider'
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

export async function loader({ request }: LoaderArgs) {
	const themeSession = await getThemeSession(request)
	return json({ theme: themeSession.getTheme() })
}

function Document({ children }: { children: ReactNode }) {
	const data = useLoaderData<typeof loader>()
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
				<ThemeBody ssrTheme={Boolean(data.theme)} />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

export default function App() {
	const data = useLoaderData<typeof loader>()
	return (
		<ThemeProvider specifiedTheme={data.theme}>
			<Document>
				<Outlet />
			</Document>
		</ThemeProvider>
	)
}
