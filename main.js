
// list of all questions and answers
let questions = [
    {
        question: "How do you log information to the console in javascript?",
        answer1: "Using the 'print()' function",
        answer2: "  Using 'System.out.println();' ",
        answer3: "Using console.log();",
        correctAnswer: "Using console.log();"
    },

    {
        question: "How do you declare a variable named 'number' equal to 5 in javascript",
        answer1: "int number = 5",
        answer2: "let number = 5",
        answer3: "number = 5",
        correctAnswer: "let number = 5"
    },

    {
        question: "How do you declare a function in Javascript?",
        answer1: "function createItem(){",
        answer2: "public static void creatItem(){",
        answer3: "def creatItem():",
        correctAnswer: "function createItem(){"
    },

    {
        question: "What is Javascripts natural running environment?",
        answer1: "Net beans",
        answer2: "The Python Shell",
        answer3: "The Window",
        correctAnswer: "The Window"
    },

    {
        question: "Who created Javascript?",
        answer1: "Brendan Eich",
        answer2: "Guido Van Rossum",
        answer3: "James Gosling",
        correctAnswer: "Brendan Eich"
    }
];

// declaration of all constants
const TOTAL_QUESTIONS = 5;


// declaration of all variables that change
let timer;
let questionCounter = 0;
let currentQuestion = {};
let allquestions = [...questions];
let timeOut = 32000;
let points = 0;


// declartion of all elements that reference HTML
let timeLeft = document.getElementById("timer");
let question = document.getElementById("question");
let progressBar = document.getElementById("progressInfo");
let choices = Array.from(document.querySelectorAll(".choice-text"));
let choiceBoxes = Array.from(document.querySelectorAll(".question-box"));
let totalPoints = document.getElementById("points");



// This function deals with creating the timer that changes HTML page dynamically
function startTimer() {
    let sec = 30;
    // each second 1 is subtracted with this timer
    timer = setInterval(()=>{
        timeLeft.innerHTML = '00:' + sec;
        sec--;  
    }, 1000);
};

// this function ends the game, it can be referenced in multiple other functions
function endGame() {
    alert("Time is up!!")
    return window.location.assign('./scores.html');
};

// this function refercences 2 variables, one is the HTML elemnt that displays points
// the other is the actual number of points 
// it takes an integer as an argument which assings and updates HTML reference with
function increaseScore(amount) {
    points += amount;
    totalPoints.innerHTML = points;
}

// this function increases the index # and displays the next question in array
// along with all answers associated
function nextQuestion() {
    if(questionCounter > TOTAL_QUESTIONS){
        alert('timer is working');
        // localStorage.setItem('recentScore', score);
        return window.location.assign('./scores.html');
    }

    // this increases the counter for the current question
    questionCounter += 1;
    // this changes the percentage width css attribute to make the green progress bar move
    progressBar.style.width = `${(questionCounter/TOTAL_QUESTIONS)* 100}%`;
    // the current question will be pulled by accesing the array of objects,
    // than dot notation is used to retrieve value by the key name.
    // we subtract 1 from the counter since the index is 0 based
    currentQuestion = allquestions[questionCounter-1];
    question.innerText = currentQuestion.question;


    // this grabs the information captures in an array from all teh querys named choice-text
    // than it assigns the questions inside of the array with objects using dot notation 
    // and concactenating the number retreived from the data set reference. 
    choices.forEach(choice => {
        let number = choice.dataset['number'];
        choice.innerText = currentQuestion['answer' + number];
        
    });

};

choiceBoxes.forEach(choice=> {
    choice.addEventListener('click', e => {        
        let choice = e.target;
        let answer = choice.dataset['number'];
        

        let chosenAnswer = currentQuestion['answer' + answer];
        let correctAnswer = currentQuestion.correctAnswer;
        // let chosenBox = 'box' + answer;
        // let colorBox = document.getElementById(chosenBox);
        
        
        if (chosenAnswer == correctAnswer) {
            increaseScore(10);
            nextQuestion();
         } else {
            timeOut -= 32000;
            nextQuestion();
         };
        
        

    });
});

// This section deals with creating the main event that uses all other funtions
// and makes the game work
function startGame() {
    startTimer();
    nextQuestion();
    setTimeout(endGame, timeOut);
};


// start the actual game
startGame();


// work cited:
//Here is a list of resources that helped me finish this project
// These videos were part of my research to do this project, no plagirism happened,
// but rather provided a live example on how to use certain functions
// the organization, use of functions and names in my project are unique
//https://www.youtube.com/watch?v=nGfTjA8qNDA
//https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2915s
//https://www.youtube.com/watch?v=4piMZDO5IOI
//https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset