/*
In this exercise, you will write a function named xor that takes two arguments, 
and returns true if exactly one of its arguments is truthy, false otherwise. 
Note that we are looking for a boolean result instead of a truthy/falsy value 
as returned by || and &&.
*/

/*
Input:
- two arguments

Output:
- true or false

Rules:
- must return true if only one of its arguments is truthy, false otherwise
- must be a boolean result

Mental Model:
Write a function that takes two arguments, returns true if only one of the 
arguments is truthy, and returns false otherwise. Must return a boolean result.

Examples/Test Cases:
console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

Data Structures:

Algorithm:
- write the xor function
- give it paremeters that take two arguments
- if there is one argument that is truthy and one that is falsy, return true
- otherwise return false
*/

function xor(arg1, arg2) {
  if (arg1 && !arg2 || !arg1 && arg2) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(false, false) === false); // true