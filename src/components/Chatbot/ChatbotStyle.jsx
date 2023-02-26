import styled from 'styled-components'
import { PRIMARY_COLOR, SECOND_COLOR } from './../../utils/const'
// import SendIcon from '@mui/icons-material/Send'

export const ChatContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 50vh;
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
	color: #000000;
	overflow-y: auto;
	/* box-shadow: 0 0 3px #303030; */
	border-radius: 10px;
	::-webkit-scrollbar {
		width: 0.5em;
		height: 0.5em;
	}
	::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.4);
	}
`

export const ContainerChat = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`

export const MessagesContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 60vh;

	.examples {
		display: flex;
		/* margin: 0 auto; */
		/* width: 90%; */
		flex-direction: column;
		padding: 20px;
	}
	.examples ul {
		/* margin: 10px 0; */
		list-style: none;
		margin: 10px 0;
		padding: 0;
	}

	.examples ul li {
		margin: 10px 0;
		padding: 10px;
		font-size: 1.2rem;
		background-color: #e0e0e0;
		text-align: center;
		border-radius: 5px;
	}

	.examples li:hover {
		background-color: ${SECOND_COLOR};
		cursor: pointer;
	}
`

export const Messages = styled.ul`
	display: flex;
	flex-direction: column;
	width: 90%;
	list-style-type: none;
	margin: 0 auto;
	padding: 10px;
`

export const Message = styled.li`
	display: inline-block;
	background-color: ${({ isResponse }) =>
		isResponse ? PRIMARY_COLOR : '#f2f2f2'};
	border-radius: 5px;
	padding: 10px;
	margin-bottom: 10px;
	text-align: left;
	font-size: 1.4rem;
	color: ${({ isResponse }) => (isResponse ? 'white' : 'black')};
`

export const InputContainer = styled.form`
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	bottom: 30px;
	max-width: 600px;
	border-radius: 100px;
	border: 1px solid #5f6368;
	justify-content: center;

	:hover {
		border: 1px solid #303134;
		box-shadow: 0px 0px 2px #303134;
	}

	.search-icon {
		background-image: url('https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		width: 20px;
		height: 20px;
		margin-left: 10px;
	}
`

export const Input = styled.input`
	width: 100%;
	height: 40px;
	border: none;
	outline: none;
	margin: 0 10px;
	background-color: #f9f9f9;
	font-size: 1.2rem;
`

export const SendIconButton = styled.span`

	width: 20px;
	height: 20px;
	color: ${PRIMARY_COLOR};
	margin: 0 10px;

	:hover {
		cursor: pointer;
		color: ${SECOND_COLOR};
	}
`
