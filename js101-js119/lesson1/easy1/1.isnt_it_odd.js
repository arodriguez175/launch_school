/*
Write a function that takes one integer argument, which may be positive, negative, 
or zero. This method returns true if the number's absolute value is odd. 
You may assume that the argument is a valid integer value.
*/

/*
Inputs:
- one integer that can be positive, negative, or zero

Outputs:
- true or false

Rules:
- return true if the argument is an odd number
- argument is a positive, negative, or zero

Data Structures:
- number -> boolean

Algorithm:
- if input's absolute value is odd then return true, else return false
*/

function isOdd(number) {
  if (Math.abs(number) % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

// Test Cases:
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true