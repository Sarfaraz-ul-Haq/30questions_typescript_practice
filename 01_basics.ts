// 1. VARIABLE ASSIGNMENT
// Create a variable named "name" and assign it a string value.
const name = "Sarfaraz";

// 2. ADDITION FUNCTION
// Write a function that takes two numbers as parameters and returns their sum.
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

// 3. EVEN OR ODD CHECK
// Implement a conditional statement to check if a given number is even or odd. Consider using the modulus operator % for this task.
const isEvenOrOdd = (num: number): void => {
  if (num % 2 == 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
};
