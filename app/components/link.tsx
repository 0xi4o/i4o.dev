import { Link } from '@remix-run/react'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	to: string
}

function MyLink(props: Props) {
	return (
		<Link className='font-semibold text-brand no-underline' to={props.to}>
			{props.children}
		</Link>
	)
}

export default MyLink
