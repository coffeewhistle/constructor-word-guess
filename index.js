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

function newGame() {
    wordToGuess = new Word(randomWords());
    remainingGuesses = 10;
    
}