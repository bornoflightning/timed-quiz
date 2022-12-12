
//declaration of all variables that will be used in this page
const gameInitials = document.getElementById("gameInitials");
const saveButton = document.getElementById("saveButton");
const finalScore = document.getElementById("finalScore");
const recentScore = document.querySelector("recentScore");
const previousScores = document.getElementById("previousScores");

// This code parses the JSON data in local stoare and assigns it to a variable
let newScore = JSON.parse(window.localStorage.getItem("new-score"));
// this line assigns the variable for score to display on screen
finalScore.innerText = newScore;


// this code listens for the lick of the SAVE button
// than saves initials to localStorage
saveButton.addEventListener('click', (event)=>{
    event.preventDefault();
    // let initials = gameInitials.value;
    localStorage.setItem("recent-player", gameInitials.value);
    console.log(localStorage);
    let newItem = document.createElement("p");
    newItem.innerText= gameInitials.value + " " + newScore;
    previousScores.appendChild(newItem);
});