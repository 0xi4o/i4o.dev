import { Link } from '@remix-run/react'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
	to: string
}

function MyLink(props: Props) {
	return (
		<Link
			className='font-semibold text-brand-500 no-underline'
			to={props.to}
		>
			{props.children}
		</Link>
	)
}

export default MyLink
