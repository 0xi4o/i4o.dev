import type { ReactNode } from 'react'

export default function PageTitle({ children }: { children: ReactNode }) {
	return <h1 className='font-mono text-4xl text-neutral-100'>{children}</h1>
}
