// 13. Filter Even Numbers

// Use the filter method to get an array of even numbers from a given array. Utilize a lambda function as the filtering condition.
const arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumArr: number[] = arr.filter((num) => num % 2 == 0 && num != 0);
console.log(evenNumArr);

// 14. TRANSFORM WORDS TO LENGTHSz
// Transform an array of words into a new array with the lengths of each word. The map function might be useful here.
const words: string[] = ["synchronous", "asynchronous", "code"];
const lengthOfWords: number[] = words.map((word) => word.length);
// console.log(lengthOfWords);

// 15. CHECK POSITIVE NUMBERS
// Write a function that checks if all elements in an array are positive using the every method.
const isPositive = (...num: number[]) => {
  num.every((num) => num > 0);
};

const result = isPositive(6);
console.log(result);
