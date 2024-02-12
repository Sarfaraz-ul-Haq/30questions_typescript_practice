//24. Default Parameter
//Implement a function with a default parameter. This provides a default value if the parameter is not explicitly provided.

const greetUser = (name = "Sarfaraz") =>
  console.log(`Hello ${name}, welcome to the website!`);
greetUser("Ali");

//25. Sort Objects by Property
// Create an array of objects and sort them based on a specific property. Utilize the sorted function and a lambda function as the key.
const arrayOfObjects = [{}, {}, {}];

//26. Rest Parameters
// Write a function that uses rest parameters to calculate the sum of an arbitrary number of arguments. This allows flexibility in the number of arguments.

const sumUnlimitedNum = (...numbers: number[]) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
const result = sumUnlimitedNum(5, 25, 70, 400, 500, 1000);
console.log(result);
