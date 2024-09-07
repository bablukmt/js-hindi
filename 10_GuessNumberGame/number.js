let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const number = document.querySelector("#number");
const prevGuess = document.querySelector("#prevGuess");
const remainGuess = document.querySelector("#remainGuess");
const message = document.querySelector("#message");
const restart = document.querySelector("#restart");

let prevGuessess = [];
let remainGuessess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const getNumber = parseInt(number.value);
    validateNumber(getNumber);
  });
}

function validateNumber(getNumber) {
  if (isNaN(getNumber) || getNumber < 1 || getNumber > 100) {
    alert(`Please enter a valid number between 1 to 100`);
  } else {
    prevGuessess.push(getNumber);
    if (remainGuessess === 11) {
      message.innerHTML = `Game Over!! Try again ${randomNumber}`;
      gameEnd();
    } else {
      checkGuess(getNumber);
    }
  }
}

function checkGuess(getNumber) {
  if (getNumber === randomNumber) {
    message.innerHTML = "Congratulations!! you won the game!!";
    gameEnd();
  } else {
    message.innerHTML = `Opps! Try again!!`;
    number.value = "";
    prevGuess.innerHTML += `<span>${getNumber}</span>`;
    remainGuessess++;
    remainGuess.innerHTML = `${11 - remainGuessess}`;
  }
}

function gameEnd() {
  number.value = "";
  number.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  restart.innerHTML = `<button id="restart-btn">Restart Again</button>`;
  playGame = false;
  startGame();
}

function startGame() {
  const restartButton = document.querySelector("#restart-btn");
  restartButton.addEventListener("click", function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuessess = [];
    remainGuessess = 1;
    restart.innerHTML = "";
    message.innerHTML = "";
    prevGuess.innerHTML = "";
    number.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    remainGuess.innerHTML = `${11 - remainGuessess}`;
  });
}
