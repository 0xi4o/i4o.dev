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
			<nav className='flex items-center' role='navigation'>
				<ul role='list' className='flex flex-row gap-2'>
					<li>
						<a
							href='/'
							className={`${
								pathname === '/' ? 'text-neutral-100' : ''
							} hover:text-neutral-100`}
						>
							Home
						</a>
					</li>
					<li>/</li>
					<li>
						<a
							href='/blog'
							className={`${
								pathname === '/blog' ? 'text-neutral-100' : ''
							} hover:text-neutral-100`}
						>
							Blog
						</a>
					</li>
					<li>/</li>
					<li>
						<a
							href='/projects'
							className={`${
								pathname === '/projects'
									? 'text-neutral-100'
									: ''
							} hover:text-neutral-100`}
						>
							Projects
						</a>
					</li>
					<li>/</li>
					<li>
						<a
							href='/about'
							className={`${
								pathname === '/about' ? 'text-neutral-100' : ''
							} hover:text-neutral-100`}
						>
							About
						</a>
					</li>
				</ul>
			</nav>
			<SpotifyNowPlaying data={data} />
		</header>
	)
}
