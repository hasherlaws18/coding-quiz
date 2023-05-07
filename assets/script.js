const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questioncontainer = document.getElementById('question-container')
const timerdisplay = document.getElementById('timerdisplay');
var timeLeft =60;
var TimeInterval;


function timer() {
    timeInterval = setInterval(function () {
      timeLeft--;
      timerDisplay.textContent = "TIMER: " + timeLeft;
  
      if (timeLeft === 0 || currentQuestionIndex >= questions.length) {
        clearInterval(timeInterval);
        gameOver();
      }
    }, 1000);
  }