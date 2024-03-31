let userWins = 0;
let computerWins = 0;

const userDiv = document.querySelector('#userScore');
const compDiv = document.querySelector('#compScore');
const resBox = document.querySelector('.results');

function updateScores() {
    userDiv.textContent = userWins;
    compDiv.textContent = computerWins;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
};

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection) {
            case 'rock':
                resBox.textContent = "Tie!"
                return
            case 'paper':
                computerWins++;
                resBox.textContent = 'You lose! Paper beats Rock.';
                return
            case 'scissors':
                userWins++;
                resBox.textContent = 'You win! Rock beats Scissors';
                return
        };
    } else if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            case 'rock':
                userWins++;
                resBox.textContent = 'You win! Paper beats Rock.';
                return
            case 'paper':
                resBox.textContent = 'Tie!';
                return
            case 'scissors':
                computerWins++;
                resBox.textContent = 'You lose! Scissors beats Paper';
                return
        };
    } else if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                computerWins++;
                resBox.textContent = 'You lose! Rock beats Scissors.';
                return
            case 'paper':
                userWins++;
                resBox.textContent = 'You win! Scissors beats Paper.';
                return
            case 'scissors':
                resBox.textContent = 'Tie!';
                return
        };
    }
};

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const result = playRound();
//         console.log(result);
//     }
// 
//     if (userWins > computerWins) {
//         console.log('You won!');
//     } else if (userWins < computerWins) {
//         console.log('You lost!');
//     } else {
//         console.log('Tie!')
//     }
// };

// playGame();
const buttons = document.querySelectorAll('button:not(#restart)');
const restart = document.querySelector('#restart');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id);
        updateScores();
        if (userWins === 5 || computerWins === 5) {
            resBox.textContent = `Game Over! ${userWins > computerWins ? 'You win!' : 'Computer won :('}`;

            buttons.forEach((button) => {
                button.disabled = true;
            });
        }
    })
});

restart.addEventListener('click', () => {
    userWins = 0;
    computerWins = 0;
    resBox.textContent = '';
    updateScores();
    buttons.forEach((button) => {
        button.disabled = false;
    });
});

//* on load \/

updateScores();