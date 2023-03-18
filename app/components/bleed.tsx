import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

function Bleed(props: Props) {
	return (
		<div className='lg:-mx-44 flex w-full items-start justify-start'>
			{props.children}
		</div>
	)
}

export default Bleed
