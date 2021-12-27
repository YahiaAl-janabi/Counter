// /** CONSTANTS */

// const display = document.querySelector('.display');
// const addBtn = document.querySelector('.add-btn');
// const minusBtn = document.querySelector('.minus-btn');
// let displayValue = 0;
// display.textContent = displayValue;

// /** FUNCTIONS */

// const addCallBack = () => {
//   displayValue++;
//   display.textContent = displayValue;
// };

// const minusCallBack = () => {
//   if (displayValue != 0) {
//     displayValue--;
//     display.textContent = displayValue;
//   }
// };

// /** EVENT LISTENERS */

// addBtn.addEventListener('click', addCallBack);

// minusBtn.addEventListener('click', minusCallBack);

// !------------------------------------------------------------------------------------------------------------

let count = 0;

/** CONSTANTS */

const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('add-btn')) {
      count++;
    } else if (styles.contains('minus-btn')) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      display.style.color = 'green';
    } else if (count < 0) {
      display.style.color = 'red';
    } else {
      display.style.color = 'black';
    }
    display.textContent = count;
  });
});
