// 1. Create a promise that resolves to the string "Hello, Promises!"

// const promise = new Promise((resolve, reject) => {
//   resolve("Hello, Promises!");
//   reject(new Error("Error"));
// });

// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// 2. Create a function that returns a promise.
// The promise should resolve after a random delay (between 1 to 5 seconds)
// with a message like "Promise resolved after X seconds".

function getRandomDelay(max) {
  return Math.floor(Math.random() * max) + 1;
}

function timeOut() {
  return new Promise((resolve, reject) => {
    const delay = getRandomDelay(5);
    setTimeout(
      () => resolve(`Promise resolved after ${delay} seconds`),
      delay * 1000
    );
  });
}

let promise = timeOut();
promise.then((result) => {
  console.log(result);
});

// 3. Ask a user to submit an artist name and song and after 2 seconds add it to the screen
