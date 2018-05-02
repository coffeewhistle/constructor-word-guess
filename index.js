// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

var randomWords = require("random-words");
var wordImport = require("./Word.js");
var inquirer = require("inquirer");

var Word = wordImport.Word;
var remainingGuesses;
var wordToGuess;

// Generic function to check if the word is completed

newGame();

function newGame() {
    remainingGuesses = 10;
    wordToGuess = new Word(randomWords());
    console.log("\n" + wordToGuess.string() + "\n");
    playRound();
}

function checkround() {
    if (remainingGuesses < 1) {
        console.log("###############################################");
        console.log("");
        console.log("You lose! Terrible job guessing!");
        console.log("");
        console.log("###############################################");
        newGame();
    }
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
            type: "input",
            name: "guess",
            message: "Guess a letter: ",
            validate: validateChar
        }
    ]).then(function (guess) {
        console.log("\n" + wordToGuess.string());
        remainingGuesses -= 1;
        console.log("Remaining guesses: " + remainingGuesses + "\n");
        checkround();
    });
}

function validateChar(char) {
    return char.length < 2;
}