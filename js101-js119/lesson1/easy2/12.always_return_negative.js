/*
Write a function that takes a number as an argument. If the argument is a 
positive number, return the negative of that number. If the argument is a 
negative number, return it as-is.
*/

/*
Input:
- a number

Output:
- if number is positive, output is negative of that number
- if number is negative, output is number as-is

Examples/Test Cases:
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

Algorithm:
- write a function that takes a number as an argument
- if input number is negative, return number as-is
- otherwise number is positive, return negative of that number
*/

function negative(number) {
  if (number < 0) {
    return number;
  } else {
    return -Math.abs(number);
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));     // -3
console.log(negative(0));     // -0