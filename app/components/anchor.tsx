import { ReactNode } from 'react'

interface Props {
	children: ReactNode
	href: string
}

function Anchor(props: Props) {
	return (
		<a
			className='text-brand-500 font-semibold no-underline'
			href={props.href}
			rel='noreferrer noopener'
			target='_blank'
		>
			{props.children}
		</a>
	)
}

export default Anchor
