import { useState, useEffect, useRef } from 'react'
// Services
import chatResponse from '../../services/chatResponse'
// Data
import examplesQuestion from './examplesQuestion'
import promptContext from './promptContext.json'
import SendIcon from '../../icons/Send/Send'
// style
import {
	ChatContainer,
	MessagesContainer,
	Messages,
	Message,
	InputContainer,
	Input,
} from './ChatbotStyle'

const Chatbot = () => {
	const [messages, setMessages] = useState([])
	const [prompt, setPrompt] = useState('')
	const [placeholder, setPlaceHolder] = useState('Qué es decimetrix?')
	const [isLoading, setIsLoading] = useState(false)
	const [response, setResponse] = useState(false)
	const containerRef = useRef(null)

	const handlePromptChange = event => {
		setPrompt(event.target.value)
	}

	const examplesClickHandler = e => {
		const value = e.target.textContent
		setPrompt(value)
	}

	const examplesHoverHandler = e => {
		const value = e.target.textContent
		setPlaceHolder(value)
	}

	const handleSendMessage = async event => {
		event.preventDefault()
		if (prompt) {
			setMessages([...messages, { text: prompt, isResponse: false }])
			setResponse(true)
		}
	}

	useEffect(() => {
		const findResponse = async () => {
			setIsLoading(true)
			const data = await chatResponse(promptContext, prompt)
			setIsLoading(false)
			setMessages([
				...messages,
				{
					text: data?.choices[0]?.text,
					isResponse: true,
				},
			])
		}

		if (response) {
			findResponse()
			setResponse(false)
			setPrompt('')
		}
		const container = containerRef.current
		container.scrollTop = container.scrollHeight
	}, [messages, containerRef, response, prompt])

	return (
		<ChatContainer ref={containerRef}>
			<MessagesContainer>
				{messages.length === 0 && (
					<section className='examples'>
						<h1>Ejemplos:</h1>
						<ul>
							{Object.keys(examplesQuestion).map(key => (
								<li
									key={key}
									onClick={examplesClickHandler}
									onMouseEnter={examplesHoverHandler}
								>
									{examplesQuestion[key]}
								</li>
							))}
						</ul>
					</section>
				)}
				<Messages>
					{messages.map((message, index) => (
						<Message key={index} isResponse={message.isResponse}>
							{message.text}
						</Message>
					))}
					{isLoading && <p>Cargando...</p>}
				</Messages>
			</MessagesContainer>
			<InputContainer onSubmit={handleSendMessage}>
				<span className='search-icon'></span>
				<Input
					type='text'
					value={prompt}
					onChange={handlePromptChange}
					placeholder={placeholder}
				/>
				<span onClick={handleSendMessage}>
					<SendIcon size={30} color='#fff' hoverColor='#165f00' />
				</span>
			</InputContainer>
		</ChatContainer>
	)
}

export default Chatbot
