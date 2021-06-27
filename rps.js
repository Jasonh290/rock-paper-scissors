function computerPlayer() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * 3);

    return rps[random];
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const cpu = computerSelection.toLowerCase();

    if(player === "rock" && cpu === "scissors" || player === "scissors" && cpu === "paper" || player === "paper" && cpu === "rock"){
        return `You Win! ${player} beats ${cpu}`;
    } 

    if(player === "scissors" && cpu === "rock" || player === "paper" && cpu === "scissors" || player === "rock" && cpu === "paper"){
        return `You Lose! ${player} beats ${cpu}`;
    }

    return "IT IS A TIE!";
}

const playerSelection = window.prompt("Rock, Paper, or Scissors?", "Rock");
const computerSelection = computerPlayer();

let count = 0;

while(count < 5){
    function game() {
        return playRound(playerSelection, computerSelection);
    }
    console.log(game());
    count++;
}
