import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

function Card(props: Props) {
	return (
		<div className='flex cursor-pointer items-center justify-center rounded-md border border-zinc-100 bg-gradient-to-br from-zinc-200 via-zinc-50 to-zinc-50 p-4 transition-all duration-300 dark:border-zinc-700/40 dark:bg-gradient-to-br dark:from-zinc-700 dark:via-zinc-900 dark:to-zinc-900'>
			{props.children}
		</div>
	)
}

export default Card
