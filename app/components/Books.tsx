import { motion } from 'framer-motion'
import {
	allTimeFavorites,
	currentlyReading,
	onMyRadar,
	read2023,
	readThisYear,
} from '~/data/books'
import BookCard from './BookCard'

export default function Books() {
	return (
		<motion.article className='flex flex-col gap-16'>
			<section className='flex flex-col gap-8'>
				<h2 className='text-xl font-medium text-neutral-100 font-mono uppercase'>
					Currently Reading
				</h2>
				<div className='w-full columns-3 gap-8'>
					{currentlyReading.length !== 0 &&
						currentlyReading.map((book, index) => (
							<BookCard
								{...book}
								// biome-ignore lint: it's fine
								key={`currentlyReading${index}`}
							/>
						))}
				</div>
			</section>
			<section className='flex flex-col gap-8'>
				<h2 className='text-xl font-medium text-neutral-100 font-mono'>
					2024
				</h2>
				<div className='w-full columns-3 gap-8'>
					{readThisYear.length !== 0 ? (
						readThisYear.map((book, index) => (
							// biome-ignore lint: it's fine
							<BookCard {...book} key={`readThisYear${index}`} />
						))
					) : (
						<span>Check back soon</span>
					)}
				</div>
			</section>
			<section className='flex flex-col gap-8'>
				<div>
					<h2 className='mb-2 text-xl font-medium text-neutral-100 font-mono uppercase'>
						On My Radar
					</h2>
					<span className='text-sm'>
						I want to read these in the coming weeks/months
					</span>
				</div>
				<div className='w-full columns-3 gap-8'>
					{onMyRadar.length !== 0 &&
						onMyRadar.map((book, index) => (
							// biome-ignore lint: it's fine
							<BookCard {...book} key={`onMyRadar${index}`} />
						))}
				</div>
			</section>
			<section className='flex flex-col gap-8'>
				<h2 className='text-xl font-medium text-neutral-100 font-mono'>
					2023
				</h2>
				<div className='w-full columns-3 gap-8'>
					{read2023.length !== 0 &&
						read2023.map((book, index) => (
							// biome-ignore lint: it's fine
							<BookCard {...book} key={`read2023${index}`} />
						))}
				</div>
			</section>
			<section className='flex flex-col gap-8'>
				<h2 className='text-xl font-medium text-neutral-100 font-mono uppercase'>
					All Time Favorites
				</h2>
				<div className='w-full columns-3 gap-8'>
					{allTimeFavorites.length !== 0 &&
						allTimeFavorites.map((book, index) => (
							<BookCard
								{...book}
								// biome-ignore lint: it's fine
								key={`allTimeFavorites${index}`}
							/>
						))}
				</div>
			</section>
		</motion.article>
	)
}
