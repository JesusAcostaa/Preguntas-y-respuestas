const startButton = document.getElementById('boton-comenzar');
const questionContainerElements = document.getElementById('contenedor-preguntas');
const questionElement = document.getElementById('pregunta')
const answerButtonsElement = document.getElementById('botones-respuesta');
const nextButton = document.getElementById('boton-siguiente')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click' , startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion()
})

function startGame() {
    console.log('hola');
    startButton.classList.add('hide');
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElements.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerHTML = question.questions;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('boton')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click' , selectAnswer)
        answerButtonsElement.appendChild(button)
    })
        
}

 function resetState() {
     clearStatusClass(document.body);
     nextButton.classList.add('hide');
     while(answerButtonsElement.firstChild) {
         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
     }
 }

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.lenght > currentQuestionIndex +1){
        nextButton.classList.remove('hide');
    }else{
        startButton.innerHTML = 'Reinciar'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct');
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
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
    },
    {
        questions : 'Cuanto es 2 * 2',
        answers: [
            { text : '4', correct: true},
            { text : '1', correct: false},
            { text : '5', correct: false},
            { text : '22', correct: false},
        ]
    }
]