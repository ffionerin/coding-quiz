// need to retrieve scores from local storage and display on the highscores html page


function getHighscores() {
    // retrive the score from local storage
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
//   sort the high scores in order from highest to lowest
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
//   for each high score, create a li element and fill it with the text from the users initials and their score (the seconds left)
    highscores.forEach(function(score) {
      var highscoresListItem = document.createElement("li");
      highscoresListItem.textContent = score.initials + " - " + score.score;
      //   display score on page by grabbing the "highscores" ordered list from the HTML and appending the new score as a list item 
      var highscoresListEl = document.getElementById("highscores");
      highscoresListEl.appendChild(highscoresListItem);
    });
  }
  
//   call function
  getHighscores();
  
//   grab the clear button from the html and add an event listener which calls the clearing function
  var clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", clearHighscores);
  
//   clear the high scores list and refresh the page so that it immediately shows as empty
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();}