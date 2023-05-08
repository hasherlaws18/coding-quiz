const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questioncontainer = document.getElementById('question-container')
const timerdisplay = document.getElementById('timerdisplay');
const answerbuttons = document.querySelectorAll('.button.is-black')
const scoreConatainer = document.querySelector('.Score-Container');
const Answer1 = document.getElementById('Answer-1')
const Answer2 = document.getElementById('Answer-2')
const Answer3 = document.getElementById('Answer-3')
const Answer4 = document.getElementById('Answer-4')
var timeLeft =60;
var TimeInterval;
var currentQuestionIndex;
var score;


  const questions = [
    {
        question: 'What is Used to style a page',
        Choices : [
            {id: 'Answer-1', text: 'HTML'},
            {id: 'Answer-2', text: 'CSS'},
            {id: 'Answer-3', text: 'JavaScript'},
            {id: 'Answer-4', text: 'README.md'},
        ],
        CorrectAnswer: 'Answer-2'
    },
    {
        question: 'How do you make a comment in JavaScript',
        Choices : [
            {id: 'Answer-1', text: '/comment'},
            {id: 'Answer-2', text: '--comment--'},
            {id: 'Answer-3', text: '//comment'},
            {id: 'Answer-4', text: '!!comment!!'},
        ],
        CorrectAnswer: 'Answer-3'
    },
    {
        question: 'What is used for the Dynamtics of the webpage',
        Choices : [
            {id: 'Answer-1', text: 'HTML'},
            {id: 'Answer-2', text: 'CSS'},
            {id: 'Answer-3', text: 'JavaScript'},
            {id: 'Answer-4', text: 'README.md'},
        ],
        CorrectAnswer: 'Answer-3'
    },
    {
        question: 'What does MERN stand for',
        Choices : [
            {id: 'Answer-1', text: 'MongoDB, Express, React, Node'},
            {id: 'Answer-2', text: 'Mods, Express, React, Node'},
            {id: 'Answer-3', text: 'MongoDB, Express, React, NPM'},
            {id: 'Answer-4', text: 'Mods, Express, React, NPM'},
        ],
        CorrectAnswer: 'Answer-1'
    },
    {
        question: 'What is MySQL used for',
        Choices : [
            {id: 'Answer-1', text: 'Webpage design'},
            {id: 'Answer-2', text: 'running webpages'},
            {id: 'Answer-3', text: 'runs express'},
            {id: 'Answer-4', text: 'Database managment system'},
        ],
        CorrectAnswer: 'Answer-4'
    },
    
  ]

  startButton.addEventListener('click', startQuiz);
  nextButton.addEventListener('click', () => {
    currentQuestionIndex;
    setNextQuestion()
  });

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    scoreConatainer.innerHTML = '';
    startButton.classList.add('hide');
    questioncontainer.classList.remove('hide');
    setNextQuestion();
    TimeInterval = setInterval(countdown, 1000);
}

function setNextQuestion() {
    
}