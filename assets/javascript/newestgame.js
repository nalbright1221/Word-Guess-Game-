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

// choose random word 
var randomDrink = drinkChoice[Math.floor(Math.random() * drinkChoice.length)];
console.log(randomDrink);

//create underscores 
var underScore = [];
var rightWord = [];
var wrongWord = [];

//Dom Manipulation 
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrong')


// cretate underscores based on length of word 
var generateUnderscore = () => {
    for (var i = 0; i < randomDrink.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());

//get user guesses 

document.addEventListener('keypress', (event) => {
        // var keycode = event.keyCode;
        var keyword = String.fromCharCode(event.keyCode);

        if (randomDrink.indexOf(keyword) > -1) {
            //add to right words array 
            rightWord.push(keyword);
            //replace underscore with right letter 
            underScore[randomDrink.indexOf(keyword)] = keyword;
            docUnderScore[0].innerHTML = underScore.join(' ');
            docRightGuess[0].innerHTML = rightWord;
            //checks to see if user word matches guesses
            if (underscore.join('') == randomDrink) {
                alert('You Win');
            }
        }
              else {
                  wrongWord.push(keyword);
                  docWrongGuess[0].innerHTML = wrongWord;
              }
        });

    generateUnderscore();
    

//check if guess if right 

//if right push to right array 

// if wrong push to wrong array