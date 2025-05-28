let display = document.getElementById("display").value;

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
  if (currentInput === "") {
    return;
  }
  if (currentInput !== "") {
    calculate();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  document.getElementById("display").innerHTML =
    previousInput + currentOperation;
}

function calculate() {
  if (previousInput === "" || currentInput === "") {
    return;
  }
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

  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  document.getElementById("display").innerHTML = currentInput;
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperation = "";
  document.getElementById("display").innerHTML = "";
}
