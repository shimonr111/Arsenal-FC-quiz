/*Here we define all the variables*/

var currentQuestion = document.getElementById("question");
var questionWindow = document.getElementById("questionWindow");
var startWindow = document.getElementById("start");
var finishWindow = document.getElementById("finish");
var firstAnswer = document.getElementById("one");
var secondAnswer = document.getElementById("two");
var thirdAnswer = document.getElementById("three");
var fourthAnswer = document.getElementById("four");
var answersArray = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer];
var finalResult = document.getElementById("result");
var i = 0; // index of the question and its answers
var countCorrectAnswers = 0;
var flagAnswer = false; // flag whether the user clicked answer or not

/*We hide this windows at the beginning*/
questionWindow.style.display = 'none';
finishWindow.style.display = 'none';

/*This function set the question and its answers from the data*/
function setQuestions() {
  currentQuestion.innerHTML = questions[i].question;
  firstAnswer.textContent = questions[i].choices[0];
  secondAnswer.textContent = questions[i].choices[1];
  thirdAnswer.textContent = questions[i].choices[2];
  fourthAnswer.textContent = questions[i].choices[3];
}

/*This function check if the first answer is true*/
function userClickedOnAnswer(numAnswer) {
  flagAnswer = true;
  changeStatusOfButtons(true);
  if (questions[i].correctAnswer == numAnswer){
    countCorrectAnswers++;
    answersArray[numAnswer].style.background = 'green';
  }
  else{
    answersArray[numAnswer].style.background = 'orange';
  }
}

/*This function disable the answer buttons after the user click on one of them*/
function changeStatusOfButtons(status){
  firstAnswer.disabled = status;
  secondAnswer.disabled = status;
  thirdAnswer.disabled = status;
  fourthAnswer.disabled = status;
}

/*This function turning on when the user clicked on the start button and then it change the div and set questions*/
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

/*This function turning on when the user click on ther next button and it change the question or show the final div*/
function userClickedOnNextButton() {
  /*The user tried to click next without choose answer*/
  if(!flagAnswer){
    alert("Please choose answer first!");
  }
  /*The user choose answer*/
  else{
    flagAnswer = false;
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
}

/*This function return the default back ground color of the answer buttons after we change question*/
function setDefaultColors(){
  firstAnswer.style.background = '';
  secondAnswer.style.background = '';
  thirdAnswer.style.background = '';
  fourthAnswer.style.background = '';
}
