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
    message = "user win";
    gameOver = true;
    return "user win";
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
    message = "computer win";
    gameOver = true;
    return "computer win";
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
    alert(`${message} - You: ${score.user}, Computer: ${score.computer}`);
    window.location.reload()
    gameOver = true;
    isPlayerTurn = false;
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


button0.addEventListener("click", () => {
  if (!isPlayerTurn && button[0] === "0") {
    button[0] = "x";
    button0.textContent = button[0];
    isPlayerTurn = true;
    handleMessage();
  }
});


button1.addEventListener("click", () => {
  if (!isPlayerTurn && button[1] === "0") {
    button[1] = "x";
    button1.textContent = button[1];
    isPlayerTurn = true;
    handleMessage();
  }
});


button2.addEventListener("click", () => {
  if (!isPlayerTurn && button[2] === "1") {
    button[2] = "x";
    button2.textContent = button[2];
    isPlayerTurn = true;
    handleMessage();
  }
});


button3.addEventListener("click", () => {
  if (!isPlayerTurn && button[3] === "1") {
    button[3] = "x";
    button3.textContent = button[3];
    isPlayerTurn = true;
    handleMessage();
  }
});


button4.addEventListener("click", () => {
  if (!isPlayerTurn && button[4] === "1") {
    button[4] = "x";
    button4.textContent = button[4];
    isPlayerTurn = true;
    handleMessage();
  }
});


button5.addEventListener("click", () => {
  if (!isPlayerTurn && button[5] === "0") {
    button[5] = "x";
    button5.textContent = button[5];
    isPlayerTurn = true;
    handleMessage();
  }
});


button6.addEventListener("click", () => {
  if (!isPlayerTurn && button[6] === "0") {
    button[6] = "x";
    button6.textContent = button[6];
    isPlayerTurn = true;
    handleMessage();
  }
});


button7.addEventListener("click", () => {
  if (!isPlayerTurn && button[7] === "0") {
    button[7] = "x";
    button7.textContent = button[7];
    isPlayerTurn = true;
    handleMessage();
  }
});


button8.addEventListener("click", () => {
  if (!isPlayerTurn && button[8] === "1") {
    button[8] = "x";
    button8.textContent = button[8];
    isPlayerTurn = true;
    handleMessage();
  }
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