// Create getComputerChoice function
// Create an array to store option values
// Create function that randomly selects value from array
const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
console.log(getComputerChoice());