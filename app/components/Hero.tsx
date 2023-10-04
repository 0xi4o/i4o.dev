import presentation from '~/data/presentation'
import SocialLinks from '~/components/SocialLinks'
import { convertAsteriskToStrongTag } from '~/utils/helpers'

export default function Hero() {
	return (
		<article className='flex flex-col gap-8'>
			<h1 className='font-serif text-3xl text-neutral-100'>
				{presentation.title}
			</h1>
			<p
				className='prose prose-invert max-w-[60ch] leading-6'
				dangerouslySetInnerHTML={{
					__html: convertAsteriskToStrongTag(
						presentation.description
					),
				}}
			/>
			<SocialLinks />
		</article>
	)
}
