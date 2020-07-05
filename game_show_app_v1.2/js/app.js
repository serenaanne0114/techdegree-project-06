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

//hide the screen start overlay
startGame.addEventListener('click', () => {
    overlay.style.display = "none";
});

//random phrase 
function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor( Math.random() * arr.length )];
    return randomPhrase.split("");
}

//display phrase
function displayPhrase (arr) {
    for (let i = 0; i < arr.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = arr[i];
        parentOfPhraseList.appendChild(listItem);
        if (arr[i] !== "") {
            listItem.className = "letter";
        } else {
            listItem.className = "space";
        }
    }
}