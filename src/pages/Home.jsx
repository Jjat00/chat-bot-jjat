// Components
import Chatbot from '../components/Chatbot/Chatbot'
// Style
import { Container } from './HomeStyle'

const Index = () => {
	return (
		<Container>
			<section style={{ marginBottom: '20px' }} className='title'>
				<img
					className='foto-jjat'
					src='https://i.ibb.co/3vHnNLy/Whats-App-Image-2022-07-28-at-9-56-05-PM.jpg'
					alt='Jaime Aza'
					border='0'
				/>
				<h1>Pregúntame algo que quieras seber sobre mí</h1>
			</section>
			<Chatbot />
		</Container>
	)
}

export default Index
