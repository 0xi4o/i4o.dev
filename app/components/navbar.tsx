import { Link } from '@remix-run/react'
import { Switch } from '@i4o-oss/catalystui'
import { Theme, useTheme } from '~/utils/theme'

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

	return (
		<header className='sticky top-0 z-50 flex h-20 w-screen flex-wrap items-center justify-center bg-white px-4 py-4 shadow-sm shadow-gray-200 dark:bg-[#040303] dark:shadow-gray-700 sm:px-6 lg:px-8'>
			<div className='flex w-full max-w-5xl items-center justify-between'>
				<div className='relative flex flex-grow basis-0 items-center'>
					<Link aria-label='Home page' to='/'>
						<img className='flex h-12' src='/logo.png' />
					</Link>
				</div>
				<div className='flex flex-grow items-center justify-end gap-2'>
					{/* <Nav items={navItems} /> */}
					{config.navbar?.search && (
						<input
							className='h-12 w-80 rounded-md bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-900 dark:text-gray-300'
							placeholder='Search...'
						/>
					)}
					<Switch
						defaultChecked={theme === Theme.DARK}
						name='theme-toggle-switch'
						onCheckedChange={toggleTheme}
					/>
				</div>
			</div>
		</header>
	)
}

export default Navbar
