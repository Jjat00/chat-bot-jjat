const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY

const chatResponse = async (promptContext, prompt) => {
	const res = await fetch(`https://api.openai.com/v1/completions`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${OPENAI_API_KEY}`,
		},
		body: JSON.stringify({
			model: 'text-davinci-003',
			prompt: promptContext.prompt + ' ' + prompt,
			temperature: 0.5,
			max_tokens: 1024,
		}),
	})
	const data = await res.json()
	return data
}

export default chatResponse
