// const qwerty = document.getElementByID("qwerty");
// const phrase = document.getElementById("phrase");
// const startGame = document.querySelector(".btn__reset");
// const overlay = document.getElementByID("overlay");
// const parentOfPhraseList = document.querySelector("ul");
// const letters = document.getElementsByClassName("letter");
// let title = document.querySelector(".title");
// let missed = 0;

// //phrases
// phrases = [
//   "To move mountains",
//   "The light shines in darkness", 
//   "Go the extra mile",
//   "Fight the good fight",
//   "Rise and shine" 
// ];

// //hide the screen start overlay
// startGame.addEventListener('click', () => {
//     overlay.style.display = "none";
// });

// //random phrase 
// function getRandomPhraseAsArray(arr) {
//     const randomPhrase = arr[Math.floor( Math.random() * arr.length )];
//     return randomPhrase.split("");
// }

// //display phrase
// function addPhraseToDisplay (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const listItem = document.createElement("li");
//         listItem.textContent = arr[i];
//         parentOfPhraseList.appendChild(listItem);
//         if (arr[i] !== "") {
//             listItem.className = "letter";
//         } else {
//             listItem.className = "space";
//         }
//     }
// }

// //check letter function
// function checkLetter (letter) {
//     let match = null;
//     for ( let i = 0; i < letters.length; i++) {
//         if(guess.textContent ==letters[i].textContent) {
//             letters[i].classList.add("show");
//             match = true;
//         }
//     }
//     return match;
// }

// //event listener to keyboard

// //check win function

const keyboard = document.querySelector('#qwerty');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
const startGame = document.querySelector(".btn__reset");
const overlay = document.getElementByID("#overlay");
const  phrase = document.querySelector('#phrase');
const phraseUL = document.querySelector('#phrase ul');
// let keyRowButtons = Array.from(document.querySelectorAll('.keyrow button'));
// const hearts = Array.from(document.querySelectorAll('ol li'));
let missed = 0;

//phrases
phrases = [
  "To move mountains",
  "The light shines in darkness", 
  "Go the extra mile",
  "Fight the good fight",
  "Rise and shine" 
];

//function to get random phrase
function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor( Math.random() * arr.length )];
    return randomPhrase.split("");
    }

    //check letter function
const checkLetter = button => {
    let match = null;
    
    letters.forEach(letter =>{
        if (button === letter.textContent.toLowerCase()) {
            letter.classList.add('show');
            matched =true;
        }
    });
    return matched;
};

//add event listener to the keyboard
keyboard.addEventListener('click', event => {
    if (event.target.tagName === "BUTTON") {
        event.target.className = 'chosen';
        event.target.disabled = true;
        const match = checkLetter(event.target.textContent.toLowerCase());
        if (!match){
            missed++;
            // code to change heart icon from liveHeart.png to lostHeart.png would go here
            misses.textContent = missed;
        }
         
        function checkWin() {
             let showItems = document.querySelectorAll('.show');
             const title = document.querySelector('.title');
             if ( letters.length === showItems.length) {
                 overlay.className = "win";
                 overlay.style.display = "flex";
                 title.innerHTML = "You Win";
                 startGame.textContent ="Try Again"

             } else if (missed > 4) {
                overlay.className = "lose";
                title.textContent = "You Lose"
                overlay.style.display = "flex";
                startGame.textContent = "Try Again"
             }
         }
    }
});