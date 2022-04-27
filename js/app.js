// Create needed variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;



// Create an array named phrases
// Source: https://www.ef.edu/english-resources/english-idioms/

const phrases = [
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

// listen for the start game button to be pressed
// add event listener to button with id btn_reset and global variable startButton
addEventListener('click', (startButton) => {
      //set style of overlay to none
    overlay.style.display = 'none'; 
});

// return a random phrase from an array
function getRandomPhraseAsArray(arr) {
// generates random number between 1 and length of the array    
let randomNumber = Math.floor((Math.random() * arr.length));
// assigns index value of array to variable randomPhrase
let randomPhrase = arr[randomNumber];
// returns randomPhrase
return randomPhrase.split('');
}

const newPhrase = getRandomPhraseAsArray(phrases);



// adds the letters of a string to the display 
function addPhraseToDisplay(newPhrase) {
    for (let i = 0; i < newPhrase.length; i++ ) {
        let li = document.createElement('li');
        li.textContent = newPhrase[i];
        let ul = document.querySelector('#phrase ul');
        ul.append(li);
            if (newPhrase[i].trim().length === 0) {
                li.className = 'space';
            } else  { 
                li.className = 'letter';
            }
    }
}

console.log(addPhraseToDisplay(newPhrase));

// // check if a letter is in the phrase 
function checkLetter(button) {
    let listEl = document.getElementsByClassName('letter');
    let match = null;
        for (let i = 0; i < listEl.length; i++) {
            if (listEl[i].textContent.toLowerCase() === button.textContent.toLowerCase()) {
                listEl[i].classList.add('show');
                match = button.textContent;
            }
        }
    return match;
}

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    let target = e.target;
    let letterMatch = checkLetter(target);
    let hearts = document.querySelectorAll('img');
        if (target.className === 'button') {
            target.className === 'chosen';
            target.setAttribute('disabled', '');
        } else {
            
            target.setAttribute('disabled', '');
        }
        if (letterMatch === null) {
           hearts[missed].setAttribute('src', 'images/lostHeart.png');
           missed++;
        }
    checkWin();
});

// console.log(checkWin());

// check if the game has been won or lost
function checkWin() {
    let listEl = document.getElementsByClassName('letter');
    let show = document.getElementsByClassName('show');
    let ul = document.getElementById('unList');
    let title = document.getElementsByClassName('title');
    
    if (listEl.length === show.length && missed < 4) {
        overlay.style.display = 'flex';
        overlay.className = 'win';
        title.textContent = 'You Won';
        ul.style.display = 'none';
        startButton.textContent = 'Start Over';
    } else {
        overlay.style.display = 'flex';
        overlay.className = 'lose';
        title.textContent = 'You Lost';
        ul.style.display = 'none';
        startButton.textContent = 'Start Over';
        startOver();
    }

}

function startOver() {
        startButton.addEventListener('click', () => {
        start.reload();
    });
}
