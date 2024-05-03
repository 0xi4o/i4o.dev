import type { Book } from '~/data/books'
import { motion } from 'framer-motion'
import { HoverCard } from '@i4o/catalystui'

export default function BookCard({ author, cover, title }: Book) {
	return (
		<HoverCard
			trigger={
				<motion.div
					className='mb-8 overflow-hidden rounded-2xl rounded-bl-none rounded-tl-none shadow-xl'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<img
						className='!m-0 h-full w-full object-cover'
						loading='lazy'
						src={cover}
					/>
				</motion.div>
			}
		>
			<div className='rounded-2xl bg-neutral-900 p-4 text-center shadow-xl'>
				<h3 className='m-0 text-lg font-medium text-neutral-100'>
					{title}
				</h3>
				<p className='m-0 text-base text-neutral-200'>{author}</p>
			</div>
		</HoverCard>
	)
}
