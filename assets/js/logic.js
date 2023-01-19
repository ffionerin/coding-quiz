

// Grabbed elements from HTML
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

function countdown() {
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds";
    if (secondsLeft <= 0) {
      timeEl.textContent = '';
      clearInterval(timeInterval);
      endQuiz();
      // and call the function of the endscreen?
    }
  }, 1000);
  if (currentQuestionIndex === questions.length) {
    clearInterval(timeInterval);
    endQuiz();
  }
};

function gameStart() {
  // this hides the start screen
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  // this shows the questions
}


function retrieveQuestions() {
  var currentQuestion = questions[currentQuestionIndex];
  questionTitleEl.textContent = currentQuestion.question;
  // empty out the current choices
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function (choice, i) {
    var choicesBtn = document.createElement("button");
    choicesBtn.setAttribute("class", "choice");
    choicesBtn.setAttribute("value", choice);
    choicesBtn.textContent = i + 1 + " - " + choice;
    choicesEl.appendChild(choicesBtn);
    choicesBtn.addEventListener("click", feedback);
  });
}

startButton.addEventListener("click", countdown);
startButton.addEventListener("click", gameStart);
startButton.addEventListener("click", retrieveQuestions)

// function feedback() {console.log("it works!");
// // correctSound.play();
// // }


function feedback() {
  feedbackEl.removeAttribute("class");
  feedbackEl.innerHTML = "";
  if (this.value === questions[currentQuestionIndex].correctAnswer) {
    // if the user selected the right answer
    feedbackEl.textContent = "Correct!";
    correctSound.play();
    setTimeout(function () {
      feedbackEl.innerHTML = "";
    }, 1000);
  }
  else {
    // if the user selected the wrong answer
    feedbackEl.textContent = "Incorrect!";
    incorrectSound.play();
    // minus 10 seconds for a wrong answer
    secondsLeft -= penalty;
    setTimeout(function () {
      feedbackEl.innerHTML = "";
    }, 1000);
  }

  // Move on to the next question
  currentQuestionIndex++;

  // if there are no more questions
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    retrieveQuestions();
  }
}

function endQuiz() {
  // this hides the questions
  questionsEl.setAttribute("class", "hide");
  // this shows the endscreen
  endScreenEl.removeAttribute("class");
  // this displays the final score
  finalScoreEl.textContent = secondsLeft;
}

function saveScore() {
  // get the value of the input box
  var initials = initialsEl.value;

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: secondsLeft,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highscores.html";
  }
}

submitButton.addEventListener("click", saveScore);








