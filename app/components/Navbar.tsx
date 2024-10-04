import { Link } from '@remix-run/react'
import SpotifyNowPlaying from './SpotifyNowPlaying'

export default function Navbar({
	data,
	pathname,
}: {
	data: any
	pathname: string
}) {
	return (
		<header className='z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between'>
			<nav className='flex items-center'>
				<ul className='flex flex-row gap-2'>
					<li>
						<Link
							to='/'
							className={`${
								pathname === '/' ? 'text-brand' : ''
							} transition-colors font-mono duration-200 hover:text-brand`}
						>
							Home
						</Link>
					</li>
					<li>/</li>
					<li>
						<Link
							to='/blog'
							className={`${
								pathname === '/blog' ? 'text-brand' : ''
							} transition-colors font-mono duration-200 hover:text-brand`}
						>
							Blog
						</Link>
					</li>
					<li>/</li>
					<li>
						<Link
							to='/projects'
							className={`${
								pathname === '/projects' ? 'text-brand' : ''
							} transition-colors font-mono duration-200 hover:text-brand`}
						>
							Projects
						</Link>
					</li>
					<li>/</li>
					<li>
						<Link
							to='/about'
							className={`${
								pathname === '/about' ? 'text-brand' : ''
							} transition-colors font-mono duration-200 hover:text-brand`}
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
