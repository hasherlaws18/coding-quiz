const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const Questioncontainer = document.getElementById('Questions-container')
const questionText = document.getElementById('Question');
const Scoredisplay = document.getElementById('Score')
const timerdisplay = document.getElementById('timerdisplay');
const scoreConatainer = document.querySelector('.Score-Container');
const answerText = document.getElementById('choice-id');
const Answer1 = document.getElementById('Answer-1')
const Answer2 = document.getElementById('Answer-2')
const Answer3 = document.getElementById('Answer-3')
const Answer4 = document.getElementById('Answer-4')
var timeLeft =60;
var TimeInterval;
var currentQuestionIndex;
var score;
let i = 0;


  const Quizquestions = [
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
    currentQuestionIndex++;
    setNextQuestion()
    
  });

  function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    startButton.classList.add('hide');
    Questioncontainer.classList.remove('hide');
    setNextQuestion();
    timer();
  }

  function setNextQuestion() {
    showQuestion(Quizquestions[currentQuestionIndex]);
  }

  function showQuestion(Question) {
     questionText.innerText = Question.question;
     Answer1.innerText = Question.Choices[0].text;
     Answer1.dataset.id = Question.Choices[0].id;
     Answer2.innerText = Question.Choices[1].text;
     Answer2.dataset.id = Question.Choices[1].id;
     Answer3.innerText = Question.Choices[2].text;
     Answer3.dataset.id = Question.Choices[2].id;
     Answer4.innerText = Question.Choices[3].text;
     Answer4.dataset.id = Question.Choices[3].id;
  }

  function timer(){
    timerdisplay.innerText = timeLeft;
    TimeInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(TimeInterval);
        endquiz();
      }
      timerdisplay.innerText = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }

  function ScoreCounter(selectedAnswerId) {
    const currentQuestion = Quizquestions[currentQuestionIndex];
    if (selectedAnswerId === currentQuestion.CorrectAnswer) {
      score += 1;
    } else{
      score -=1;
    }
    Scoredisplay.innerText = `Score: ${score}`;
  }
  
  

  function endquiz() {
    clearInterval(TimeInterval);
    scoreConatainer.classList.remove('hide');
    Scoredisplay.innerText = `Your Final Score: ${score}`;
  }
  