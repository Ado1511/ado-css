// variables
let tarjetasdestapadas = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let mov = 0;
let aciertos = 0;
let temp = false;
let timer = 30;
let timeInicial = 30;
let rTime = null;

// Generación
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

numbers = numbers.sort(() => Math.random() - 0.5);
console.log(numbers);

// Obtener los elementos del DOM
let showMov = document.getElementById('movimientos');
let showAciertos = document.getElementById('aciertos');
let showTime = document.getElementById('tiempo-r');

function contarTiempo() {
    rTime = setInterval(() => {
        timer--;
        showTime.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer == 0) {
            clearInterval(rTime);
            bloq();
        }
    }, 1000);
}

function bloq() {
    for (let i = 0; i <= 15; i++) {
        let bloq = document.getElementById(i);
        bloq.innerHTML = numbers[i];
        bloq.disabled = true;
    }
}

// Principal
function destapar(id) {

    if (temp == false) {
        contarTiempo();
        temp = true;
    }

    tarjetasdestapadas++;

    if (tarjetasdestapadas == 1) {
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = firstResult;

        card1.disabled = true;
    } else if (tarjetasdestapadas == 2) {
        card2 = document.getElementById(id);
        secondResult = numbers[id];
        card2.innerHTML = secondResult;

        card2.disabled = true;

        mov++;
        showMov.innerHTML = `Movimientos: ${mov}`;

        if (firstResult == secondResult) {
            tarjetasdestapadas = 0;
            aciertos++;
            showAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if (aciertos == 8) {
                clearInterval(rTime);
                showAciertos.innerHTML = `Aciertos: ${aciertos} ¡You won!`;
                showTime.innerHTML = `Fantástic, ¡You made it ${timeInicial - timer} segundos!`;
                showMov.innerHTML = `Movimientos: ${mov} ¡You rock!`;
            }
        } else {
            setTimeout(() => {
                card1.innerHTML = '';
                card2.innerHTML = '';
                card1.disabled = false;
                card2.disabled = false;
                tarjetasdestapadas = 0;
            }, 800);
        }
    }
}
