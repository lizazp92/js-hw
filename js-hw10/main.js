// 1. Create a promise that resolves to the string "Hello, Promises!"

const promise = new Promise((resolve, reject) => {
  resolve("Hello, Promises!");
  reject(new Error("Error"));
});

promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);

// 2. Create a function that returns a promise.
// The promise should resolve after a random delay (between 1 to 5 seconds)
// with a message like "Promise resolved after X seconds".
