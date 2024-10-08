import { Fragment } from 'react'
import presentation from '~/data/presentation'

export default function SocialLinks() {
	return (
		<ul className='flex flex-row gap-2'>
			{presentation.socials.map((social, index) => (
				// biome-ignore lint: it's fine
				<Fragment key={`link-${index}`}>
					<li>
						<a
							className='cursor-pointer no-underline font-mono uppercase transition-colors duration-200 hover:text-brand'
							href={social.link}
							rel='noopener noreferrer'
							target='_blank'
						>
							{social.label}
						</a>
					</li>

					{presentation.socials.length - 1 !== index && <li>/</li>}
				</Fragment>
			))}
			<li>/</li>
			<li>
				<a
					className='cursor-pointer no-underline font-mono uppercase transition-colors duration-200 hover:text-brand'
					href={`mailto:${presentation.mail}`}
				>
					{presentation.mail}
				</a>
			</li>
		</ul>
	)
}
