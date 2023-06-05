const options = ['piedra', 'papel', 'tijera'];
let playerChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;

function chooseOption(option) {
    playerChoice = option;
    computerChoice = getComputerChoice();
    result = getResult(playerChoice, computerChoice);
    updateScore();
    displayResult();
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getResult(player, computer) {
    if (player === computer) {
        return 'Empate';
    } else if (
        (player === 'piedra' && computer === 'tijera') ||
        (player === 'papel' && computer === 'piedra') ||
        (player === 'tijera' && computer === 'papel')
    ) {
        playerScore++;
        return '¡Ganaste!';
    } else {
        computerScore++;
        return 'Perdiste :(';
    }
}

function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Usuario: ${playerScore} - Computadora: ${computerScore}`;
}

function displayResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Elegiste ${playerChoice}, la computadora eligió ${computerChoice}. ${result}`;
}

