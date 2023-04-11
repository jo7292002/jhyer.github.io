const calculator = document.getElementById('calculator');
const screen = document.getElementById('screen');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');

let currentNumber = '';
let currentOperator = null;
let firstNumber = null;

function updateScreen() {
  screen.innerText = currentNumber;
}

function clearScreen() {
  currentNumber = '';
  currentOperator = null;
  firstNumber = null;
  updateScreen();
}

function handleNumberButtonClick(event) {
  const number = event.target.innerText;
  currentNumber += number;
  updateScreen();
}

function handleOperatorButtonClick(event) {
  const operator = event.target.innerText;

  if (firstNumber === null) {
    firstNumber = parseFloat(currentNumber);
  } else if (currentOperator !== null) {
    const result = calculate();
    currentNumber = result.toString();
    firstNumber = result;
  }

  currentNumber = '';
  currentOperator = operator;
}

function handleCalculateButtonClick() {
  if (currentOperator !== null) {
    const result = calculate();
    currentNumber = result.toString();
    currentOperator = null;
    firstNumber = null;
    updateScreen();
  }
}

function calculate() {
  const secondNumber = parseFloat(currentNumber);
  let result = 0;

  switch (currentOperator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
    default:
      break;
  }

  return result;
}

clearButton.addEventListener('click', clearScreen);
calculateButton.addEventListener('click', handleCalculateButtonClick);

for (const operatorButton of operatorButtons) {
  operatorButton.addEventListener('click', handleOperatorButtonClick);
}

for (const numberButton of numberButtons) {
  numberButton.addEventListener('click', handleNumberButtonClick);
}
