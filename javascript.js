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

    if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper beats rock!")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats Scissors!")
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        alert("Tie! Rock equals Rock!")
    }
}
playRound()