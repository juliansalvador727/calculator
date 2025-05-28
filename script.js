let display = document.getElementById("display").innerHTML;

let currentInput = "0";
let currentOperation = "";
let previousInput = "";

document.getElementById("display").innerHTML = currentInput;

function appendNumber(number) {
  if (currentInput !== "0") {
    currentInput += number;
  } else {
    currentInput = number;
  }
  currentInputDisplay = parseInt(currentInput);
  document.getElementById("display").innerHTML = currentInput;
  console.log(currentInput);
}

function appendOperation(operation) {
  document.getElementById("memory").innerHTML = currentInput;
  if (currentInput === "") {
    return;
  }
  if (currentInput !== "") {
    calculate();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  document.getElementById("memory").innerHTML =
    previousInput + " " + currentOperation;
}

function calculate() {
  if (previousInput === "" || currentInput === "") {
    return;
  }
  // let saved = document.getElementById("memory").innerHTML;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);
  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }
  document.getElementById("memory").innerHTML =
    previousInput + " " + currentOperation + " " + currentInput + " =";
  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";

  document.getElementById("display").innerHTML = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  previousInput = "";
  currentOperation = "";
  document.getElementById("memory").innerHTML = "";
  document.getElementById("display").innerHTML = "";
}
