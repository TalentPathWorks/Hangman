const readlineSync = require('readline-sync');
// Word bank
const words = [
  'javascript',
  'code',
  'talentpath',
  'puppy',
  'react',
  'computer',
];
// Creates a random integer to select from the array from.
const randomInt = Math.floor(Math.random() * words.length);
// Keeps track on how many more tries a user has
let gameTries = 5;
// Keeps track of how many letters a user got right, if value of this equal length of word then its done
let correctLetters = 0;
// See if its a successful guess
let guessedRight = false;

// Choose a random word
const wordChoosen = words[randomInt];
// Create an array to compare to
const letters = wordChoosen.split('');
const size = letters.length;
const emptyArray = new Array(size);
// Initializing empty array for printing on screen
for (let i = 0; i < emptyArray.length; i++) {
  emptyArray[i] = '_';
}
// Stores user input
let characterInput;
console.clear();
console.log('***Javascript Hangman***');
console.log(`The following word has ${size} letters.`);
while (correctLetters < letters.length && gameTries !== 0) {
  // Printing empty word to screen
  console.log(emptyArray);
  // Take in word from user
  characterInput = readlineSync.question('Guess a letter: ');
  // Check if letter is already guessed
  if (emptyArray.includes(characterInput)) {
    console.log('You already tried that letter...');
  } else {
    // Check if letter is within the word
    for (let i = 0; i < emptyArray.length; i++) {
      if (characterInput === letters[i]) {
        // Assign empty space to the correct letter
        emptyArray[i] = letters[i];
        guessedRight = true;
        correctLetters += 1;
      }
    }
    // Check if they guessed right
    if (!guessedRight) {
      gameTries -= 1;
      console.log(`You guessed WRONG. You have: ${gameTries} tries left. `);
    } else {
      console.log('Correct!');
    }
    guessedRight = false;
  }
}
// Print out result
if (correctLetters === letters.length) {
  console.log('CONGRATS YOU GOT THE WORD RIGHT (^_^)');
} else {
  console.log('YOU RAN OUT OF TRIES, TRY AGAIN! You -> (X_X)');
}
