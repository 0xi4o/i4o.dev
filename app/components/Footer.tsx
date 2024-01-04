import { Link } from '@remix-run/react'

function Footer() {
	return (
		<footer className='mt-24'>
			<div className='z-40 flex w-full flex-col items-center gap-2 md:flex-row md:justify-between'>
				<div className='flex items-center gap-2'>
					<p>2024 © Ilango Rajagopal</p>
				</div>
				<div className='flex items-center justify-end gap-4'>
					<nav className='flex items-center' role='navigation'>
						<ul role='list' className='flex flex-row gap-2'>
							<li>
								<Link to='/rss'>RSS</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer
