/* 1. Write a program that requests a number from a user and finds the summation of 
every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10 */

// let requestedNumber = prompt(
//   "Type in a number and I will find the summation of every number from 1 to your number"
// );
// if (isNaN(requestedNumber) || requestedNumber <= 0) {
//   console.log("Invalid input.");
// } else {
//   let requestedNumberSum = 0;
//   for (i = 1; i <= requestedNumber; i++) {
//     requestedNumberSum += i;
//   }
//   console.log(requestedNumberSum);
// }

// 2. Request two numbers and find only their largest common divisor.

// let requestedNumber1 = prompt(
//   "Type in the 1st number and I will find their largest common divisor"
// );

// let requestedNumber2 = prompt(
//   "Type in the 2nd number and I will find their largest common divisor"
// );
// let divisor;
// if (
//   isNaN(requestedNumber1) ||
//   isNaN(requestedNumber2) ||
//   requestedNumber1 <= 0 ||
//   requestedNumber2 <= 0
// ) {
//   console.log("Invalid input.");
// } else {
//   for (i = 1; i <= requestedNumber1; i++) {
//     if (requestedNumber1 % i == 0 && requestedNumber2 % i == 0) {
//       divisor = i;
//     }
//   }
//   console.log(divisor);
// }

/* 3. Request a number and display all the divisors of it. 
For example, for number 8 it would be 2, 4, and 8. */

// let requestRandomNumber = prompt(
//   "Type in a number and I will display all its divisors"
// );
// if (isNaN(requestRandomNumber) || requestRandomNumber <= 0) {
//   console.log("Invalid input.");
// } else {
//   for (i = 1; i <= requestRandomNumber; i++) {
//     if (requestRandomNumber % i == 0) {
//       console.log(i);
//     }
//   }
// }

/* 4. Define the number of digits in a requested number. 
For example, there are 4 digits in the number 6834. */

// let requestedNumberOfDigits = prompt(
//   "Type in a number and I will define how many digits it has."
// );
// if (
//   isNaN(requestedNumberOfDigits) ||
//   requestedNumberOfDigits == "" ||
//   requestedNumberOfDigits < 0
// ) {
//   console.log("Invalid input.");
// } else {
//   let x = requestedNumberOfDigits.length;
//   console.log(x);
// }

/* 5. Request 10 numbers from a user and count, how many are positive, negative, or zero. 
Also, count odd and even. Display the statistics. 
There’s only one variable (not 10) needed for input by a user. */

// let numbersFromUser;
// let positiveNumbers = 0;
// let negativeNumbers = 0;
// let zeroNumbers = 0;
// let evenNumbers = 0;
// let oddNumbers = 0;
// let HasCorrectInput = true;

// for (i = 1; i <= 10; i++) {
//   numbersFromUser = prompt(
//     "Please type in a number (one by one in each prompt window)"
//   );
//   if (isNaN(numbersFromUser) || numbersFromUser == "") {
//     HasCorrectInput = false;
//     console.log("Incorrect input.");
//     break;
//   }
//   if (numbersFromUser > 0) {
//     positiveNumbers += 1;
//   }
//   if (numbersFromUser < 0) {
//     negativeNumbers += 1;
//   }
//   if (numbersFromUser == 0) {
//     zeroNumbers += 1;
//   }
//   if (numbersFromUser % 2 == 0) {
//     evenNumbers += 1;
//   } else {
//     oddNumbers += 1;
//   }
// }
// if (HasCorrectInput == true) {
//   console.log(`Statistics:
// There are ${positiveNumbers} positive numbers,
// There are ${negativeNumbers} negative numbers,
// There are ${zeroNumbers} zero numbers,
// There are ${evenNumbers} even numbers,
// There are ${oddNumbers} odd numbers in ypur string of numbers.`);
// }

/* 6. Request favourite fruit from user. 
If it is Peach, Apple or Banana show message that it is your favourite food, 
if it is Pear or Grapefruit show message that you hate it 
otherwise show message that you have not tried this fruit. */

// favFruitUser = prompt("Please type in your favorite fruit");
// switch (favFruitUser) {
//   case "Peach":
//   case "Apple":
//   case "Banana":
//     console.log(`${favFruitUser} is my fav fruit.`);
//     break;
//   case "Pear":
//   case "Grapefruit":
//     console.log(`I hate ${favFruitUser}!`);
//     break;
//   default:
//     if (!isNaN(favFruitUser) || favFruitUser == "") {
//       console.log("Incorrect input.");
//     } else {
//       console.log(`I have not tried ${favFruitUser}!`);
//     }
// }

// 7. Request a number and check if the number is odd, even or zero. Use switch.

NumberRequested2 = prompt(
  "Please type in a number and I will check whether it's odd, even or zero"
);
if (isNaN(NumberRequested2) || NumberRequested2 == "") {
  console.log("Incorrect input.");
} else
  switch (+NumberRequested2) {
    case 0:
      console.log(`${NumberRequested2} is a zero.`);
      break;
    default:
      if (NumberRequested2 % 2 == 0) {
        console.log(`${NumberRequested2} is an even number`);
      }
      {
        console.log(`${NumberRequested2} is an odd number`);
      }
  }
