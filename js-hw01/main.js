// 1. Request a user’s name and display the response “Hello, [name]”.

let userName = prompt("What's your name?");
console.log(`Hello, ${userName}`);

/* 2. Request a user’s year of birth, count his age, and display the result. 
 Store the current year as a constant. */

const thisYear = 2024;
let birthYear = prompt("What's your year of birth?");
let userAge = thisYear - birthYear;
console.log(`You are ${userAge} years old. Congratulations!`);

/* 3. Request a length of a side of a square from a user 
and display the perimeter of the square.*/

let squareSideLength = prompt(
  "Let me count the perimeter of a square. What's a length of a side of a square in cm?"
);
const squarePerimeter = squareSideLength * 4;
console.log(`The perimeter of the square is ${squarePerimeter} cm.`);

// 4. Request a radius of a circle and display the area of such a circle.

const pi = 3.14159;
let userRadius = prompt(
  "Let me count the the area of a circle. What's the radius in cm?"
);
const circleArea = pi * userRadius * userRadius;
console.log(`The area of a circle is ${circleArea.toFixed(1)} cm.`);

/* 5. Request a distance in km between the two cities from a user, 
and the time they want to cover it within. Count the speed needed to be on time. */

let userDistance = prompt(
  "Please provide a distance in km between the two cities"
);
let userTime = prompt(
  "Please provide the time (in hours) you want to cover it within"
);
const userSpeed = userDistance / userTime;
console.log(
  `If you want to be on time, this is your needed speed: ${userSpeed.toFixed(
    1
  )} km/h.`
);

/* 6. Create a currency converter. 
A user types in USD and the program converts them to EUR. 
The exchange rate should be stored as a constant. */

let usdAmmount = prompt(
  "This is a converter from USD to EUR. Please specify the ammount in USD"
);
const exchangeRate = 0.93;
const eurConverter = usdAmmount * exchangeRate;
console.log(`This is your converted ammount: ${eurConverter} EUR.`);

/* 7. A user states a flash drive memory in GB. 
The program has to count how many 820MB files can be stored on this flash drive. */

let userGbMemory = prompt("How many GBs do you have in your flash memory?");
const MbIn1Gb = 1024;
let memory820 = Math.floor((userGbMemory * MbIn1Gb) / 820);
console.log(`${memory820} 820MB files can be stored on this flash drive.`);

/* 8. A user types in an amount of money in a wallet and the price of one chocolate bar. 
The program counts how many chocolate bars the user can buy, 
and how much change will he/she have left. */

let userWallet = prompt("How much money do you have in your wallet?");
let chocoBarPrice = prompt("How much does a chocolate bar cost?");
let chocoBarAvailable = Math.floor(userWallet / chocoBarPrice);
let change = userWallet % chocoBarPrice;

if (userWallet === chocoBarPrice) {
  console.log("You can buy 1 chocolate bar. Your don't have a change.");
} else {
  if (userWallet < chocoBarPrice) {
    console.log("You don't have enough money!");
  } else {
    console.log(
      `You can buy ${chocoBarAvailable} chocolate bars. Your change is ${change.toFixed(
        2
      )}.`
    );
  }
}

/* 9. The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%.
 The program counts the sum of interest. */

let userSum = prompt("Type in a sum of bank deposits in USD.");
const bankPeriod = 0.02;
const interestRate = 5;
const sumOfInterest = (userSum * bankPeriod * interestRate) / 100;
if (userSum <= 0) {
  console.log("Invalid sum!");
} else {
  console.log(
    `The sum of interest for 2 months with a yearly interest rate of 5% is ${sumOfInterest.toFixed(
      3
    )} USD.`
  );
}

/* 10. Request user's name, age, country of birth 
and display them in the console in different lines with different colors to be easily visible.*/

let userName1 = prompt("What's your name?");
let userAge1 = prompt("How old are you?");
let userCountryOfBirth = prompt("What's your country of birth?");
console.log(`%c Your name is ${userName1},`, "color: green");
console.log(`%c Your are ${userAge1} years old,`, "color: red");
console.log(
  `%c Your country of birth is ${userCountryOfBirth}.`,
  "color: blue"
);

/* 11. Ask 10 questions and display the answers in a short text in an alert*/

let question1 = prompt("What's your name?");
let question2 = prompt("How old are you?");
let question3 = prompt("Where do you study?");
let question4 = prompt("Where do you live?");
let question5 = prompt("What are your hobbies?");
let question6 = prompt("Do you have pets?");
let question7 = prompt("Do you have children?");
let question8 = prompt("Are you married?");
let question9 = prompt("What's your favourite food?");
let question10 = prompt("What's your favourite colour?");

let answer = `Your answers are: 
${question1}, 
${question2}, 
${question3}, 
${question4}, 
${question5}, 
${question6}, 
${question7}, 
${question8}, 
${question9}, 
${question10}.`;
alert(answer);

/* 12. Show in the console what is going to be your age
 in 2025, 2029 and 2050, using a single variable. */

const myYearOfBirth = 1992;
console.log(`My age in 2025 will be ${2025 - myYearOfBirth}.
 My age in 2029 will be ${2029 - myYearOfBirth}.
 My age in 2050 will be ${2050 - myYearOfBirth}.`);
