import { Link } from '@remix-run/react'
import { Dropdown, IconButton, Nav, Switch } from '@i4o/catalystui'
import { Theme, useTheme } from '~/utils/theme'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

const config = {
	navbar: {
		search: false,
	},
}

function Navbar() {
	const [theme, setTheme] = useTheme()

	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		)
	}

	const navItems = [
		{
			id: 'about',
			label: 'About',
			href: '/about',
		},
		{
			id: 'projects',
			label: 'Projects',
			href: '/projects',
		},
		{
			id: 'blog',
			label: 'Blog',
			href: '/blog',
		},
		{
			id: 'now',
			label: 'Now',
			href: '/now',
		},
	]

    const dropdownItems = [
        {
            label: 'About',
            link: '/about'
        },
        {
            label: 'Projects',
            link: '/projects'
        },
        {
            label: 'Blog',
            link: '/blog'
        },
        {
            label: 'Now',
            link: '/now'
        },
        { type: 'separator' },
		{
			label: (
				<div className='flex cursor-pointer items-center justify-between'>
					<label className='cursor-pointer'>Theme</label>
					<Switch
						defaultChecked={theme === Theme.DARK}
						name='theme-toggle-switch'
						onCheckedChange={toggleTheme}
					/>
				</div>
			),
			onSelect: () => toggleTheme?.(),
		},
    ]

	return (
		<header className='flex h-24 w-screen flex-wrap items-center justify-center px-4 py-4 sm:px-6 lg:px-8'>
			<div className='flex w-full max-w-5xl items-center justify-between'>
				<div className='relative flex flex-grow basis-0 items-center'>
					<Link aria-label='Home page' to='/'>
						<img className='flex h-12' src='/logo.png' />
					</Link>
				</div>
				<div className='hidden lg:flex flex-grow items-center justify-end gap-4'>
					<Nav items={navItems} />
					{config.navbar?.search && (
						<input
							className='h-10 w-80 rounded-md bg-zinc-200 px-4 py-1 text-sm dark:bg-zinc-800 dark:text-gray-300'
							placeholder='Search...'
						/>
					)}
					<Switch
						defaultChecked={theme === Theme.DARK}
						name='theme-toggle-switch'
						onCheckedChange={toggleTheme}
					/>
				</div>
                <div className='flex lg:hidden'>
                    <Dropdown 
                        items={dropdownItems}
                        trigger={
				<IconButton
					bg='!bg-slate-400 dark:!bg-slate-800 hover:!bg-slate-300 hover:dark:!bg-slate-700'
					className='h-10 w-10'
					icon={
						<HamburgerMenuIcon className='text-slate-800 dark:text-slate-100' />
					}
				/>
			}
                    />
                </div>
			</div>
		</header>
	)
}

export default Navbar
