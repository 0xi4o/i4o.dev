import type { TailwindColor } from '~/utils/types'

type Theme = {
	colors: {
		primary: TailwindColor
		blur: {
			top: TailwindColor
			bottom: TailwindColor
		}
	}
}

const theme: Theme = {
	colors: {
		primary: 'brand',
		blur: {
			top: 'brand',
			bottom: 'green',
		},
	},
}

export default theme
