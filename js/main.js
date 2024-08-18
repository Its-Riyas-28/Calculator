const screen = document.getElementById("screen");

function appendTodisplay(input) {
  screen.value += input;
}

function calculate() {
  try {
    let result = eval(screen.value);

    if (typeof result === "number" && isFinite(result)) {
      // Round to 3 decimal places
      if (screen.value.includes(".")) {
        result = result.toFixed(3);
      }
    } else {
      result = "Invalid Input";
    }

    screen.value = result;
  } catch {
    screen.value = "Invalid Input";
  }
}

function clearDisplay() {
  screen.value = "";
}

function deleteLastCharacter() {
  screen.value = screen.value.slice(0, -1);
}
