//21. Delayed Promise

// Build a promise that resolves with a message after a delay. Use the async and await keywords for asynchronous operations.
async function buildPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 3000);
  });
}
let result = await buildPromise();
console.log(result);

// 22. Chained Promises
// Chain two promises to perform sequential asynchronous operations. Ensure that the second operation depends on the result of the first one.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

myPromise
  .then(() => {
    console.log("Hello World 1");
    return "Hello World 2";
  })
  .then((val) => {
    console.log(val);
  });

// 23. Concurrent Promises
// Use Promise.all to handle multiple promises concurrently. This can improve the efficiency of asynchronous operations.

const multiplePromises = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data 1");
    }, 3000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data 2");
    }, 3000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data 3");
    }, 3000);
  });
  Promise.all([promise1, promise2, promise3]).then((val) => {
    console.log("All promises resolved: " + val);
  });
};

multiplePromises();
