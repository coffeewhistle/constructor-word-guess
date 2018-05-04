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
    console.log(wordToGuess);
    playRound();
}

function playRound() {
    console.log(wordToGuess.string());
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
            playRound();
        });
    }
}

function checkRound() {
    var letterArr = wordToGuess.letterArr;
    
    for (var i = 0; i < letterArr.length; i++) {
        
    }
}