import { ReactNode } from 'react'
import Footer from './footer'
import Navbar from './navbar'

interface Props {
	children: ReactNode
}

function Layout(props: Props) {
	return (
		<>
			<div className='fixed inset-0 flex justify-center md:px-8'>
				<div className='flex w-full max-w-7xl lg:px-8'>
					<div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
				</div>
			</div>
			<div className='relative'>
				<Navbar />
				<main className='flex min-h-[calc(100vh-20rem)] items-start justify-center py-16'>
					<div className='mx-auto w-full max-w-7xl lg:px-8'>
						<div className='relative w-full px-4 sm:px-8 lg:px-12'>
							<div className='prose mx-auto flex w-full max-w-xl justify-center dark:prose-invert lg:max-w-5xl'>
								<div className='w-full max-w-2xl'>
									{props.children}
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
