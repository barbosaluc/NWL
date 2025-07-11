const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const  aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

const enviarFormulario = (event) => {
    event.preventDefault()
    const apiKey = apiKeyInput.value
    const game = gameSelect.value
    const question = questionInput.value 

    const perguntarAI = async (question, game, apiKey) => {
        const model = "gemini-2.0-flash"
        const geminiURL = ``
    }

    if(apiKey == '' || game == '' || question == '' ) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    askButton.disabled = true
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading')

    try {
        perguntarAI(question, game, apiKey)
    } catch (error) {
        console.log('error: ', error)
    } finally {
        askButton.disabled = false
        askButton.textContent = 'Perguntar'
        askButton.classList.remove('loading')
    }
}

form.addEventListener('submit', enviarFormulario)
