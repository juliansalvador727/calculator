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
