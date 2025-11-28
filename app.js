let button = ["0", "0", "1", "1", "1", "0", "0", "0", "1"];
let isPlayerTurn = false;
let score = {
  user: 0,
  computer: 0,
};
let message = "";
let gameOver = false;

const button0 = document.getElementById("js-0");
const button1 = document.getElementById("js-1");
const button2 = document.getElementById("js-2");
const button3 = document.getElementById("js-3");
const button4 = document.getElementById("js-4");
const button5 = document.getElementById("js-5");
const button6 = document.getElementById("js-6");
const button7 = document.getElementById("js-7");
const button8 = document.getElementById("js-8");
const buttonsEl = document.querySelectorAll(".sqr");
const tryAgainBtn = document.querySelector("#try-again");
const restartBtn = document.querySelector("#restart");
const messageEl = document.querySelector("#message");
const gameConsole = document.querySelector("#game-js");

function checkWinner() {
  if (
    (button[0] === button[1] && button[1] === button[2] && button[1] === "x") ||
    (button[3] === button[4] && button[4] === button[5] && button[4] === "x") ||
    (button[6] === button[7] && button[7] === button[8] && button[7] === "x") ||
    (button[0] === button[3] && button[3] === button[6] && button[3] === "x") ||
    (button[1] === button[4] && button[4] === button[7] && button[4] === "x") ||
    (button[2] === button[5] && button[5] === button[8] && button[5] === "x") ||
    (button[0] === button[4] && button[4] === button[8] && button[4] === "x") ||
    (button[2] === button[4] && button[4] === button[6] && button[4] === "x")
  ) {
    score.user++;
    console.log("user win", button);
    message = "You win!";
    gameOver = true;
    return "You win!";
  } else if (
    (button[0] === button[1] && button[1] === button[2] && button[1] === "o") ||
    (button[3] === button[4] && button[4] === button[5] && button[4] === "o") ||
    (button[6] === button[7] && button[7] === button[8] && button[7] === "o") ||
    (button[0] === button[3] && button[3] === button[6] && button[3] === "o") ||
    (button[1] === button[4] && button[4] === button[7] && button[4] === "o") ||
    (button[2] === button[5] && button[5] === button[8] && button[5] === "o") ||
    (button[0] === button[4] && button[4] === button[8] && button[4] === "o") ||
    (button[2] === button[4] && button[4] === button[6] && button[4] === "o")
  ) {
    score.computer++;
    console.log("computer win", button);
    message = "You Lose!";
    gameOver = true;
    return "You Lose!";
  } else {
    if (!button.includes("1") && !button.includes("0")) {
      console.log("drew", button);
      message = "Tied";
      gameOver = true;
      return "Tied";
    }
  }
}

function handleMessage() {
  checkWinner();
  if (message !== "") {
    messageEl.textContent = `${message} - You: ${score.user}, Computer: ${score.computer}`;
    gameOver = true;
    isPlayerTurn;
    return;
  }
}

function computer() {
  let range = Math.random();

  while (isPlayerTurn && (button.includes("1") || button.includes("0"))) {
    if (range > 0 && range < 1 / 9 && button[0] !== "x" && button[0] === "0") {
      button[0] = "o";
      isPlayerTurn = false;
    }

    if (
      range > 1 / 9 &&
      range < 2 / 9 &&
      button[1] !== "x" &&
      button[1] === "0"
    ) {
      button[1] = "o";
      isPlayerTurn = false;
    }

    if (
      range > 2 / 9 &&
      range < 3 / 9 &&
      button[2] !== "x" &&
      button[2] === "1"
    ) {
      button[2] = "o";
      isPlayerTurn = false;
    }

    if (
      range > 3 / 9 &&
      range < 4 / 9 &&
      button[3] !== "x" &&
      button[3] === "1"
    ) {
      button[3] = "o";
      isPlayerTurn = false;
    }

    if (
      range > 4 / 9 &&
      range < 5 / 9 &&
      button[4] !== "x" &&
      button[4] === "1"
    ) {
      button[4] = "o";
      isPlayerTurn = false;
    }

    if (
      range > 5 / 9 &&
      range < 6 / 9 &&
      button[5] !== "x" &&
      button[5] === "0"
    ) {
      button[5] = "o";
      isPlayerTurn = false;
    }

    if (
      range > 6 / 9 &&
      range < 7 / 9 &&
      button[6] !== "x" &&
      button[6] === "0"
    ) {
      button[6] = "o";
      isPlayerTurn = false;
    }

    if (
      range > 7 / 9 &&
      range < 8 / 9 &&
      button[7] !== "x" &&
      button[7] === "0"
    ) {
      button[7] = "o";
      isPlayerTurn = false;
    }

    if (
      range > 8 / 9 &&
      range < 9 / 9 &&
      button[8] !== "x" &&
      button[8] === "1"
    ) {
      button[8] = "o";
      isPlayerTurn = false;
    }

    range = 0;
    range = Math.random();

    console.log("while is stopped", button, isPlayerTurn, range);
  }
}

