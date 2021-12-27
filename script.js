/** CONSTANTS */

const display = document.querySelector('.display');
const addBtn = document.querySelector('.add-btn');
const minusBtn = document.querySelector('.minus-btn');
let displayValue = 0;
display.textContent = displayValue;

/** FUNCTIONS */

const addCallBack = () => {
  displayValue += 1;
  display.textContent = displayValue;
};

const minusCallBack = () => {
  if (displayValue != 0) {
    displayValue -= 1;
    display.textContent = displayValue;
  } else {
    return;
  }
};

/** EVENT LISTENERS */

addBtn.addEventListener('click', addCallBack);

minusBtn.addEventListener('click', minusCallBack);
