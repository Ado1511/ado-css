const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 4;
const WIN = 5;
const LOST = 6;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("resultText");
const userImg = document.getElementById("userImg");
const machineImg = document.getElementById("machineImg");

rockBtn.addEventListener("click", () => {
    play(ROCK);
});

paperBtn.addEventListener("click", () => {
    play(PAPER);
});

scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});

function play(userOpt) {
    setTimeout(() => {
        const machineopt = calcMachineOpt();
        const result = calcResult(userOpt, machineopt);
        



        userImg.src = "./img/" + userOpt + ".png";
        machineImg.src = "./img/" + machineopt + ".png";
        console.log(userOpt);
        console.log(machineopt);

        switch (result) {
            case TIE:
                resultText.innerHTML = "You have tied!";
                break;
            case WIN:
                resultText.innerHTML = "You Win!!!";
                break;
            case LOST:
                resultText.innerHTML = "You lost HAHA!!";
                break;
        }
    }, 2000);
}

function calcMachineOpt() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOpt, machineopt) {
    if (userOpt === machineopt) {
        return TIE;
    } else if (
        (userOpt === ROCK && machineopt === SCISSORS) ||
        (userOpt === PAPER && machineopt === ROCK) ||
        (userOpt === SCISSORS && machineopt === PAPER)
    ) {
        return WIN;
    } else {
        return LOST;
    }
}
