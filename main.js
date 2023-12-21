// UI
const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");
const section = document.querySelector("section");
const roundsCounter = document.querySelector("#rounds-counter");
const scores = document.querySelector("#scores");
const computerChoiceIcon = document.querySelector(".pc-choice");
const playerChoiceIcon = document.querySelector(".player-choice")
const resultText = document.querySelector(".inbox-text");

// Main Counters
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerSelection;

    if (randomNumber === 1) {
        computerSelection = "rock";
    } else if (randomNumber === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function showComputerChoice(choice){
    computerChoiceIcon.innerHTML = ' ';
    getComputerChoice();
    let icon = document.createElement('img');

    if (choice === "rock") {
        icon.setAttribute("src","icons/rock.svg");
    } else if (choice === "paper") {
        icon.setAttribute("src","icons/paper.svg");
    } else if (choice === "scissors") {
        icon.setAttribute("src","icons/scissors.svg");
    }
    icon.setAttribute("height","50px");
    icon.setAttribute("width", "auto");
    computerChoiceIcon.appendChild(icon);
}

function showPlayerChoice(choice){
    playerChoiceIcon.innerHTML = ' ';
    let icon = document.createElement('img');

    if(choice === "rock"){
        icon.setAttribute("src","icons/rock.svg");
        icon.setAttribute("alt", "Rock");
    } else if (choice === "paper"){
        icon.setAttribute("src","icons/paper.svg");
        icon.setAttribute("alt", "Paper");
    } else if (choice === "scissors"){
        icon.setAttribute("src","icons/scissors.svg");
        icon.setAttribute("alt", "Scissors");
    }
    icon.setAttribute("height","50px");
    icon.setAttribute("width", "auto");
    playerChoiceIcon.appendChild(icon);
}

rockButton.addEventListener("click", () => {
    if(playerScore !== 3 && computerScore !== 3){
        playRound("rock");
    }
});
paperButton.addEventListener("click", () => {
    if(playerScore !== 3 && computerScore !== 3){
        playRound("paper");
    }
});
scissorsButton.addEventListener("click", () => {
    if(playerScore !== 3 && computerScore !== 3){
        playRound("scissors");
    }
});

function alertWinner(){
    if (playerScore === 3){
        resultText.textContent = "Congratulations on winning the game!";
        resultText.style.fontWeight = "600";
    } else if (computerScore === 3){
        resultText.textContent = "Congratulations on losing the game!";
        resultText.style.fontWeight = "600";
    }
}


function playRound(name){
    let choice = getComputerChoice();
    showComputerChoice(choice);
    showPlayerChoice(name);

    if (name === "rock" && choice === "rock" ||
       name === "paper" && choice === "paper" ||
       name === "scissors" && choice === "scissors") {

        rounds++;
        updateRoundsCounter();
        updateScores();
        resultText.textContent = "It's a tie!";

    } else if (name === "rock" && choice === "scissors" ||
              name === "paper" && choice === "rock" ||
              name === "scissors" && choice === "paper") {

        playerScore++;
        rounds++;
        updateRoundsCounter();
        updateScores();
        resultText.textContent = "You won this round";

    } else if (name === "rock" && choice === "paper" ||
              name === "paper" && choice === "scissors" ||
              name === "scissors" && choice === "rock")  {

                computerScore++;
                rounds++;
                updateRoundsCounter();
                updateScores();
                resultText.textContent = "Unfortunately, you lost this round!";
    }

    alertWinner();

    if(playerScore === 3 || computerScore === 3){
        addButton();
    } 
}

function updateRoundsCounter(){
    roundsCounter.textContent = `Round ${rounds}`;
}

function updateScores(){
    scores.textContent = `player's score: ${playerScore} computer's score: ${computerScore}`;
}

function addButton(){
    const btn = document.createElement("button");
    btn.innerHTML = "Restart Game"; 
    section.appendChild(btn);
    restartGame(btn);
}

function restartGame(btn){
    btn.addEventListener("click", () =>{
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        updateRoundsCounter();
        updateScores();
        resultText.textContent = "";
        section.removeChild(btn);
    });
}
   


