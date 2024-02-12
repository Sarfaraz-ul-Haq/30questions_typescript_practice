// 4 String Concatenation

// Build a function that concatenates two strings and returns the result.
const concat = (str1: string, str2: string): string => {
  return str1.concat(str2);
};

// 5. Rectangle Area Calculation

// Create a function that calculates the area of a rectangle using width and height parameters. Remember the formula: area = width * height.
const calculateAreaOfRectangle = (length: number, width: number): number => {
  const areaOfRectangle = length * width;
  return areaOfRectangle;
};

// 6. Palindrome check

// Write a function to check if a given string is a palindrome. Consider reversing the string and comparing it with the original.
function isPalindrome(str: string): boolean {
  const arrFromStr = str.split(""); //string converted to array so that reverse method can be applied
  const reversedArrFromStrr = arrFromStr.reverse(); //reversed the array
  const reversedStr = reversedArrFromStrr.join(""); //joined the array into string by join() method

  if (str == reversedStr) {
    return true;
  } else {
    return false;
  }
}
