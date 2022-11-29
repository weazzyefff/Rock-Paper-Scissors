
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



function playRound() {

    // Get the computer choice
    let computerSelection = getComputerChoice();



    //Check winner
    if (computerSelection === playerSelection) {

        let div = document.createElement("div");
        div.textContent = 'You drew!';
        document.body.appendChild(div);

    } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        let div = document.createElement("div");
        div.textContent = 'You Win! Paper beats Rock!';
        document.body.appendChild(div);
        playerScore++;


    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        let div = document.createElement("div");
        div.textContent = 'You Lose! Rock beats Scissors!';
        document.body.appendChild(div);
        computerScore++;

    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        let div = document.createElement("div");
        div.textContent = 'You Lose! Paper beats Rock!';
        document.body.appendChild(div);
        computerScore++;

    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        let div = document.createElement("div");
        div.textContent = 'You Win! Scissors beats Paper!';
        document.body.appendChild(div);
        playerScore++;


    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        let div = document.createElement("div");
        div.textContent = 'You Win! Rock beats Scissors!';
        document.body.appendChild(div);
        playerScore++;

    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        let div = document.createElement("div");
        div.textContent = 'You Lose! Scissors beats paper!';
        document.body.appendChild(div);
        computerScore++;
        //0 + 1 = 1

    }
    // Create the Results <div>
    let resultDiv = document.createElement("div");
    resultDiv.textContent = `Computer Score: ${computerScore} Player Score: ${playerScore}`;
    document.body.appendChild(resultDiv);

    if (computerScore == 5) {
        let resultDiv = document.createElement("div");
        resultDiv.textContent = `Back luck! You lose the game.`;
        document.body.appendChild(resultDiv);
        return;
    } else if ( playerSelection == 5) {
        let resultDiv = document.createElement("div");
        resultDiv.textContent = `Congratulations! You won the game!`;
        document.body.appendChild(resultDiv);
        return;
    }

}
function getComputerChoice() {
    const cpuChoices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * cpuChoices.length);
    const computerSelection = (cpuChoices[random]).toUpperCase();
    console.log(`Inside getComputerChoice() and we log: ${computerSelection}`);
    return computerSelection;
}