//Create Rock button
let rbutton = document.createElement("button");
rbutton.textContent = 'Rock'
document.body.appendChild(rbutton);
//Add listener event
rbutton.addEventListener("click", () => {
    playerSelection = 'ROCK'
});

//Create Paper button
let pbutton = document.createElement("button");
pbutton.textContent = 'Paper'
document.body.appendChild(pbutton);
//Add listener event
pbutton.addEventListener("click", () => {
    playerSelection = 'PAPER'
});


//Create Scissors button
let sbutton = document.createElement("button");
sbutton.textContent = 'Scissors'
document.body.appendChild(sbutton);
//Add listener event
sbutton.addEventListener("click", () => {
    playerSelection = 'SCISSORS'
});