function tryAgain() {
  button = ["0", "0", "1", "1", "1", "0", "0", "0", "1"];
  isPlayerTurn = false;
  button0.textContent = "";
  button1.textContent = "";
  button2.textContent = "";
  button3.textContent = "";
  button4.textContent = "";
  button5.textContent = "";
  button6.textContent = "";
  button7.textContent = "";
  button8.textContent = "";
  message = "";
  messageEl.textContent = "";
}

buttonsEl.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.id);
    let targetId = event.target.id;
    if (!isPlayerTurn) {
      if (targetId === "js-0") {
        if (button[0] === "0") {
          button[0] = "x";
          btn.textContent = button[0];
          isPlayerTurn = true;
          handleMessage();
        }
      } else if (targetId === "js-1") {
        if (button[1] === "0") {
          button[1] = "x";
          btn.textContent = button[1];
          isPlayerTurn = true;
          handleMessage();
        }
      } else if (targetId === "js-2") {
        if (button[2] === "1") {
          button[2] = "x";
          btn.textContent = button[2];
          isPlayerTurn = true;
          handleMessage();
        }
      } else if (targetId === "js-3") {
        if (button[3] === "1") {
          button[3] = "x";
          btn.textContent = button[3];
          isPlayerTurn = true;
          handleMessage();
        }
      } else if (targetId === "js-4") {
        if (button[4] === "1") {
          button[4] = "x";
          btn.textContent = button[4];
          isPlayerTurn = true;
          handleMessage();
        }
      } else if (targetId === "js-5") {
        if (button[5] === "0") {
          button[5] = "x";
          btn.textContent = button[5];
          isPlayerTurn = true;
          handleMessage();
        }
      } else if (targetId === "js-6") {
        if (button[6] === "0") {
          button[6] = "x";
          btn.textContent = button[6];
          isPlayerTurn = true;
          handleMessage();
        }
      } else if (targetId === "js-7") {
        if (button[7] === "0") {
          button[7] = "x";
          btn.textContent = button[7];
          isPlayerTurn = true;
          handleMessage();
        }
      } else if (targetId === "js-8") {
        if (button[8] === "1") {
          button[8] = "x";
          btn.textContent = button[8];
          isPlayerTurn = true;
          handleMessage();
        }
      }
    }
  });
});

gameConsole.addEventListener("click", () => {
  if (message === "") {
    computer();
    handleMessage();
    if (button[0] === "o") {
      button0.textContent = button[0];
    }

    if (button[1] === "o") {
      button1.textContent = button[1];
    }
    if (button[2] === "o") {
      button2.textContent = button[2];
    }
    if (button[3] === "o") {
      button3.textContent = button[3];
    }
    if (button[4] === "o") {
      button4.textContent = button[4];
    }
    if (button[5] === "o") {
      button5.textContent = button[5];
    }
    if (button[6] === "o") {
      button6.textContent = button[6];
    }
    if (button[7] === "o") {
      button7.textContent = button[7];
    }
    if (button[8] === "o") {
      button8.textContent = button[8];
    }
  }
});

tryAgainBtn.addEventListener("click", () => {
  tryAgain();
});

restartBtn.addEventListener("click", () => {
  tryAgain();
  score.computer = 0;
  score.user = 0;
});
