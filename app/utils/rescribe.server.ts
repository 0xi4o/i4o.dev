import type { LoaderHandlerArgs } from '@rescribejs/server'
import { handleAction, handleLoader } from '@rescribejs/server'

export async function handleLoaderForRescribe(args: LoaderHandlerArgs) {
	return await handleLoader(args)
}

export async function handleActionForRescribe(args: LoaderHandlerArgs) {
	return await handleAction(args)
}
