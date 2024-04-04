/* 1. Request a three-digit number from a user 
and check whether it has identical digits in it. */

let number = prompt(
  "Please type in a three-digit number and I will check whether it has identical digits in it."
);
if (number.length != 3 || isNaN(+number)) {
  console.log(`Invalid input.`);
} else if (
  number.charAt(0) == number.charAt(1) &&
  number.charAt(0) == number.charAt(2)
) {
  console.log(`3 digits are equal.`);
} else if (number.charAt(0) == number.charAt(1)) {
  console.log(`The 1st digit equals the 2nd digit.`);
} else if (number.charAt(0) == number.charAt(2)) {
  console.log(`The 1st digit equals the 3rd digit.`);
} else if (number.charAt(1) == number.charAt(2)) {
  console.log(`The 2nd digit equals the 3rd digit.`);
} else {
  console.log(`The number does not have identical digits in it.`);
}

// 2. Request a five-unit number from a user and check whether it is a palindrome.

let fiveUnitNumber = prompt(
  "Please type in a five-unit number and I will check if it is a palindrome."
);
if (isNaN(+fiveUnitNumber) || fiveUnitNumber.length != 5) {
  console.log(`Invalid input.`);
} else if (
  fiveUnitNumber.charAt(0) == fiveUnitNumber.charAt(4) &&
  fiveUnitNumber.charAt(1) == fiveUnitNumber.charAt(3)
) {
  console.log(`The number is a palindrome.`);
} else {
  console.log(`The number is not a palindrome.`);
}

/* 3. Execute a currency converter. 
A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. */

let usdAmmount = prompt(
  "This is a converter from USD to EUR/SEK/AUD. Please specify the ammount in USD"
);
let chooseCurrency = prompt("Choose a currency: EUR/SEK/AUD");
const exchangeRateEur = 0.93;
const exchangeRateSek = 10.65;
const exchangeRateAud = 1.52;
const converterEur = usdAmmount * exchangeRateEur;
const converterSek = usdAmmount * exchangeRateSek;
const converterAud = usdAmmount * exchangeRateAud;
if (isNaN(usdAmmount) || usdAmmount.length == 0 || chooseCurrency.length == 0) {
  console.log(`Invalid input.`);
} else if (chooseCurrency == "EUR") {
  console.log(
    `This is your converted ammount: ${converterEur.toFixed(2)} EUR.`
  );
} else if (chooseCurrency == "SEK") {
  console.log(
    `This is your converted ammount: ${converterSek.toFixed(2)} SEK.`
  );
} else if (chooseCurrency == "AUD") {
  console.log(
    `This is your converted ammount: ${converterAud.toFixed(2)} AUD.`
  );
} else {
  console.log(`Invalid currency.`);
}

/* 4. Request a length of a circumference and a perimeter of a square from a user. 
Define whether that circumference can fit in that square. */

let lengthCircum = prompt("Please specify a length of a circumference in cm.");
let squarePerim = prompt("Please specify a perimeter of a square in cm.");

const sideLength = squarePerim / 4;
const pi = 3.14;
const diameterCircum = lengthCircum / pi;
if (
  isNaN(+lengthCircum) ||
  isNaN(+squarePerim) ||
  lengthCircum <= 0 ||
  squarePerim <= 0
) {
  console.log(`Invalid input.`);
} else if (diameterCircum <= sideLength) {
  console.log(`Circumference can fit in that square.`);
} else {
  console.log(`Circumference can not fit in that square.`);
}

/* 5. Request a date (dd:mm:yy) and put out the one that goes after it. 
Pay attention to the start of a new month, new year, and also leap years. */

let userDate = prompt("Please specify a date (dd:mm:yy)");

const myArray = userDate.split(":");
let date = myArray[0];
let month = myArray[1];
let year = `20${myArray[2]}`;

let date1 = new Date(year, month - 1, date);

console.log(`Your initial date is ${date1.toLocaleString()}`);
date1.setDate(date1.getDate() + 1);
console.log(`The next date is ${date1.toLocaleString()}`);

// 6. Request a username and show a greeting using string template.

let userName = prompt("Please type in your username");
console.log(`Hello, ${userName}`);

/* 7. Request names and ages for two children. 
Check if child 1 is older and if its name is Tim. */

let nameChild1 = prompt("Please type in 1st child's name");
let ageChild1 = prompt("Please type in 1st child's age");
let nameChild2 = prompt("Please type in 2nd child's name");
let ageChild2 = prompt("Please type in 2nd child's age");

if (nameChild1 == "Tim" && ageChild1 > ageChild2) {
  console.log(
    `1st child's name is ${nameChild1} and he is older than ${nameChild2}`
  );
} else {
  console.log(`The checking did not pass.`);
}

// 8. Request a color and check if the color is on the flag of the Republic of South Africa.

let userColor = prompt(
  "Please type in a color and I will tell if the color is on the flag of the Republic of South Africa"
);
if (
  userColor == "yellow" ||
  userColor == "white" ||
  userColor == "green" ||
  userColor == "red" ||
  userColor == "blue" ||
  userColor == "black"
) {
  console.log(
    `Yes, ${userColor} color is on the flag of the Republic of South Africa.`
  );
} else {
  console.log(
    `No, ${userColor} color is not on the flag of the Republic of South Africa.`
  );
}

// 9. Request a number and check if it is an odd number.

let userNumber = prompt(
  "Please type in a number and I will check if it is an odd number."
);
if (userNumber == 0 || isNaN(+userNumber)) {
  console.log(`Invalid number`);
} else if (userNumber % 2 != 0) {
  console.log(`${userNumber} is odd.`);
} else {
  console.log(`${userNumber} is even.`);
}

// 10. Request two numbers, divide them and the result must be an integer(whole number).

let userNumber1 = prompt("Please type in the 1st number.");
let userNumber2 = prompt("Please type in the 2nd number.");
let numberDivision = userNumber1 / userNumber2;
console.log(
  `I divided them and this is the result (whole number): ${parseInt(
    numberDivision
  )}`
);

// 11. Declare a variable without initializing it and check if it is of type null or undefined.

let a;
if (typeof a === "undefined") {
  console.log("The value is undefined");
} else if (a === null) {
  console.log("The value is null");
} else {
  console.log("The value is neither undefined nor null");
}

// 12. Request a number, check if it is a number and if it is between 10 and 50

let userNumberRequest = prompt("Please type in a number");
if (isNaN(+userNumberRequest)) {
  console.log(`it is not a number.`);
} else if (userNumberRequest >= 10 && userNumberRequest <= 50) {
  console.log(`${userNumberRequest} is a number and it is between 10 and 50.`);
}
