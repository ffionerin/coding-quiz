// need to retrieve scores from local storage and display on the highscores html page


function getHighScores() {
    // retrive the score from local storage
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
//   sort the high scores in order from highest to lowest
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });
//   for each high score, create a li element and fill it with the text from the users initials and their score (the seconds left)
    highScores.forEach(function(score) {
      var highscoresListItem = document.createElement("li");
      highscoresListItem.textContent = score.initials + " - " + score.score;
      //   display score on page by grabbing the "highscores" ordered list from the HTML and appending the new score as a list item 
      var highScoresListEl = document.getElementById("highscores");
      highScoresListEl.appendChild(highscoresListItem);
    });
  }
  
//   call function
  getHighScores();
  
//   grab the clear button from the html and add an event listener which calls the clearing function
  var clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", clearHighScores);
  
//   clear the high scores list and refresh the page so that it immediately shows as empty
  function clearHighScores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();}