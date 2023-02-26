import styled from 'styled-components'
import { PRIMARY_COLOR } from '../utils/const'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 2rem;
	text-align: center;
	width: 0 auto;

	.foto-jjat {
		width: 200px;
		border-radius: 50%;
		box-shadow: 0 0 5px ${PRIMARY_COLOR};
	}

	h1 {
		font-size: 2rem;
		margin: 3px;
	}
`
