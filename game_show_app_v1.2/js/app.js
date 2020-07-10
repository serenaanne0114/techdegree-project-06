const keyboard = document.querySelector("#qwerty");
const letters = document.querySelectorAll(".letter");
const misses = document.querySelector(".misses");
const startGame = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
const hearts = Array.from(document.querySelectorAll("ol li"));
let missed = 0;

//phrases
 const phrases = [
  "To move mountains",
  "The light shines in darkness", 
  "Go the extra mile",
  "Fight the good fight",
  "Rise and shine" 
];

//function to get random phrase
function getRandomPhraseAsArray(arr) {
    const randomPhrase = Math.floor( Math.random() * arr.length );
    const word = randomPhrase.split("");
    return randomPhrase;
    }

 const phraseRandom = getRandomPhraseAsArray(phrases);

//display phrase
function addPhraseToDisplay(arr) {
    const phraseUL = document.querySelector('#phrase ul');
    for ( let i = 0; i < phraseUL.length; i++) {
        const letter = arr[i];
        const li = document.createElement('li');
        li.textContent = letter;

        if (letter !== " ") {
            li.className = 'letter';
        } else {
            li.className = 'space';
            phraseUL.appendChild(li);
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
  
//check letter function
const checkLetter = button => {
    let matched = null;
    
    letters.forEach(letter =>{
        if (button === letter.textContent.toLowerCase()) {
            letter.classList.add('show');
            matched = true;
        }
    });
    return matched;
};

// event listener to start game button
startGame. addEventListener('click', () => {
    if(startGame.textContent == 'Start Game') {
        overlay.setAttribute('style', 'display:none');
        addPhraseToDisplay(phraseArray);
    } else if (startGame.textContent == 'Try Again') {
        resetGame();
    }

});

//add event listener to the keyboard
keyboard.addEventListener('click', event => {
    if (event.target.tagName === "BUTTON") {
        event.target.className = 'chosen';
        event.target.disabled = true;
        const match = checkLetter(event.target.textContent.toLowerCase());
        if (!match){
            hearts++;
            for ( let i = 0; i < hearts; i++ ) {
                hearts[i].children[0].src = `images/lostHeart.png`;
            }
           hearts.textContent = missed; 
        }
         
 //check win function
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

// Restart after the game is over
function resetGame() {
    missed = 0;
    const keyButton = document.querySelectorAll('button');
    for (let i = 0; i <keyButton.length; i++) {
        keyButton[i].className = '';
        keyButton[i].disabled = 'false';
    }
    getRandomPhraseAsArray(phrases);
}

// please ignore the code below as I was only experimenting

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