/*
Write a function that takes one argument, a positive integer, and returns 
a string of alternating '1's and '0's, always starting with a '1'. 
The length of the string should match the given integer.
*/

/*
Input:
- a positive integer

Output:
- a string of alternating '1's and '0's

Rules:
- string has to always start with a '1'
- the string length must match the given integer

Mental Model:
Write a function that takes one positive integer as an argument and then 
returns a string of alternating '1's and '0's. The string must always start 
with a '1' and the length must match the given integer.

Examples/Test Cases:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Data Structures:
- array

Algorithm:
- write a function with a parameter for the positive integer
- create an empty array
- loop through the integer while starting with an index of 1
- if the current index is odd, push a '1' string into the array
- if the current index is even, push a '0' string into the array
- join the array into a string
- return the string
*/

function stringy(number) {
  let array = [];

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) {
      array.push('1');
    } else {
      array.push('0');
    }
  }

  let string = array.join('');

  return string;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
stringy(3);   // 101