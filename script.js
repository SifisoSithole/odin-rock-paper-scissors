const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let i = Math.floor(Math.random() * 3);
    return options[i];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 2
    }

    if (playerSelection === 'rock'){
        if (computerSelection === 'scissors')
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

function game(){
    let noPlayerWins = 0;
    let noComputerWins = 0;

    for (let i = 1; i <= 5; i++){
        let playerSelection;
        do {
            playerSelection = prompt(`Round ${i}: Choose between Rock, Paper, and Scissors`).toLowerCase();
            if (options.includes(playerSelection))
                break;
            console.log('Invalid selection');
        } while (true)

        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 2)
            console.log(`Draw! ${playerSelection} equals to ${computerSelection}`);
        else if (roundResult === 1) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            noPlayerWins++;
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            noComputerWins++;
        }
    }

    if (noPlayerWins > noComputerWins)
        console.log('You Win!!!');
    else if (noPlayerWins < noComputerWins)
        console.log('You Lose!');
    else
        console.log('Draw!')
    console.log('Final Score:');
    console.log(`Player: ${noPlayerWins}`);
    console.log(`Computer: ${noComputerWins}`);
}

game()