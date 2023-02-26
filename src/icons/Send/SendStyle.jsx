import styled from 'styled-components'

export const StyledSvg = styled.svg`
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	fill: ${props => props.color};

	&:hover {
		fill: ${props => props.hoverColor};
	}
`
