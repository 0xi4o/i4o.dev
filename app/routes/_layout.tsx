import Navbar from '../components/Navbar'
import BlurCircle from '~/components/BlurCircle'
import theme from '~/data/theme'
import Footer from '../components/Footer'
import { Outlet, useLoaderData, useLocation } from '@remix-run/react'
import { json, SerializeFrom } from '@remix-run/node'
import { getCurrentTrack } from '~/utils/helpers'

type LoaderData = SerializeFrom<typeof loader>

export const loader = async () => {
	const nowPlayingTrack = await getCurrentTrack()
	const data = await nowPlayingTrack.json()

	return json({
		spotify: data,
	})
}
export default function Layout() {
	const data = useLoaderData<LoaderData>()
	const location = useLocation()

	return (
		<div className='mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 px-10 py-8 font-sans text-sm text-neutral-400 md:gap-20 md:py-16'>
			<Navbar data={data.spotify} pathname={location.pathname} />
			<Outlet />
			<Footer />
		</div>
	)
}
