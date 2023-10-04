import SpotifyNowPlaying from './SpotifyNowPlaying'
import { Link } from '@remix-run/react'

export default function Navbar({
	data,
	pathname,
}: {
	data: any
	pathname: string
}) {
	return (
		<header className='z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between'>
			<nav className='flex items-center' role='navigation'>
				<ul role='list' className='flex flex-row gap-2'>
					<li>
						<Link
							to='/'
							className={`${
								pathname === '/' ? 'text-neutral-100' : ''
							} hover:text-neutral-100`}
						>
							Home
						</Link>
					</li>
					<li>/</li>
					<li>
						<Link
							to='/blog'
							className={`${
								pathname === '/blog' ? 'text-neutral-100' : ''
							} hover:text-neutral-100`}
						>
							Blog
						</Link>
					</li>
					<li>/</li>
					<li>
						<Link
							to='/projects'
							className={`${
								pathname === '/projects'
									? 'text-neutral-100'
									: ''
							} hover:text-neutral-100`}
						>
							Projects
						</Link>
					</li>
					<li>/</li>
					<li>
						<Link
							to='/about'
							className={`${
								pathname === '/about' ? 'text-neutral-100' : ''
							} hover:text-neutral-100`}
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
			<SpotifyNowPlaying data={data} />
		</header>
	)
}
