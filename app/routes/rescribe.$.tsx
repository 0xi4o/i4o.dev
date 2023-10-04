import type {
	ActionFunctionArgs,
	LinksFunction,
	LoaderFunctionArgs,
} from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { Rescribe } from '@rescribejs/core'
import rescribeStylesheet from '@rescribejs/core/rescribe.css'
import { configObj as config } from '~/rescribe.config'
import {
	handleActionForRescribe,
	handleLoaderForRescribe,
} from '~/utils/rescribe.server'

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: rescribeStylesheet },
]

export function loader(args: LoaderFunctionArgs) {
	if (process.env.NODE_ENV === 'production') return redirect('/')
	return handleLoaderForRescribe({ ...args, config })
}

export function action(args: ActionFunctionArgs) {
	return handleActionForRescribe({ ...args, config })
}

export default function RescribeRoot() {
	return <Rescribe config={config} />
}
