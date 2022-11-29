
//Declaring global variables
let playerScore = 0;
let computerScore = 0;

//Create Rock button
let rbutton = document.createElement("button");
rbutton.textContent = 'Rock'
document.body.appendChild(rbutton);
//Add listener event
rbutton.addEventListener("click", () => {
    playerSelection = 'ROCK'
    playRound();
});

//Create Paper button
let pbutton = document.createElement("button");
pbutton.textContent = 'Paper'
document.body.appendChild(pbutton);
//Add listener event
pbutton.addEventListener("click", () => {
    playerSelection = 'PAPER'
    playRound();
});


//Create Scissors button
let sbutton = document.createElement("button");
sbutton.textContent = 'Scissors'
document.body.appendChild(sbutton);
//Add listener event
sbutton.addEventListener("click", () => {
    playerSelection = 'SCISSORS'
    playRound();
});

let resultDiv = document.createElement("div");
resultDiv.textContent = 'Results ='
document.body.appendChild(resultDiv);

function playRound() {
    let computerSelection = getComputerChoice();
    if (computerSelection === playerSelection) {

        let div = document.createElement("div");
        div.textContent = 'You drew!';
        document.body.appendChild(div);

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


}
function getComputerChoice() {
    const cpuChoices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * cpuChoices.length);
    const computerSelection = (cpuChoices[random]).toUpperCase();
    console.log(`Inside getComputerChoice() and we log: ${computerSelection}`);
    return computerSelection;
}