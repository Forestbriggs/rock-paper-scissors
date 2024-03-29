let userWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
};

function playRound() {
    const playerSelection = prompt("Rock, Paper, or Scissors?: ");
    const computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection) {
            case 'rock':
                return 'Tie!';
            case 'paper':
                computerWins++;
                return 'You lose! Paper beats Rock.';
            case 'scissors':
                userWins++;
                return 'You win! Rock beats Scissors';
        };
    } else if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            case 'rock':
                userWins++;
                return 'You win! Paper beats Rock.';
            case 'paper':
                return 'Tie!';
            case 'scissors':
                computerWins++;
                return 'You lose! Scissors beats Paper';
        };
    } else if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                computerWins++;
                return 'You lose! Rock beats Scissors.';
            case 'paper':
                userWins++;
                return 'You win! Scissors beats Paper.';
            case 'scissors':
                return 'Tie!';
        };
    }
};

function playGame() {
    for (let i = 0; i < 5; i++) {
        const result = playRound();
        console.log(result);
    }

    if (userWins > computerWins) {
        console.log('You won!');
    } else if (userWins < computerWins) {
        console.log('You lost!');
    } else {
        console.log('Tie!')
    }
};

playGame();