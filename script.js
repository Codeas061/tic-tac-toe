let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
    if (gameActive && gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        updateBoard();
        if (checkWinner()) {
            displayResult(`Player ${currentPlayer} wins!`);
        } else if (checkTie()) {
            displayResult("It's a tie!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
    });
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
    });
}

function checkTie() {
    return gameBoard.every(cell => cell !== '');
}

function displayResult(message) {
    const resultModal = document.getElementById('resultModal');
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = message;
    resultModal.style.display = 'flex';
    gameActive = false;
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    updateBoard();
    const resultModal = document.getElementById('resultModal');
    resultModal.style.display = 'none';
}
