import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

function Card(props: Props) {
	return (
		<div className='inline-flex cursor-pointer items-center justify-center rounded-md border border-zinc-100 bg-transparent p-4 transition-all duration-300 hover:bg-zinc-100 dark:border-zinc-700/40 hover:dark:bg-zinc-800'>
			{props.children}
		</div>
	)
}

export default Card
