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
