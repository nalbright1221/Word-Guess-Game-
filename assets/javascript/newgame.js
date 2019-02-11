
// Wins and losses variables 
var wins = 0;
var losses = 0;
var winsText = document.getElementById("game-won");
winsText.textContent = wins;
var lossesText = document.getElementById("game-lost");
lossesText.textContent = losses;

var guessesLeft = document.getElementById("guesses-left");
var guesses = 15;
guessesLeft.textContent = guesses;


// create an array of words 
var drinkChoice = ['daiquiri', 'manhattan', 'martini', 'margarita', 'mojito', 'mimosa'];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuessDrink = drinkChoice[Math.floor(Math.random() * drinkChoice.length)];

// black arrays for letters that have been  guessed 
var guessedLetters = [];
var blankLetters = [];


// computer loops through array to choose random word  and puts appropraite amount of underscores 
for (var i = 0; i < computerGuessDrink.length; i++) {
  var drinkChoiceText = document.getElementById("underscores");
  blankLetters.push(" _ ");
  drinkChoiceText.textContent = blankLetters.join(" ");
  guessedLetters.push(computerGuessDrink.charAt(i));
  console.log(computerGuessDrink);
}


//determine the users guess and puts in the correct html space
var userGuessText = document.getElementById("user-guess");
userGuessText.textContent = " ";

document.onkeyup = function (event) {
  // add letters to viewport
  var userGuess = event.key;

  var wrongGuess = userGuess;
  userGuessText.textContent += wrongGuess + " ";
  guesses--;
  guessesLeft.textContent = guesses;


  for (var i = 0; i < guessedLetters.length; i++) {
    if (userGuess == guessedLetters[i]) {
      blankLetters[i] = userGuess;
      drinkChoiceText.textContent = blankLetters.join("");
      console.log(blankLetters + "blank");
      console.log(guessedLetters + "word");
}}
}

// determine the amount of wins and losses using loops and if and else  statements

//stop the guess at 0 and restart the game
