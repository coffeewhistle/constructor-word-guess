// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

var randomWords = require("random-words");
var wordImport = require("./Word.js");
var inquirer = require("inquirer");

var Word = wordImport.Word;
var remainingGuesses;
var wordToGuess;
var count = 0;

// Generic function to check if the word is completed

newGame();

function newGame() {
    wordToGuess = new Word(randomWords());
    remainingGuesses = 10;
    // console.log(wordToGuess);
    playRound();
}

function playRound() {
    if (remainingGuesses > 0) {
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter"
            }
        ]).then(function (answers) {
            wordToGuess.guess(answers.letter);
            console.log(wordToGuess.string());
            remainingGuesses--;
            checkRound();
        });
    } else {
        console.log("You lose!");
        console.log(wordToGuess.letterArr);
        startOver();
    }
}

function checkRound() {
    var letterArr = wordToGuess.letterArr;
    var corrects = 0;
    for (var i = 0; i < letterArr.length; i++) {
        if (letterArr[i].guessed === true) {
            corrects++;
        }
    }
    if (corrects === letterArr.length) {
        console.log("You win!");
        startOver();
    } else {
        playRound();
    }
}

function startOver() {
    inquirer.prompt([
        {
            name: "continue",
            message:"Continue? (Y/N)"
        }
    ]).then(function(answers) {
        if (answers.continue === "Y") {
            newGame();
        } else {
            process.exit();
        }
    });
}