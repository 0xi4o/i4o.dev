export type GamePresentation = {
	title: string
	description: string
}

export type Game = {
	title: string
	cover?: string
}

export const data: GamePresentation = {
	title: 'Games',
	description:
		"I play video games whenever I can. I'm a huge fan of open-world RPG and FPS games, but I play any game that looks interesting to me.",
}

export const currentlyPlaying: Game[] = [
	{
		title: "Assassin's Creed: Origins",
		cover: '/images/book-covers/bullet-journal-method.jpg',
	},
	{
		title: 'Age of Empires 4',
		cover: '/images/book-covers/persepolis-rising.jpg',
	},
]
