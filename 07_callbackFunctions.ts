// 19. setTimeout Callback

// Implement a callback function within a setTimeout to log a message after a delay. Be aware of the asynchronous nature of setTimeout.
setTimeout(() => {
  console.log("I'm asynchronous message");
}, 3000);
console.log("I'm synchronous message");

// Create a function that takes a callback and invokes it with a provided value. This demonstrates the concept of higher-order functions.
const func = (value: string, callback: (value: string) => void) => {
  callback(value);
};
func("Hi, I'm callback function!", (value) => {
  console.log(value);
});
