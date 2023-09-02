const resultInput = document.getElementById('result');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


let currentInput = '';
let operator = '';
let previousInput = '';

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.value;
    resultInput.value = currentInput;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentInput !== '') {
      operator = button.value;
      previousInput = currentInput;
      currentInput = '';
    }
  });
});

calculateButton.addEventListener('click', () => {
  if (currentInput !== '' && previousInput !== '' && operator !== '') {
    const result = eval(`${previousInput} ${operator} ${currentInput}`);
    resultInput.value = result;
    currentInput = result;
    previousInput = '';
    operator = '';
  }
});

clearButton.addEventListener('click', () => {
  currentInput = '';
  operator = '';
  previousInput = '';
  resultInput.value = '';
});


darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});
