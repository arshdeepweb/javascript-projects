// const display = document.querySelector("#display").value;
// let show = document.querySelector("showbutton()");


// function show(){
//   display += value;
// }

// index.js

// Function to update the display with the clicked button value
function showButton(value) {
  document.querySelector("#display").value += value;
}

// Function to clear the display
function clearResult() {
  document.getElementById('display').value = '';
}

// Function to evaluate the expression and update the display
function result() {
  document.querySelector("#display").value = eval(document.querySelector("#display").value);
}

// Function to remove the last character from the display
function backspace() {
  document.querySelector("#display").value = document.querySelector("#display").value.slice(0, -1);
}

// Event listeners for each button
document.getElementById('btnOpenParenthesis').addEventListener('click', function () {
  showButton('(');
});

document.getElementById('btnCloseParenthesis').addEventListener('click', function () {
  showButton(')');
});

document.getElementById('btnBackspace').addEventListener('click', backspace);

document.getElementById('btnClear').addEventListener('click', clearResult);

document.getElementById('btn7').addEventListener('click', function () {
  showButton('7');
});

document.getElementById('btn8').addEventListener('click', function () {
  showButton('8');
});

document.getElementById('btn9').addEventListener('click', function () {
  showButton('9');
});

document.getElementById('btnDivide').addEventListener('click', function () {
  showButton('/');
});

document.getElementById('btn4').addEventListener('click', function () {
  showButton('4');
});

document.getElementById('btn5').addEventListener('click', function () {
  showButton('5');
});

document.getElementById('btn6').addEventListener('click', function () {
  showButton('6');
});

document.getElementById('btnMultiply').addEventListener('click', function () {
  showButton('*');
});

document.getElementById('btn1').addEventListener('click', function () {
  showButton('1');
});

document.getElementById('btn2').addEventListener('click', function () {
  showButton('2');
});

document.getElementById('btn3').addEventListener('click', function () {
  showButton('3');
});

document.getElementById('btnSubtract').addEventListener('click', function () {
  showButton('-');
});

document.getElementById('btn0').addEventListener('click', function () {
  showButton('0');
});

document.getElementById('btnDecimal').addEventListener('click', function () {
  showButton('.');
});

document.getElementById('btnEqual').addEventListener('click', result);

document.getElementById('btnAdd').addEventListener('click', function () {
  showButton('+');
});
