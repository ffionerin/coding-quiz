

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

// Jess variables
// var questionsA = document.getElementById("questions");
// var timerA = document.getElementById("time");
// var choicesA = document.getElementById("choices");
// var submitBtn = document.getElementById("submit");
// var startBtn = document.getElementById("start");
// var initialsA = document.getElementById("initials");
// var feedbackA = document.getElementById("feedback");
// var endScreen = document.getElementById("end-screen");
// var startScreen = document.getElementById("start-screen");
// var finalScore = document.getElementById("final-score");
// var questionTitle = document.getElementById("question-title");


// Created other variables
var penalty = 10;
var currentQuestionIndex = 0;
var correctSound = new Audio('./assets/sfx/correct.wav');
var incorrectSound = new Audio('./assets/sfx/incorrect.wav');







// console.log (timeEl)
// console.log (startScreenEl)
// console.log (startButton)
// console.log (questionsEl)
// console.log (questionTitleEl)
// console.log (choicesEl)
// console.log (endScreenEl)
// console.log (finalScoreEl)
// console.log (initialsEl)
// console.log (submitButton)
// console.log (feedbackEl)
// console.log(questionTitleEl)


// make a start game function to start with the button click
// function to get one question at a time
// create function for what happens when a question is right or wrong 
// creat function to end quiz and store their score
// get Element. then set the attriubte

function countdown() {
  var secondsLeft = 90;
  var timeInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds";
    if(secondsLeft <= 0) {
        timeEl.textContent = '';
        clearInterval(timeInterval);
        endQuiz();
        // and call the function of the endscreen?
      }
  }, 1000);
};

function game() {
    // this hides the start screen
    startScreenEl.style.visibility = "hidden";
    questionsEl.removeAttribute("class");
    // this shows the questions
  }


function retrieveQuestions() {
  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
  questionTitleEl.textContent = currentQuestion.question;
console.log(questionTitleEl);
// empty out the current choices
choicesEl.innerHTML = "";
currentQuestion.choices.forEach(function(choice, i) {
var choicesBtn = document.createElement("button");
choicesBtn.setAttribute ("class", "choice");
choicesBtn.setAttribute ("value", choice);
choicesBtn.textContent = i + 1 + " - " + choice;
choicesEl.appendChild(choicesBtn);
choicesBtn.addEventListener("click", feedback);
});
}

function feedback() {console.log("it works!");
correctSound.play();
}



startButton.addEventListener("click", countdown);
startButton.addEventListener("click", game);
startButton.addEventListener("click", retrieveQuestions)




// // below code is to add audio to the quiz
// var correctAudio = new Audio('./assets/sfx/correct.wav')
// var incorrectAudio = new Audio('./assets/sfx/incorrect.wav')
// // Function to see if answer are correct
// // click on question answer either generate new question or end quiz if final question, and deduct time for answering wrong
// function questionClick() {
//   // 'this.value' shows if the answer if correct or not. need to view why this works and textcontent doesnt work
//   if (this.value !== questions[currentQuestionIndex].answer) {
//     // penalty time
//     time -= 10;
//     if (time < 0) {
//       time = 0;
//     }
//     // code shows new time on screen along side if the answer is right or wrong
//     timerA.textContent = time;
//     feedbackA.textContent = "Wrong!";
//     //below lets the audio play when the right or wrong button is pressed
//     incorrectAudio.play();
//   } else {
//     feedbackA.textContent = "Correct!";
//     correctAudio.play();
//   }
//   feedbackA.setAttribute("class", "feedback");
//   setTimeout(function() {
//     feedbackA.setAttribute("class", "feedback hide");
//   }, 1000);
//   // moves onto the next question
//   currentQuestionIndex++;
//   // check if we've run out of questions
//   if (currentQuestionIndex === questions.length) {
//     quizEnd();
//   } else {
//     getQuestion();
//   }
// }


// //Function that ends the quiz
// function quizEnd() {
//   clearInterval(timerId);
//   endScreen.removeAttribute("class");
//   // final score
//   finalScore.textContent = time;
//   questionsA.setAttribute("class", "hide");
// }



// function countdown() {
//   time--;
//   timerA.textContent = time;
//   if (time <= 0) {
//     quizEnd();
//   }
// }

// // Function to save the high scores
// function saveScore() {
//   // box to insert initials to be saved in localstorage
//   var initials = initialsA.value.trim();
//   if (initials !== "") {
//     var highscores =
//       JSON.parse(window.localStorage.getItem("highscores")) || [];
//     var newScore = {
//       score: time,
//       initials: initials
//     };
//     // this should save score to the local storage
//     highscores.push(newScore);
//     window.localStorage.setItem("highscores", JSON.stringify(highscores));
//     window.location.href = "highscores.html";
//   }
// }

// // Function lets you press enter on your keyboard 
// function pressEnter(event) {
//   if (event.key === "Enter") {
//     saveScore();
//   }
// }

// // submit initials
// submitBtn.onclick = saveScore;

// // onkeyup = when the key goes up the action happens
// initialsA.onkeyup = pressEnter;









