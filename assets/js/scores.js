


// Function that retrives the score from local storage, sorts them from highest to lowest adn the, for each highscore, creates a list element which is filled by the user's initials and their score
function getHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
    highscores.forEach(function(score) {
      var highscoresListItem = document.createElement("li");
      highscoresListItem.textContent = score.initials + " - " + score.score;
      var highscoresListEl = document.getElementById("highscores");
      highscoresListEl.appendChild(highscoresListItem);
    });
  }
  
//   call the function
  getHighscores();
  
//   grab the clear button from the html and add an event listener which calls the clearing function
  var clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", clearHighscores);
  
//   clear the high scores list and refresh the page so that it immediately shows as empty
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();}