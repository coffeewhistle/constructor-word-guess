// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

var randomWords = require("random-words");
var wordImport = require("./Word.js");
var inquirer = require("inquirer");

var Word = wordImport.Word;
var remainingGuesses = 10;
var wordToGuess;

// Generic function to check if the word is completed

newGame();

function newGame() {
    wordToGuess = new Word(randomWords());
    playRound();
}

function checkround() {
    if (wordToGuess.letterArr.guessed === true) {

        console.log("###############################################");
        console.log("");
        console.log("You win! Good job guessing!");
        console.log("");
        console.log("###############################################");

    } else {
        playRound();
    }
}

// Game logic
function playRound() {
    inquirer.prompt([
        {
            type: "text",
            name: "guess",
            message: "Guess a letter: ",
        }
    ]).then(function (guess) {
        if (guess.guess === wordToGuess.guess()) {
            console.log("It worked!");
        }
        console.log("\n" + wordToGuess.string() + "\n");
        checkround();
    });
}