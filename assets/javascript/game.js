


//Drink choices that the computer will randomly guess//
var drinkChoice = [
'old fashion','moscole mule','daiquiri','manhattan','martini','margarita','mojito','bloody mary','gimlet','comsopolitan','long island','mimosa','bellini',];
        
var randomDrink = "";
var guessedLetters = [];       
var guessingDrink = [];         
    

// counter variables 
var wins = 0;    
var losses = 0;
var remainingGuesses = 0;   

resetGame()

function Game() {

//code that makes the computer guess a random word from our array//
var randomDrink = drinkChoice[Math.floor(Math.random() * drinkChoice.length)];

guessedLetters = randomDrink.split("");

blanks = guessedLetters.length;

for (var i = 0; i < blanks; i++) {
    blanksAndCorrect.push("_");

}
}