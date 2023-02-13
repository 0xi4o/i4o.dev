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
		<header className='mb-8 flex h-24 w-screen flex-wrap items-center justify-center px-4 py-4 sm:px-6 lg:px-8'>
			<div className='flex w-full max-w-5xl items-center justify-between'>
				<div className='relative flex flex-grow basis-0 items-center'>
					<Link aria-label='Home page' to='/'>
						<img className='flex h-12' src='/logo.png' />
					</Link>
				</div>
				<div className='flex flex-grow items-center justify-end gap-4'>
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
			</div>
		</header>
	)
}

export default Navbar