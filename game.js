function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
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

function game() {
    let runningGame = true;
    let playerScore = 0;
    let computerScore = 0;
    let victoryMessage = "";
    let playerSelection = "";
    let computerSelection = "";
    let roundResults;

    while (runningGame){

        playerSelection = prompt("Write your choice: rock, paper or scissors?");
        computerSelection = getComputerChoice();

        roundResults = playRound(playerSelection, computerSelection);

        if(roundResults === -1){
            alert("Did not understand your choice.\n\nScores\nPlayer: "+playerScore+"\n"+"Computer: "+computerScore);
            continue;
        }

        if(roundResults === 1){
            playerScore++;
            alert("Round won, "+ playerSelection.toLowerCase()+ " beats "+ computerSelection+"\n\nScores\nPlayer: "+playerScore+"\n"+"Computer: "+computerScore);
        }

        else if(roundResults === 2){
            computerScore++;
            alert("Round lost, "+ computerSelection+ " beats "+ playerSelection.toLowerCase()+"\n\nScores\nPlayer: "+playerScore+"\n"+"Computer: "+computerScore);
        }

        else {
            alert("Draw, let's keep going\n\nScores\nPlayer: "+playerScore+"\n"+"Computer: "+computerScore);
        }


        if(playerScore === 5 || computerScore === 5) {
            runningGame = false;
        }
    }

    if (playerScore === 5){
        victoryMessage = "Player wins!"
    }
    else {
        victoryMessage = "Computer wins!"
    }
    alert(victoryMessage);

    return -1;
}