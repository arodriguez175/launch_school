/*
Using the multiply() function from the "Multiplying Two Numbers" problem, 
write a function that computes the square of its argument 
(the square is the result of multiplying a number by itself).
*/

/*
Input:
- a number

Output:
- the result of the number squared

Rules:
- must use the previous multiply function along with this function

Mental Model:
Write a function that takes a number as an argument, uses the multiply function,
and returns the number squared.

Examples/Test Cases:
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

Data Structures:
- none

Algorithm:
- write a function that takes a number as an argument
- use the multiply function to multiply the number times itself
- return the result
*/

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5)); // 25
console.log(square(5) === 25); // true
console.log(square(-8)); // 64