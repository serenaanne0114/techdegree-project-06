const qwerty = document.getElementByID("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");
const overlay = document.getElementByID("overlay");
const parentOfPhraseList = document.querySelector("ul");
let title = document.querySelector(".title");
let missed = 0;

//phrases
phrases = [
  "To move mountains",
  "The light shines in darkness", 
  "Go the extra mile",
  "Fight the good fight",
  "Rise and shine" 
];

//return a random phrase from an array 
function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor( Math.random() * arr.length );
    const getPhrase = arr[randomNumber].toString().toLowerCase();
    for ( let i = 0; i < getPhrase.length; i++) {
        
    }
};