import { useEffect, useState } from 'react'

export default function ReadingProgress() {
	const [readingProgress, setReadingProgress] = useState('0%')

	const handleScroll = () => {
		const body = document.body
		const html = document.documentElement

		const scrollFromTop = html.scrollTop || body.scrollTop
		const height = html.scrollHeight - html.clientHeight
		const width = `${(scrollFromTop / height) * 100}%`

		setReadingProgress(width)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	})

	return (
		<div
			className='fixed left-0 top-0 z-[1000] h-1 w-0 bg-brand'
			style={{ width: readingProgress }}
		/>
	)
}
