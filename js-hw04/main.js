/* 1. Write a function that accepts 2 numbers 
and returns -1 if the first one is smaller than the second, 
1 if it is vice versa, and 0 if they are equal. */

function numberTask(a, b) {
  if (a < b) {
    return console.log("-1");
  } else if (a == b) {
    return console.log("0");
  } else {
    return console.log("1");
  }
}
numberTask(1, 10);

// 2. Write a function that counts the factorial of a given number.

function factorialNumber(x) {
  let factorial = 1;
  for (i = 1; i <= x; i++) {
    factorial *= i;
  }
  return console.log(factorial);
}
factorialNumber(5);

/* 3. Write a function that accepts three separate digits and makes them a number. 
For example, 1, 4, and 9 will become 149. */

function digitsToNumber(c, d, e) {
  const convertStringc = c.toString();
  const convertStringd = d.toString();
  const convertStringe = e.toString();
  return console.log(convertStringc + convertStringd + convertStringe);
}
digitsToNumber(0, 4, 2);

/* 4. Write a function that accepts the width and length of a rectangle and calculates its area. 
If there is only one parameter given, it counts as a square. */

function rectangleArea(width, length) {
  if (isNaN(length)) {
    return console.log(width * width);
  } else {
    return console.log(width * length);
  }
}
rectangleArea(5, 10);

/* 5. Write a function that checks if the given number is perfect. 
A perfect number is a number equal to the sum of all its divisors. 
For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3. */

function perfectNumber(y) {
  let divisorSum = 0;
  for (i = 1; i < y; i++) {
    if (y % i == 0) {
      divisorSum += i;
    }
  }
  if (divisorSum == y) {
    console.log(`${y} is a perfect number.`);
  } else {
    console.log(`${y} is not a perfect number.`);
  }
}
perfectNumber(6);
perfectNumber(10);

/* 6. Write a function that accepts the min and max values of a range, 
and only puts out the perfect numbers within that range. 
Use the previous function to check, if numbers are perfect. */

function perfectNumber(y) {
  let divisorSum = 0;
  for (i = 1; i < y; i++) {
    if (y % i == 0) {
      divisorSum += i;
    }
  }
  if (divisorSum == y) {
    console.log(`${y} is a perfect number.`);
  }
}
function perfectNumberRange(min, max) {
  for (i = min; i <= max; i++) {
    perfectNumber(i);
  }
}
perfectNumberRange(6, 100);

/* 7. Write a function that accepts time (hours, minutes, seconds) 
and returns a string in the format hh:mm:ss. 
If the seconds are not given, they should be displayed as 00. */

function time(hh, mm, ss = "00") {
  let convertStringhh = `${hh.toString()}:`;
  let convertStringmm = `${mm.toString()}:`;
  let convertStringss = `${ss.toString()}`;
  console.log(convertStringhh + convertStringmm + convertStringss);
}
time(1, 22);

/* 8. Write a function that accepts hours, minutes, and seconds 
and returns that time only in seconds. 
For example, 1 hour 25 minutes 43 seconds returns 5145 seconds. */

function time1(hh, mm, ss) {
  let hoursToSeconds = hh * 3600;
  let minsToSeconds = mm * 60;
  return hoursToSeconds + minsToSeconds + ss;
}
console.log(`Overall it's ${time1(2, 23, 50)} seconds.`);

/* 9. Write a function that accepts the number of seconds, 
translates it into hours, minutes, and seconds, 
and returns as a hh:mm:ss string. */

function time2(ss) {
  let secondsToHours = parseInt(ss / 3600);
  let secondsToMinutes = parseInt((ss - 3600 * secondsToHours) / 60);
  let secondsToSeconds = ss - 3600 * secondsToHours - secondsToMinutes * 60;

  return `${secondsToHours}:${secondsToMinutes}:${secondsToSeconds}`;
}
console.log(time2(5555));

/* 10. Write a function that counts the difference between the dates. 
The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. 
While solving this problem use the functions from the two previous ones: 
at first, make the dates in seconds, count the difference in seconds, 
and translate it back into hh:mm:ss. */

function time1(hh, mm, ss) {
  let hoursToSeconds = hh * 3600;
  let minsToSeconds = mm * 60;
  return hoursToSeconds + minsToSeconds + ss;
}

function time2(ss) {
  let secondsToHours = parseInt(ss / 3600);
  let secondsToMinutes = parseInt((ss - 3600 * secondsToHours) / 60);
  let secondsToSeconds = ss - 3600 * secondsToHours - secondsToMinutes * 60;
  return `${secondsToHours}:${secondsToMinutes}:${secondsToSeconds}`;
}

function time3(hh1, mm1, ss1, hh2, mm2, ss2) {
  let dateSec1 = time1(hh1, mm1, ss1);
  let dateSec2 = time1(hh2, mm2, ss2);
  let dateDiff = Math.abs(dateSec2 - dateSec1);
  console.log(time2(dateDiff));
}
time3(2, 54, 5, 3, 25, 32);
