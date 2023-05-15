let playerScore = 0;
let computerScore = 0;

// Create an array to store option values
// Create function that randomly selects value from array
const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// Create a function that plays a round of RPS
// The function takes in two parameters, player and computer
// Return a string that declares a winner/loser
const results = document.querySelector(".text");
function playRound(playerSelection, computerSelection) {

// Rock portion
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        results.innerHTML = `Computer chose Paper! ${playerScore}-${computerScore}`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        results.innerHTML = `Computer chose Scissors! ${playerScore}-${computerScore}`
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        results.innerHTML= `Computer chose Rock! ${playerScore}-${computerScore}`
    }

// Paper portion
    if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        results.innerHTML = `Computer chose Rock! ${playerScore}-${computerScore}`
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        results.innerHTML = `Computer chose Scissors! ${playerScore}-${computerScore}`
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        results.innerHTML = `Computer chose Paper! ${playerScore}-${computerScore}`
    }

// Scissors portion
    if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        results.innerHTML = `Computer chose Rock! ${playerScore}-${computerScore}`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        results.innerHTML = `Computer chose Paper! ${playerScore}-${computerScore}`
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        results.innerHTML = `Compute chose Scissors! ${playerScore}-${computerScore}`
    }    

    if (playerScore === 5 || computerScore === 5) {
        endgame();
    }
} 

function endgame() {
    if (playerScore === 5) {
        results.innerHTML=`You won the game! ${playerScore}-${computerScore}`;
    } else if (computerScore === 5) {
        results.innerHTML=`You lost the game... ${playerScore}-${computerScore}`;
    } else {
        results.innerHTML=`The game has tied. ${playerScore}-${computerScore}`;
    }

    playerScore = 0;
    computerScore = 0;
}

// Event Listeners for RPS buttons

const rock = document.querySelector(".rock ");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", function() {
    playRound("rock", getComputerChoice())
});
paper.addEventListener("click", function() {
    playRound("paper", getComputerChoice())
});
scissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice())
});