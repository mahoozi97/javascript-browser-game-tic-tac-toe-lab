function computer() {
  let range = range2();

  while (toggle && (button.includes("1") || button.includes("0"))) {
    if (range > 0 && range < 1 / 9 && button[0] !== "x" && button[0] === "0") {
      button[0] = "o";
      toggle = false;
      console.log(range);
    } else {
      range = 0;
      range = range2();
    }

    if (
      range > 1 / 9 &&
      range < 2 / 9 &&
      button[1] !== "x" &&
      button[1] === "0"
    ) {
      button[1] = "o";
      toggle = false;
    } else {
      range = 0;
      range = range2();
    }

    if (
      range > 2 / 9 &&
      range < 3 / 9 &&
      button[2] !== "x" &&
      button[2] === "1"
    ) {
      button[2] = "o";
      toggle = false;
    } else {
      range = 0;
      range = range2();
    }

    if (
      range > 3 / 9 &&
      range < 4 / 9 &&
      button[3] !== "x" &&
      button[3] === "1"
    ) {
      button[3] = "o";
      toggle = false;
    } else {
      range = 0;
      range = range2();
    }

    if (
      range > 4 / 9 &&
      range < 5 / 9 &&
      button[4] !== "x" &&
      button[4] === "1"
    ) {
      button[4] = "o";
      toggle = false;
    } else {
      range = 0;
      range = range2();
    }

    if (
      range > 5 / 9 &&
      range < 6 / 9 &&
      button[5] !== "x" &&
      button[5] === "0"
    ) {
      button[5] = "o";
      toggle = false;
    } else {
      range = 0;
      range = range2();
    }

    if (
      range > 6 / 9 &&
      range < 7 / 9 &&
      button[6] !== "x" &&
      button[6] === "0"
    ) {
      button[6] = "o";
      toggle = false;
    } else {
      range = 0;
      range = range2();
    }

    if (
      range > 7 / 9 &&
      range < 8 / 9 &&
      button[7] !== "x" &&
      button[7] === "0"
    ) {
      button[7] = "o";
      toggle = false;
    } else {
      range = 0;
      range = range2();
    }

    if (
      range > 8 / 9 &&
      range < 9 / 9 &&
      button[8] !== "x" &&
      button[8] === "1"
    ) {
      button[8] = "o";
      toggle = false;
    } else {
      range = 0;
      range = range2();
    }

    console.log("while is stopped", button, toggle, range);
    //break;
  }
}
