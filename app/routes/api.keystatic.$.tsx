import type { ActionFunction, LoaderFunction } from '@remix-run/cloudflare'
import { handleLoader } from '~/utils/keystatic.server'
import config from '../../keystatic.config'

export const loader: LoaderFunction = (args) => handleLoader({ config }, args)
export const action: ActionFunction = (args) => handleLoader({ config }, args)
