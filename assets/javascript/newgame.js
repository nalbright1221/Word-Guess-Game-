//wins and losses
var wins = 0;
var losses = 0;

// Create variables that hold references to the places in the HTML where we want to display things.

var underScore = document.getElementById("underscores");
var rightGuess = document.getElementById("right-guess");
var gamesWon = document.getElementById("games-won");

var gamesLost = document.getElementById("games-lost");

//guesses left 
  var guessesLeft = document.getElementById("guesses-left");
  var guesses = 10;
  guessesLeft.textContent = guesses;

// create an array of words 
  var drinkChoice = ['daiquiri', 'manhattan', 'martini', 'margarita', 'mojito', 'mimosa'];

// Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuessDrink = drinkChoice[Math.floor(Math.random() * drinkChoice.length)];
  
  // black arrays for letters that have been  guessed 
  var guessedLetters = [];
  var blankLetters = [];

// computer loops through array to choose random word
  for (var i = 0; i < drinkChoice.length; i++) {
    var drinkChoiceText = document.getElementById("underscores");
    blankLetters.push("_");
    drinkChoiceText.textContent = blankLetters.join(" ");
    guessedLetters.push(computerGuessDrink.charAt(i));
  }

  //determine the users guess and puts in  the correct html space
var userGuessText = document.getElementById("user-guess");
userGuessText.textContent = ", ";

document.onkeyup = function (event) {

  // add letters to viewport
    var userGuess = event.key;
  for (var i = 0; i < guessedLetters.length; i++) {
    if (userGuess == guessedLetters[i]){
      blankLetters[i] = userGuess;
      computerGuessDrink.textContent  = blankLetters.join(" ");
    console.log(blankLetters + "blank");
    console.log(guessedLetters + "word");
  }
}
}