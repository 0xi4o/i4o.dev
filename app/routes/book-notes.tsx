import { Outlet } from '@remix-run/react'

export default function BookNotes() {
	return (
		<>
			<div>
				<Outlet />
			</div>
		</>
	)
}
