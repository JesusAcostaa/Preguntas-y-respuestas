const startButton = document.getElementById('boton-comenzar');
const questionContainerElements = document.getElementById('contenedor-preguntas');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('botones-respuesta');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click' , startGame)

function startGame() {
    console.log('hola');
    startButton.classList.add('hide');
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElements.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerHTML = question.question;
}

function selectAnswer(){


}

const question = [
    {
        questions : 'Cuanto es 2 + 2',
        answers: [
            { text : '4', correct: true},
            { text : '1', correct: false},
            { text : '5', correct: false},
            { text : '22', correct: false},
        ]
    }
]