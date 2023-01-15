


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

console.log (timeEl)
console.log (startScreenEl)
console.log (startButton)
console.log (questionsEl)
console.log (questionTitleEl)
console.log (choicesEl)
console.log (endScreenEl)
console.log (finalScoreEl)
console.log (initialsEl)
console.log (submitButton)
console.log (feedbackEl)

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
    if(secondsLeft === 0) {
        timeEl.textContent = '';
        clearInterval(timeInterval);
        // and call the function of the endscreen?
      }
  }, 1000);
};

function game() {
    startScreenEl.style.visibility = "hidden";
    // do the following as for the length of the questions array:
    // display the question and choices with a button for each choice
    // if the user clicks the button corresponding to the right answer- play noise and display next question;
    // else take away 10 seconds from 'secondsLeft', play the wrong noise and display next question;
    // after loop is finished, display their final score, a place for them to enter their initials, and a submit button. 
}

// the submit button should then take them to the high scores page where their score is saved into the local thingy

startButton.addEventListener("click", countdown);
startButton.addEventListener("click", game);


// can also use document.querySelector(#whatever)


// for(var i= 0; i<questions.length; i++) {
//     var response = XXX
// }





