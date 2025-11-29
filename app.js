let board = ["", "", "", "", "", "", "", "", ""];
let isComputer = false;
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
const playAgainBtn = document.querySelector("#play-again");
const restartBtn = document.querySelector("#restart");
const messageEl = document.querySelector("#message");
const gameConsole = document.querySelector(".board");

function checkWinner() {
  if (
    (board[0] === board[1] && board[1] === board[2] && board[1] === "x") ||
    (board[3] === board[4] && board[4] === board[5] && board[4] === "x") ||
    (board[6] === board[7] && board[7] === board[8] && board[7] === "x") ||
    (board[0] === board[3] && board[3] === board[6] && board[3] === "x") ||
    (board[1] === board[4] && board[4] === board[7] && board[4] === "x") ||
    (board[2] === board[5] && board[5] === board[8] && board[5] === "x") ||
    (board[0] === board[4] && board[4] === board[8] && board[4] === "x") ||
    (board[2] === board[4] && board[4] === board[6] && board[4] === "x")
  ) {
    score.user++;
    console.log("user Win", board);
    message = "You Win!";
    gameOver = true;
    return "You Win!";
  } else if (
    (board[0] === board[1] && board[1] === board[2] && board[1] === "o") ||
    (board[3] === board[4] && board[4] === board[5] && board[4] === "o") ||
    (board[6] === board[7] && board[7] === board[8] && board[7] === "o") ||
    (board[0] === board[3] && board[3] === board[6] && board[3] === "o") ||
    (board[1] === board[4] && board[4] === board[7] && board[4] === "o") ||
    (board[2] === board[5] && board[5] === board[8] && board[5] === "o") ||
    (board[0] === board[4] && board[4] === board[8] && board[4] === "o") ||
    (board[2] === board[4] && board[4] === board[6] && board[4] === "o")
  ) {
    score.computer++;
    console.log("computer win", board);
    message = "You Lose!";
    gameOver = true;
    return "You Lose!";
  } else {
    if (!board.includes("")) {
      console.log("drew", board);
      message = "Tied";
      gameOver = true;
      return "Tied";
    }
  }
}

function showHiddenButtons() {
  restartBtn.classList.remove("hidden");
  playAgainBtn.classList.remove("hidden");
}

function handleMessage() {
  checkWinner();
  if (message !== "") {
    messageEl.textContent = `${message} - You: ${score.user}, Computer: ${score.computer}`;
    gameOver = true;
    isComputer;
    showHiddenButtons();
    if (message.startsWith("You Win")) {
      messageEl.style.color = "green";
    } else if (message.startsWith("You Lose")) {
      messageEl.style.color = "red";
    } else {
      messageEl.style.color = "blue";
    }
    return;
  }
}

function computer() {
  // Generates a random number from 0–8
  let range = Math.floor(Math.random() * 9);

  while (isComputer && board.includes("")) {
    if (board[range] !== "x" && board[range] !== "o") {
      board[range] = "o";
      isComputer = false;
    }
    range = Math.floor(Math.random() * 9);
  }
}

function playAgain() {
  board = ["", "", "", "", "", "", "", "", ""];
  isComputer = false;
  gameOver = false;

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
  messageEl.style.color = "";

  restartBtn.classList.add("hidden");
  playAgainBtn.classList.add("hidden");
}

buttonsEl.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let eventId = event.target.id;
    if (!isComputer && !gameOver) {
      if (eventId === "js-0") {
        if (board[0] === "") {
          board[0] = "x";
          btn.textContent = board[0];
          isComputer = true;
          handleMessage();
        }
      } else if (eventId === "js-1") {
        if (board[1] === "") {
          board[1] = "x";
          btn.textContent = board[1];
          isComputer = true;
          handleMessage();
        }
      } else if (eventId === "js-2") {
        if (board[2] === "") {
          board[2] = "x";
          btn.textContent = board[2];
          isComputer = true;
          handleMessage();
        }
      } else if (eventId === "js-3") {
        if (board[3] === "") {
          board[3] = "x";
          btn.textContent = board[3];
          isComputer = true;
          handleMessage();
        }
      } else if (eventId === "js-4") {
        if (board[4] === "") {
          board[4] = "x";
          btn.textContent = board[4];
          isComputer = true;
          handleMessage();
        }
      } else if (eventId === "js-5") {
        if (board[5] === "") {
          board[5] = "x";
          btn.textContent = board[5];
          isComputer = true;
          handleMessage();
        }
      } else if (eventId === "js-6") {
        if (board[6] === "") {
          board[6] = "x";
          btn.textContent = board[6];
          isComputer = true;
          handleMessage();
        }
      } else if (eventId === "js-7") {
        if (board[7] === "") {
          board[7] = "x";
          btn.textContent = board[7];
          isComputer = true;
          handleMessage();
        }
      } else if (eventId === "js-8") {
        console.log(board[8]);
        if (board[8] === "") {
          board[8] = "x";
          btn.textContent = board[8];
          isComputer = true;
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
    if (board[0] === "o") {
      button0.textContent = board[0];
    }

    if (board[1] === "o") {
      button1.textContent = board[1];
    }
    if (board[2] === "o") {
      button2.textContent = board[2];
    }
    if (board[3] === "o") {
      button3.textContent = board[3];
    }
    if (board[4] === "o") {
      button4.textContent = board[4];
    }
    if (board[5] === "o") {
      button5.textContent = board[5];
    }
    if (board[6] === "o") {
      button6.textContent = board[6];
    }
    if (board[7] === "o") {
      button7.textContent = board[7];
    }
    if (board[8] === "o") {
      button8.textContent = board[8];
    }
  }
});

playAgainBtn.addEventListener("click", () => {
  playAgain();
});

restartBtn.addEventListener("click", () => {
  playAgain();
  score.computer = 0;
  score.user = 0;
});
