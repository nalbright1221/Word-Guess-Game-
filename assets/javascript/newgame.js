// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// create an array of words 
var drinkChoice = [
    'old fashion',
    'moscole mule',
    'daiquiri',
    'manhattan',
    'martini',
    'margarita',
    'mojito',
    'bloody mary',
    'gimlet',
    'comsopolitan',
    'long island',
    'mimosa',
    'bellini',
];

//Counting Variable  

var wins = 0;
var losses =  0;
var  guessesLeft= 9;
var rightLetters =  0;
var wrongLetters = 0;

// computer chooses a random drink choice
var randomDrink = Math.floor(Math.random() * drinkChoice.length);
var chosenDrink = drinkChoice[randomDrink];
console.log(chosenDrink);

// create underscores based on the length of the drink choice
var  underScore = [];
var generateUnderscore = () =>  {
    for(var i = 0; i < chosenDrink.length; i++){
underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());

// //get user guesses 
document.addEventListener("keydown", function(event) {
    var keycode = event.keyCode;
    var keyWord = String.fromCharCode(keycode);
    console.log(keyWord);
  }
);

// if the user guesses right 

// add to right array 

// if the user guesses wrong 

// add to wrong array 



// // changes in html 
// document.getElementsByClassName("guessesLeft").innerHTML=
// document.getElementsByClassName("rightGuess").innerHTML=
// document.getElementsByClassName("wrongGuess").innerHTML=
// document.getElementsByClassName("wins").innerHTML=
// document.getElementsByClassName("losses").innerHTML=
