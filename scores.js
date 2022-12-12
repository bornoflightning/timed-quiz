
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
    //This keeps page from refreshing when I press SAVE button
    event.preventDefault();
    // this stores player's initials in local storage
    localStorage.setItem("recent-player", gameInitials.value);
    //this creates a new item
    let newItem = document.createElement("p");
    // this adds text to the new item
    newItem.innerText= gameInitials.value + " " + newScore;
    //this line adds the text to the area where high scores and initals are dipslayed
    previousScores.appendChild(newItem);
});