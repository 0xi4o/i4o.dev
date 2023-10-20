import getReadingTime from 'reading-time'

export default function calculateReadingTime(content: string) {
	const readingTime = getReadingTime(content)
	return readingTime.text
}
