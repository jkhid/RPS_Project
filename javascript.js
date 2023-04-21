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
function playRound() {
    const playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(computerSelection)

// Rock portion
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        alert(`Computer chose Paper! ${playerScore}-${computerScore}`)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        alert(`Computer chose Scissors! ${playerScore}-${computerScore}`)
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        alert(`Computer chose Rock! ${playerScore}-${computerScore}`)
    }

// Paper portion
    if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        alert(`Computer chose Rock! ${playerScore}-${computerScore}`)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        alert(`Computer chose Scissors! ${playerScore}-${computerScore}`)
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        alert(`Computer chose Paper! ${playerScore}-${computerScore}`)
    }

// Scissors portion
    if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        alert(`Computer chose Rock! ${playerScore}-${computerScore}`)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        alert(`Computer chose Paper! ${playerScore}-${computerScore}`)
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert(`Compute chose Scissors! ${playerScore}-${computerScore}`)
    }    
} 

// Create game function
// Loop the game to play 5 times
// Keep score of player and computer
// Report a winner at the end
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(i);
    }
    if (playerScore > computerScore) {
        alert(`You won the game! ${playerScore}-${computerScore}`);
    } else if (playerScore < computerScore) {
        alert(`You lost the game... ${playerScore}-${computerScore}`);
    } else {
        alert(`The game has tied. ${playerScore}-${computerScore}`)
    }
}

game()