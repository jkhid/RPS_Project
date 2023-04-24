# Rock Paper Scissors Game
This is a simple rock paper scissors game implemented using JavaScript.

# Rules of the Game
Rock Paper Scissors is a game typically played between two players. Each player selects one of three items - rock, paper, or scissors. The winner is determined by the rules:

- Rock beats scissors (rock crushes scissors)

- Scissors beats paper (scissors cut paper)

- Paper beats rock (paper covers rock)

If both players choose the same item, the game is tied and should be played again.

# Implementation
This game has been implemented in a single JavaScript file `javascript.js`. The game logic involves:

- Initializing player and computer scores to 0.
- Creating an array choices to store the three possible options.
- Creating a function `getComputerChoice()` to randomly select an option from the choices array.
- Creating a function `playRound()` to play a single round of Rock Paper Scissors. The function prompts the player for their choice and gets the computer's choice using the `getComputerChoice()` function. It then compares the choices to determine the winner and updates the scores accordingly.
- Creating a function `game()` to loop the `playRound()` function 5 times to play a full game of Rock Paper Scissors. The scores are kept and reported at the end to declare the winner.

# Usage
To play the game, simply click the following link: https://jkhid.github.io/RPS_Project/

This will load the game and prompt the user to enter their choice of rock, paper, or scissors. The computer will randomly choose its option, and the winner of each round will be displayed. The game will continue for 5 rounds, and the winner will be declared at the end.




