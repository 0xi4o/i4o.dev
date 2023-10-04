import type { Book } from '~/data/books'
import { motion } from 'framer-motion'

export default function BookCard({ cover }: Book) {
	return (
		<motion.div
			className='mb-8 overflow-hidden rounded-2xl rounded-bl-none rounded-tl-none shadow-xl'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
		>
			<img
				className='h-full w-full object-cover'
				loading='lazy'
				src={cover}
			/>
		</motion.div>
	)
}
