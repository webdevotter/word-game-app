// Create needed variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let startButton = document.getElementsByClassName('btn__reset');
let overlay = document.getElementById('overlay');
let missed = 0;
let listEl = document.getElementsByClassName('letter');
let ul = document.querySelector('#phrase ul');
let show = document.getElementsByClassName('show');
let buttonText = document.querySelector('#overlay a');

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
// add event listener to button with id btn_reset 



buttonText.addEventListener('click', (buttonText) => {
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
    let match = null;
        for (let i = 0; i < listEl.length; i++) {
            if (listEl[i].textContent.toLowerCase() === button.textContent.toLowerCase()) {
                listEl[i].classList.add('show');
                listEl[i].classList.add('zoom');
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

            if (target.tagName === 'BUTTON') {
                target.className = 'chosen';
                target.setAttribute('disabled', '');            
         
            if (letterMatch === null) {
                hearts[missed].setAttribute('src', 'images/lostHeart.png');
                missed++;
        }   
    }
    checkWin();
});

  

// check if the game has been won or lost
function checkWin() {
    let title = document.querySelector('#overlay .title');
    let overlay = document.getElementById('overlay');   
    let listEl = document.getElementsByClassName('letter');
    let show = document.getElementsByClassName('show'); 
    let buttonText = document.querySelector('#overlay a');
    let hearts = document.querySelectorAll('img');
    if (listEl.length === show.length) { 
        overlay.className = 'win';
        overlay.style.display = 'flex'; 
        title.textContent = 'You Won';        
        buttonText.textContent = 'Play Again!';
        restart();
                            
    } if (missed > 4) {     
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        title.textContent = 'You Lost';        
        buttonText.textContent = 'Try Again';
        restart();
        
                          
    }   
}
// Restart Game
function restart() {
      buttonText.addEventListener('click', (buttonText) => {
        location.reload();
    });
//    Source: https://www.w3schools.com/jsref/met_loc_reload.asp  
}
