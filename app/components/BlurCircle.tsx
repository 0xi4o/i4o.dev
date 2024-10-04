import clsx from 'clsx'
import { MAP_COLOR_VARIANT_TO_BG } from '~/utils/constants'
import type { TailwindColor } from '~/utils/types'

type Props = {
	position: 'bottom' | 'top'
	color: TailwindColor
}

function BlurCircle(props: Props) {
	const { position, color } = props

	return (
		<div
			className={clsx([
				`fixed z-0 h-[134px] w-[134px] rounded-full lg:h-[300px] lg:w-[300px] ${MAP_COLOR_VARIANT_TO_BG[color]} opacity-50 blur-[150px] md:blur-[350px]`,
				position === 'top' ? 'left-0 top-0' : '',
				position === 'bottom' ? 'bottom-0 right-0' : '',
			])}
		/>
	)
}

export default BlurCircle
