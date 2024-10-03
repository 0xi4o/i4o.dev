import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

function Bleed(props: Props) {
	return (
		<div className='flex w-full items-start justify-start lg:-mx-44'>
			{props.children}
		</div>
	)
}

export default Bleed
