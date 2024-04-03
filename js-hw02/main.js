/* 1. Request a three-digit number from a user 
and check whether it has identical digits in it. */

let number = prompt(
  "Please type in a three-digit number and I will check whether it has identical digits in it."
);
if (isNaN(+number)) {
  console.log(`Not a number.`);
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

// let fiveUnitNumber = prompt(
//   "Please type in a five-unit number and I will check if it is a palindrome."
// );
// if (isNaN(+fiveUnitNumber)) {
//   console.log(`Not a number.`);
// } else if (fiveUnitNumber.length > 5) {
//   console.log(`Please type in a five-unit number`);
// } else if (typeof fiveUnitNumber == "undefined") {
//   console.log(`Invalid input.`);
// } else if (
//   fiveUnitNumber.charAt(0) == fiveUnitNumber.charAt(4) &&
//   fiveUnitNumber.charAt(1) == fiveUnitNumber.charAt(3)
// ) {
//   console.log(`The number is a palindrome.`);
// } else {
//   console.log(`The number is not a palindrome.`);
// }

/* 3. Execute a currency converter. 
A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. */

// let usdAmmount = prompt(
//   "This is a converter from USD to EUR/SEK/AUD. Please specify the ammount in USD"
// );
// let chooseCurrency = prompt("Choose a currency: EUR/SEK/AUD");
// const exchangeRateEur = 0.93;
// const exchangeRateSek = 10.65;
// const exchangeRateAud = 1.52;
// const converterEur = usdAmmount * exchangeRateEur;
// const converterSek = usdAmmount * exchangeRateSek;
// const converterAud = usdAmmount * exchangeRateAud;
// if (isNaN(usdAmmount)) {
//   console.log(`Not a number.`);
// } else if (
//   typeof usdAmmount != "undefined" &&
//   typeof chooseCurrency != "undefined"
// ) {
//   console.log(`Invalid input.`);
// } else if (chooseCurrency == "EUR") {
//   console.log(`This is your converted ammount: ${converterEur} EUR.`);
// } else if (chooseCurrency == "SEK") {
//   console.log(`This is your converted ammount: ${converterSek} SEK.`);
// } else if (chooseCurrency == "AUD") {
//   console.log(`This is your converted ammount: ${converterAud} AUD.`);
// }

/* 4. Request a length of a circumference and a perimeter of a square from a user. 
Define whether that circumference can fit in that square. */

// let lengthCircum = prompt("Please specify a length of a circumference in cm.");
// let squarePerim = prompt("Please specify a perimeter of a square in cm.");

// const sideLength = squarePerim / 4;
// const pi = 3.14;
// const diameterCircum = lengthCircum / pi;
// if (isNaN(+lengthCircum) && isNaN(+squarePerim)) {
//   console.log(`Not a number.`);
// } else if (
//   typeof lengthCircum != "undefined" &&
//   typeof squarePerim != "undefined" &&
//   typeof lengthCircum != "null" &&
//   typeof squarePerim != "null"
// ) {
//   console.log(`Invalid input.`);
// } else if (diameterCircum <= sideLength) {
//   console.log(`Circumference can fit in that square.`);
// } else {
//   console.log(`Circumference can not fit in that square.`);
// }
