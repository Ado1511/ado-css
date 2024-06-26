let isPlayerOne = true;
let cells = document.getElementsByClassName("cell");
let scoreX = 0;
let scoreO = 0;
let gameInProgress = true; 

// Agregar event listener a las celdas
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', userMove);
}

// Función para manejar el movimiento del usuario
function userMove(e) {
    let cellValue = e.target.innerHTML;
    if (!cellValue.length && gameInProgress) {
        e.target.innerHTML = isPlayerOne ? 'X' : 'O';
        isPlayerOne = !isPlayerOne;

        checkLine(0, 1, 2);
        checkLine(3, 4, 5);
        checkLine(6, 7, 8);
        checkLine(0, 3, 6);
        checkLine(1, 4, 7);
        checkLine(2, 5, 8);
        checkLine(0, 4, 8);
        checkLine(6, 4, 2);
    }
}

// Función para verificar si hay una línea ganadora
function checkLine(c1, c2, c3) {
    if (
        cells[c1].innerHTML.length &&
        cells[c1].innerHTML == cells[c2].innerHTML &&
        cells[c2].innerHTML == cells[c3].innerHTML
    ) {
        showWinner(cells[c1].innerHTML);
    }
}

// Función para mostrar al ganador y actualizar la tabla de puntuación
function showWinner(player) {
    document.querySelector('.results').innerHTML = player + "win";
    if (player === 'X') {
        scoreX++;
    } else {
        scoreO++;
    }
    updateScore();
    gameInProgress = false; // el juego termino 
    winSound.play(); // Reproducir el sonido de victoria
    setTimeout(resetBoard, 1000); // Reiniciar el tablero después de 2 segundos tengo que agregar la funcion 
}

// Función para actualizar la tabla de puntuación
function updateScore() {
    document.getElementById('scoreX').textContent = scoreX;
    document.getElementById('scoreO').textContent = scoreO;
}

// Obtener el botón de reset
let resetButton = document.getElementById('resetButton');

// Agregar event listener para reiniciar el juego al hacer clic en el botón de reset
resetButton.addEventListener('click', resetGame);

// Función para reiniciar el juego
function resetGame() {
    // Limpiar todas las celdas
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
    // Reiniciar el estado del jugador
    isPlayerOne = true;
    // Limpiar el resultado
    document.querySelector('.results').innerHTML = '';
    gameInProgress = true; // Volver a habilitar el juego
}
