// two parameter functions

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// one parameter functions => to do!

const inverse = (a) => {
  return 1 / a;
};

const square = (a) => {
  return a ** 2;
};

const root = (a) => {
  return sqrt(a);
};

const operate = (a, b, operation) => {
  if (operation == "add") {
    return add(a, b);
  } else if (operation == "subtract") {
    return subtract(a, b);
  } else if (operation == "multiply") {
    return multiply(a, b);
  } else if (operation == "divide") {
    if (b == 0) {
      return "ERROR";
    }
    return divide(a, b);
  }
};

let first;
let second;
let operator;

let display = document.getElementById("display");
const clear = document.getElementById("clear");
const clearEntry = document.getElementById("clear-entry");

let currentDisplay;

function init() {
  currentDisplay = "0";
  display.innerHTML = currentDisplay;
}

clear.addEventListener("click", () => {
  clearCalculator();
});
clearEntry.addEventListener("click", () => {
  clearCalculator();
});

// values = nums, two parameter functions, one parameter functions, other
// other = submit, decimal, negative

function getNumber(n) {
  let btnValue = n.innerText;
  displayNumber(btnValue);
}

let tracker;

function displayNumber(n) {
  if (display.innerHTML == 0) {
    display.innerHTML = n;
  } else {
    display.innerHTML += n;
  }
}

function clearCalculator() {}

init();
