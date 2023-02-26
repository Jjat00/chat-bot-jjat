import { StyledSvg } from './SendStyle'

const DownArrowIcon = ({ size, color, hoverColor }) => {
	return (
		<div
			style={{
				margin: '3px 10px 0 0',
			}}
		>
			<StyledSvg
				size={size}
				color={color}
				hoverColor={hoverColor}
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14'
					stroke='#000000'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</StyledSvg>
		</div>
	)
}

export default DownArrowIcon
