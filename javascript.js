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
        alert("You lose! Paper beats rock!")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats Scissors!")
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        alert("Tie! Rock equals Rock!")
    }

// Paper portion
    if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You Win! Paper beats rock!")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors beats paper!")
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        alert("Tie! Paper equals Paper!")
    }

// Scissors portion
    if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock beats Scissors!")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors beats paper!")
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert("Tie! Scissors equals Scissors!")
    }    
}
playRound()