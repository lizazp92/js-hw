// 1. Create a promise that resolves to the string "Hello, Promises!"

$(() => {
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
});
