const options = ['rock', 'paper', 'scissor'];
const divElements = ['.rock-image', '.paper-image', '.scissor-image'];
let noPlayerWins = 0;
let noComputerWins = 0;

function getComputerChoice(){
    let computerChoice = document.getElementById('computer-selection');
    let i = Math.floor(Math.random() * 3);
    let nodeCopy = document.querySelector(divElements[i]).cloneNode(true);
    let parentNode = document.querySelector('.computer-choice');
    parentNode.removeChild(computerChoice);
    nodeCopy.id = 'computer-selection';
    parentNode.appendChild(nodeCopy);
    return options[i];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 2
    }

    if (playerSelection === 'rock'){
        if (computerSelection === 'scissor')
            return 1;
        else
            return 0;
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'rock')
            return 1;
        else
            return 0;
    } else {
        if (computerSelection === 'paper')
            return 1;
        else
            return 0;
    }
}

const playerChoices = document.querySelectorAll('.image-choices div');

playerChoices.forEach((node) => {
    node.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        let playerSelection = node.id;
        console.log(computerSelection, playerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        let result = document.getElementById('result');
        let content = document.getElementById('content');
        let playerScore = document.getElementById('player-score');
        let computerScore = document.getElementById('computer-score');

        if (roundResult === 2){
            result.innerHTML = 'Draw!';
            content.innerHTML = `${playerSelection} equals to ${computerSelection}`;
        }
        else if (roundResult === 1) {
            result.innerHTML = 'You Win!';
            content.innerHTML = `${playerSelection} beats ${computerSelection}`;
            noPlayerWins++;
            playerScore.innerHTML = noPlayerWins;
        } else {
            result.innerHTML = 'You Lose!';
            content.innerHTML = `${computerSelection} beats ${playerSelection}`;
            noComputerWins++;
            computerScore.innerHTML = noComputerWins;
        }

        if (noComputerWins === 5){
            alert(`Computer Wins: ${noComputerWins} to ${noPlayerWins}`);
            location.reload();
        } else if (noPlayerWins === 5) {
            alert(`Player Wins: ${noPlayerWins} to ${noComputerWins}`);
            location.reload();
        }

    
    })
})

