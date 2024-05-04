// input/output
const input = document.querySelector(".calculator__output");
//btns with numbers
const number = document.querySelectorAll(".numbers");
//operators (+-*/)
const operators = document.querySelectorAll(".calculator__key--operator");
// result btn (=)
const result = document.querySelector(".calculator__key--enter");
//clear btn
const clear = document.getElementById("clear");
//decimal
const decimal = document.getElementById("decimal");

// once a number btn is clicked, it's displayed in the output.
//initial 0 is replaced with ""
//if the 1st number is 0, another number can be added after math operator
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (event) {
    if (
      input.innerHTML[0] == 0 &&
      (actionSign.length === 1 || decimalCount === 1)
    ) {
      input.innerHTML += event.target.innerHTML;
    } else {
      input.innerHTML =
        input.innerHTML.replace(/^0+/, "") + event.target.innerHTML;
    }
  });
}

//new variable to omit math operators being displayed multiple times at once
//and to determine which action should be performed once "=" is clicked
//once a math operator btn is clicked, it's displayed in the output.
let actionSign = "";
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function (event) {
    if (actionSign.length === 0) {
      input.innerHTML += event.target.textContent.trim();
      actionSign = event.target.textContent.trim();
    }
  });
}

// adding decimals
let decimalCount = 0;
decimal.addEventListener("click", () => {
  if (decimalCount === 0) {
    input.innerHTML += ".";
    decimalCount++;
  } else if (decimalCount == 1 && actionSign.length == 1) {
    input.innerHTML += ".";
    decimalCount++;
  }
});

// splitting 2 numbers by operator and showing result
result.addEventListener("click", () => {
  let x = parseFloat(input.textContent.split(actionSign)[0]);
  console.log(x);
  let y = parseFloat(input.textContent.split(actionSign)[1]);
  console.log(y);
  let tempResult = 0;
  switch (actionSign) {
    case "+":
      tempResult = x + y;
      break;
    case "-":
      tempResult = x - y;
      break;
    case "*":
      tempResult = x * y;
      break;
    case "÷":
      if (y === 0) {
        alert(`Pls stop`);
        tempResult = 0;
      } else {
        tempResult = x / y;
      }
      break;
  }
  input.innerHTML = tempResult;
  //math operators storage is cleared.
  //if the result has a decimal, we set out decimal count to 1
  //or set it to 0 if the result has no decimals
  actionSign = "";
  if (input.textContent.includes(".")) {
    decimalCount = 1;
  } else {
    decimalCount = 0;
  }
});

// setting everything to 0 with clear btn
clear.addEventListener("click", () => {
  input.innerHTML = "0";
  actionSign = "";
  decimalCount = 0;
});
