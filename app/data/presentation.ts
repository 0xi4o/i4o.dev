type Social = {
	label: string
	link: string
}

type Presentation = {
	logo: string
	mail: string
	socials: Social[]
}

const presentation: Presentation = {
	logo: 'https://i4o.dev/logo.png',
	mail: 'hey@i4o.dev',
	socials: [
		{
			label: 'Twitter',
			link: 'https://twitter.com/0xi4o',
		},
		{
			label: 'Github',
			link: 'https://github.com/0xi4o',
		},
	],
}

export default presentation
