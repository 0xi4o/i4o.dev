import { createCookieSessionStorage } from '@remix-run/cloudflare'

import { type Theme, isTheme } from './theme'

const sessionSecret = 'I4O_DEV_SESSION_SECRET'
if (!sessionSecret) {
	throw new Error('SESSION_SECRET must be set')
}

const themeStorage = createCookieSessionStorage({
	cookie: {
		name: '__i4o_dev_theme',
		secure: true,
		secrets: [sessionSecret],
		sameSite: 'lax',
		path: '/',
		httpOnly: true,
	},
})

async function getThemeSession(request: Request) {
	const session = await themeStorage.getSession(request.headers.get('Cookie'))
	return {
		getTheme: () => {
			const themeValue = session.get('theme')
			return isTheme(themeValue) ? themeValue : null
		},
		setTheme: (theme: Theme) => session.set('theme', theme),
		commit: () => themeStorage.commitSession(session),
	}
}

export { getThemeSession }
