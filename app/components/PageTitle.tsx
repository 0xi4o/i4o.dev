import { ReactNode } from 'react'

export default function PageTitle({ children }: { children: ReactNode }) {
	return <h1 className='font-serif text-2xl text-neutral-100'>{children}</h1>
}
