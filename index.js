var currentQuestion = document.getElementById("question");
var answer = document.getElementById("answer");
var questionWindow = document.getElementById("questionWindow");
var startWindow = document.getElementById("start");
var finishWindow = document.getElementById("finish");
var firstAnswer = document.getElementById("one");
var secondAnswer = document.getElementById("two");
var thirdAnswer = document.getElementById("three");
var fourthAnswer = document.getElementById("four");
var finalResult = document.getElementById("result");
var i = 0;
var countCorrectAnswers = 0;

questionWindow.style.display = 'none';
finishWindow.style.display = 'none';

function setQuestions() {
  currentQuestion.innerHTML = questions[i].question;
  firstAnswer.textContent = questions[i].choices[0];
  secondAnswer.textContent = questions[i].choices[1];
  thirdAnswer.textContent = questions[i].choices[2];
  fourthAnswer.textContent = questions[i].choices[3];
}


function userClickedOnAnswer1() {
  changeStatusOfButtons(true);
  if (questions[i].correctAnswer == 0){
    countCorrectAnswers++;
    firstAnswer.style.background = 'green';
  }
  else{
    firstAnswer.style.background = 'orange';
  }
}

function userClickedOnAnswer2() {
  changeStatusOfButtons(true);
  if (questions[i].correctAnswer == 1){
    countCorrectAnswers++;
    secondAnswer.style.background = 'green';
  }
  else{
    secondAnswer.style.background = 'orange';
  }
}

function userClickedOnAnswer3() {
  changeStatusOfButtons(true);
  if (questions[i].correctAnswer == 2){
    countCorrectAnswers++;
    thirdAnswer.style.background = 'green';
  }
  else{
    thirdAnswer.style.background = 'orange';
  }
}

function userClickedOnAnswer4() {
  changeStatusOfButtons(true);
  if (questions[i].correctAnswer == 3){
    countCorrectAnswers++;
    fourthAnswer.style.background = 'green';
  }
  else{
    fourthAnswer.style.background = 'orange';
  }
}


function changeStatusOfButtons(status){
  firstAnswer.disabled = status;
  secondAnswer.disabled = status;
  thirdAnswer.disabled = status;
  fourthAnswer.disabled = status;
}

function userClickedOnStartButton() {
  countCorrectAnswers = 0;
  i=0;
  changeStatusOfButtons(false);
  setQuestions();
  setDefaultColors();
  questionWindow.style.display = 'block';
  startWindow.style.display = 'none';
  finishWindow.style.display = 'none';
}

function userClickedOnNextButton() {
  if (i < questions.length-1) {
    i++;
    setQuestions();
    setDefaultColors();
    changeStatusOfButtons(false);
  }
  else{
    finishWindow.style.display = 'block';
    questionWindow.style.display = 'none';
    finalResult.innerHTML = "Your score is " + countCorrectAnswers + "/" + questions.length;
  }

}

function setDefaultColors(){
  firstAnswer.style.background = '';
  secondAnswer.style.background = '';
  thirdAnswer.style.background = '';
  fourthAnswer.style.background = '';
}
