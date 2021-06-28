const results = document.getElementById('results');
const victory = document.getElementById('victory');
const scoreboard = document.getElementById('scoreboard');
const button = document.querySelectorAll('.button');

function computerPlayer() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * 3);

    return rps[random];
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const cpu = computerSelection.toLowerCase();

    if(player === "rock" && cpu === "scissors" || player === "scissors" && cpu === "paper" || player === "paper" && cpu === "rock"){
        return "You Win!";
    } 

    if(player === "scissors" && cpu === "rock" || player === "paper" && cpu === "scissors" || player === "rock" && cpu === "paper"){
        return "You Lose!";
    }

    return "IT IS A TIE!";
}

let player = 0;
let cpu = 0;
let draw = 0;

function gameScore() {
    if(results.innerHTML == `You Win!`){
        scoreboard.innerHTML = `Player: ${++player} | CPU: ${cpu} | Draw: ${draw}`;
        victoryMatch();
    }

    if(results.innerHTML == `You Lose!`){
        scoreboard.innerHTML = `Player: ${player} | CPU: ${++cpu} | Draw: ${draw}`;
        victoryMatch();
    }

    if(results.innerHTML == `IT IS A TIE!`){
        scoreboard.innerHTML = `Player: ${player} | CPU: ${cpu} | Draw: ${++draw}`;
    }
}

function victoryMatch() {
    if(player === 5 || cpu === 5) {
        victory.innerHTML = `<h1>GAME OVER!</h1>`;
        button.forEach(d => d.disabled = true);
    }
}

button.forEach(choice => {
    choice.addEventListener('click', () => {
        results.innerHTML = playRound(choice.innerHTML, computerPlayer());
        gameScore();
    })
})