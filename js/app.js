// Create needed variables

let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let startButton = document.getElementsByClassName('btn_reset');
let missed = 0;

// Create an array named phrases
// Source: https://www.ef.edu/english-resources/english-idioms/

let phrases = [
"blessing in disguise",
"dime a dozen",
"better late than never",
"bite the bullet",
"easy does it",
"benefit of the doubt",
"back to the drawing board",
"the last straw",
"under the weather",
"you can say that again",
];

// return a random phrase from an array
const getRandomPhrasAsArray = arr => {
// generates random number between 0 and length of the array    
let randomNumber = (Math.floor(Math.random() * phrases.length));
let randomPhrase = phrases[randomNumber];
return(randomPhrase);
}

// adds the letters of a string to the display 
const addPhraseToDisplay = arr => {

}

// check if a letter is in the phrase 
const checkLetter = button => {

}

// check if the game has been won or lost
const checkWin = () => {

}

// listen for the start game button to be pressed
// add event listener to button with id btn_reset and global variable startButton
addEventListener('click',(startButton) => {
    // define overlay variable 
    let overlay = document.getElementById('overlay');
    //set style of overlay to none
    overlay.style.display = 'none'; 
});

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});

