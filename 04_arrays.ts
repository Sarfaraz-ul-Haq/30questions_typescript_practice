// 10. Fruits Array and Loop

// Declare an array of fruits and print each one using a loop. You can use a for loop to iterate through the array.
const fruits = ["mango", "guava", "peach", "apple"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 11. Average of Numbers in Array
// Write a function to find the average value of numbers in an array. Sum the elements and divide by the length of the array.
const findAverage = (...num: number[]): number => {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result / num.length;
};

// 12. Concatenate Arrays
// Concatenate two arrays without modifying the original arrays. You can use the + operator for concatenation.
const fruitArr1: string[] = ["guava", "mango"];
const fruitArr2: string[] = ["lychee", "watermelon", "blueberries"];
const concatenatedFruitsArr: string[] = fruitArr1.concat(fruitArr2);
console.log(concatenatedFruitsArr);
