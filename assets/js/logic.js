

// Grabbed elements from HTML by ID
var timeEl = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var endScreenEl = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var feedbackEl = document.getElementById("feedback")
var correctSoundEl = document.getElementById("correctSound")
var incorrectSoundEl = document.getElementById("incorrectSound")

// Created other variables
var penalty = 10;
var currentQuestionIndex = 0;
var currentQuestion = questions[currentQuestionIndex]
var correctSound = new Audio('./assets/sfx/correct.wav');
var incorrectSound = new Audio('./assets/sfx/incorrect.wav');
var secondsLeft = 90;
var timeInterval;


// created countdown function to decrease one second at a time and show end screen if it reaches 0
function countdown() {
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds";
    if (currentQuestionIndex === questions.length) {
      clearInterval(timeInterval);
      endQuiz();
    }
    if (secondsLeft <= 0) {
      clearInterval(timeInterval);
      endQuiz();
    }
  },1000);
  
};


// created a function to start the game which hides the start scren and shows the question section of the HTML
function gameStart() {
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
}


// Feed in the questions from the questions array one at a time
function retrieveQuestions() {
  var currentQuestion = questions[currentQuestionIndex];
  questionTitleEl.textContent = currentQuestion.question;
  // empty out the current choices
  choicesEl.innerHTML = "";
  // create a button for each of the choices, set their values using the questions array
  currentQuestion.choices.forEach(function (choice, i) {
    var choicesBtn = document.createElement("button");
    choicesBtn.setAttribute("class", "choice");
    choicesBtn.setAttribute("value", choice);
    choicesBtn.textContent = i + 1 + " - " + choice;
    choicesEl.appendChild(choicesBtn);
    // add event listener to trigger feedback following a user selecting and answer
    choicesBtn.addEventListener("click", feedback);
  });
}

// event listener to start the game and the countdown at the same time
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", gameStart);
startButton.addEventListener("click", retrieveQuestions);

// feedback function which plays the correct sound in response to correct responses and incorrect sound to wrong responses.
// included a time penalty for incorrect responses. Both types of feedback to disappear after one second
function feedback() {
  feedbackEl.removeAttribute("class");
  feedbackEl.innerHTML = "";
  if (this.value === questions[currentQuestionIndex].correctAnswer) {
    feedbackEl.textContent = "Correct!";
    correctSound.play();
    setTimeout(function () {
      feedbackEl.innerHTML = "";
    }, 1000);
  }
  else {
    feedbackEl.textContent = "Incorrect!";
    incorrectSound.play();
    secondsLeft -= penalty;
    setTimeout(function () {
      feedbackEl.innerHTML = "";
    }, 1000);
  }
  // Move on to the next question
  currentQuestionIndex++;
  // But got to end screen if there are no more questions (i.e. the end of the questions array is reached)
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    retrieveQuestions();
  }
}

// function to end the quiz which hides the questions, and displays the end screen. Feed the number of seconds left to the final score element
function endQuiz() {
  questionsEl.setAttribute("class", "hide");
  endScreenEl.removeAttribute("class");
  finalScoreEl.textContent = secondsLeft;
}

// function to save the user's score to local storage -
// first get the value from the input box then save to local storage and redirect to next page
function saveScore() {
  var initials = initialsEl.value;
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: secondsLeft,
      initials: initials
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
  }
}

// add event listener so that saveScore function is executed when submit button is clicked
submitButton.addEventListener("click", saveScore);








