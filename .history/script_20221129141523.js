

let playerScore = 0;
let computerScore = 0;


//game();
function game() {
    for (let roundNo = 1; roundNo < 6; roundNo++) {
        console.log(`This is round: ${roundNo}`);
        playRound();
    }
    if (computerScore >= playerScore) {
        console.log('Bad luck! You lost the game!')
    }
    else if (playerScore >= computerScore) {
        console.log('Congratulations! You won the game!')
    }
    function playRound() {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        getResult(computerSelection, playerSelection);
    }

    function getComputerChoice() {
        const cpuChoices = ['Rock', 'Paper', 'Scissors'];
        const random = Math.floor(Math.random() * cpuChoices.length);
        const computerSelection = (cpuChoices[random]).toUpperCase();
        console.log(`Inside getComputerChoice() and we log: ${computerSelection}`);
        return computerSelection;
    }
}

getPlayerChoice();
function getPlayerChoice() {

    let playerSelection;

    let rbutton = document.createElement("button");
    rbutton.textContent = 'Rock'
    document.body.appendChild(rbutton);

    rbutton.addEventListener("click", () => {
        playerSelection = 'ROCK'

        return playerSelection;
    });
    let pbutton = document.createElement("button");
    pbutton.textContent = 'Paper'
    document.body.appendChild(pbutton);

    pbutton.addEventListener("click", () => {
        playerSelection = 'PAPER'
        return playerSelection

    }); let sbutton = document.createElement("button");
    sbutton.textContent = 'Scissors'
    document.body.appendChild(sbutton);

    sbutton.addEventListener("click", () => {
        playerSelection = 'SCISSORS'
        return playerSelection
    });
    console.log(`Player selection = ${playerSelection}`);
}


function getResult(computerSelection, playerSelection) {


    if (computerSelection === playerSelection) {
        console.log('You drew!');

    } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        console.log('You Win! Paper beats Rock!');
        playerScore++;


    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        console.log('You Lose! Rock beats Scissors!');
        computerScore++;

    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        console.log('You Lose! Paper beats Rock!');
        computerScore++;

    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        console.log('You Win! Scissors beats Paper!');
        playerScore++;


    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        console.log('You Win! Rock beats Scissors!');
        playerScore++;


    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        console.log('You Lose! Scissors beats paper!');
        computerScore++;
        //0 + 1 = 1

    }
    console.log(`You're Score is: ${playerScore}`);
    console.log(`Computer Score is: ${computerScore}`);
}


