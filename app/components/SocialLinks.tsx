import { Fragment } from 'react'
import presentation from '~/data/presentation'
import { Link } from '@remix-run/react'

export default function SocialLinks() {
	return (
		<ul role='list' className='flex flex-row gap-2'>
			{presentation.socials.map((social, index) => (
				<Fragment key={`link-${index}`}>
					<li>
						<Link to={social.link}>{social.label}</Link>
					</li>

					{presentation.socials.length - 1 !== index && <li>/</li>}
				</Fragment>
			))}
			<li>/</li>
			<li>
				<Link to={`mailto:${presentation.mail}`}>
					{presentation.mail}
				</Link>
			</li>
		</ul>
	)
}
