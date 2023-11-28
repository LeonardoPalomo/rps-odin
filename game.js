let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
let roundResults = -1;

let startGameButton = document.querySelector("#start-game");
let gameContainer = document.querySelector("#game");

let gameStatus = document.createElement('p');
gameStatus.textContent = '';

//create rock, paper, scissors buttons
let rockButton = document.createElement('button');
rockButton.textContent = "Rock";

let paperButton = document.createElement('button');
paperButton.textContent = "Paper";

let scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors";

let playerCount = document.createElement('p');
playerCount.textContent = 'Player: ' + playerScore;

let computerCount = document.createElement('p');
computerCount.textContent = 'Computer: ' + computerScore;

startGameButton.addEventListener('click', (e) => {
    let instructions = document.createElement('p');
    instructions.textContent = "Make your choice ...";
    gameContainer.appendChild(instructions);

    let cpuChoice = document.createElement('p');

    gameContainer.appendChild(rockButton);
    gameContainer.appendChild(paperButton);
    gameContainer.appendChild(scissorsButton);
    gameContainer.appendChild(playerCount);
    gameContainer.appendChild(computerCount);
    gameContainer.appendChild(cpuChoice);
    gameContainer.appendChild(gameStatus);

    gameContainer.addEventListener('click', (e) => {
        switch (e.target.textContent) {
            case 'Rock':
                playerSelection = 'rock';

                computerSelection = getComputerChoice();
                cpuChoice.textContent = "Computer goes... " + computerSelection.toUpperCase();

                roundResults = playRound(playerSelection, computerSelection);

                if (roundResults === 1) {
                    playerScore++;
                    playerCount.textContent = 'Player: ' + playerScore;
                    gameStatus.textContent = "Round won, " + playerSelection.toLowerCase() + " beats " + computerSelection;
                }

                else if (roundResults === 2) {
                    computerScore++;
                    computerCount.textContent = 'Computer: ' + computerScore;
                    gameStatus.textContent = "Round lost, " + computerSelection + " beats " + playerSelection.toLowerCase();
                }

                else if (roundResults === 0) {
                    gameStatus.textContent = "Draw, let's keep going";
                }

                if (playerScore === 5) {
                    gameStatus.textContent = "Player wins!";
                    rockButton.setAttribute('disabled', '');
                    paperButton.setAttribute('disabled', '');
                    scissorsButton.setAttribute('disabled', '');
                }
                else if (computerScore === 5) {
                    gameStatus.textContent = "Computer wins!";
                    rockButton.setAttribute('disabled', '');
                    paperButton.setAttribute('disabled', '');
                    scissorsButton.setAttribute('disabled', '');
                }

                break;
            case 'Paper':
                playerSelection = 'paper';

                computerSelection = getComputerChoice();
                cpuChoice.textContent = "Computer goes... " + computerSelection.toUpperCase();

                roundResults = playRound(playerSelection, computerSelection);

                if (roundResults === 1) {
                    playerScore++;
                    playerCount.textContent = 'Player: ' + playerScore;
                    gameStatus.textContent = "Round won, " + playerSelection.toLowerCase() + " beats " + computerSelection;
                }

                else if (roundResults === 2) {
                    computerScore++;
                    computerCount.textContent = 'Computer: ' + computerScore;
                    gameStatus.textContent = "Round lost, " + computerSelection + " beats " + playerSelection.toLowerCase();
                }

                else if (roundResults === 0) {
                    gameStatus.textContent = "Draw, let's keep going";
                }

                if (playerScore === 5) {
                    gameStatus.textContent = "Player wins!";
                    rockButton.setAttribute('disabled', '');
                    paperButton.setAttribute('disabled', '');
                    scissorsButton.setAttribute('disabled', '');
                }
                else if (computerScore === 5) {
                    gameStatus.textContent = "Computer wins!";
                    rockButton.setAttribute('disabled', '');
                    paperButton.setAttribute('disabled', '');
                    scissorsButton.setAttribute('disabled', '');
                }

                break;
            case 'Scissors':
                playerSelection = 'scissors';

                computerSelection = getComputerChoice();
                cpuChoice.textContent = "Computer goes... " + computerSelection.toUpperCase();

                roundResults = playRound(playerSelection, computerSelection);

                if (roundResults === 1) {
                    playerScore++;
                    playerCount.textContent = 'Player: ' + playerScore;
                    gameStatus.textContent = "Round won, " + playerSelection.toLowerCase() + " beats " + computerSelection;
                }

                else if (roundResults === 2) {
                    computerScore++;
                    computerCount.textContent = 'Computer: ' + computerScore;
                    gameStatus.textContent = "Round lost, " + computerSelection + " beats " + playerSelection.toLowerCase();
                }

                else if (roundResults === 0) {
                    gameStatus.textContent = "Draw, let's keep going";
                }

                if (playerScore === 5) {
                    gameStatus.textContent = "Player wins!";
                    rockButton.setAttribute('disabled', '');
                    paperButton.setAttribute('disabled', '');
                    scissorsButton.setAttribute('disabled', '');
                }
                else if (computerScore === 5) {
                    gameStatus.textContent = "Computer wins!";
                    rockButton.setAttribute('disabled', '');
                    paperButton.setAttribute('disabled', '');
                    scissorsButton.setAttribute('disabled', '');
                }

                break;
            default:
                return 'ERROR';
        }
    });
    e.target.remove();
});

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// return values:
// 1: player won
// 2: computer won
// 0: draw
// -1: error

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case "rock":
                return 0;
            case "paper":
                return 2;
            case "scissors":
                return 1;
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "rock":
                return 1;
            case "paper":
                return 0;
            case "scissors":
                return 2;
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {
        switch (computerSelection) {
            case "rock":
                return 2;
            case "paper":
                return 1;
            case "scissors":
                return 0;
        }
    }

    return -1;
}