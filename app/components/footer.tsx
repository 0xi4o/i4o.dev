import { Nav } from '@i4o/catalystui'

function Footer() {
	const navItems = [
		{
			id: 'about',
			label: 'About',
			href: '/about',
		},
		{
			id: 'uses',
			label: 'Uses',
			href: '/uses',
		},
		{
			id: 'twitter',
			label: 'Twitter',
			href: 'https://twitter.com/i4o_dev',
		},
		{
			id: 'github',
			label: 'Github',
			href: 'https://github.com/i4o-dev',
		},
	]

	return (
		<div className='mt-32'>
			<div className='flex items-center justify-center'>
				<div className='w-full max-w-7xl lg:px-8'>
					<div className='border-t border-zinc-100 dark:border-zinc-700/40'>
						<div className='relative px-4 sm:px-8 lg:px-12'>
							<div className='mx-auto flex h-24 max-w-2xl flex-col-reverse items-center justify-center gap-4 lg:max-w-5xl lg:flex-row lg:justify-between'>
								<div className='flex items-center gap-2 text-xs text-gray-900 dark:text-gray-400'>
									<p>Ilango Rajagopal © 2023</p>
								</div>
								<div className='flex items-center justify-end gap-4'>
									<Nav items={navItems} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
