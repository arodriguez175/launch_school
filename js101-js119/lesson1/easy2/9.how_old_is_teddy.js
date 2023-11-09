/*
Build a program that randomly generates Teddy's age, and logs it to the console. 
Have the age be a random number between 20 and 120 (inclusive).
*/

/*
Input:

Output:
- a random number between 20 and 120 representing Teddy's age

Rules:
- age must be a random number from 20 through 120
- 20 and 120 must be included, not just numbers between

Mental Model:
Write a program that logs a random number from 20 through 120 that represents 
Teddy's age.

Examples/Test Cases:
Teddy is 69 years old!

Data Structures:

Algorithm:
- write a function 
- make a variable min for minimum age
- make a variable max for maximum age
- make a variable called age
- calculate a random number between 20 and 120
  - let age generate a random number * (max - min + 1) + min
- return age
- log the function call
*/

function randomAge() {
  let min = 20;
  let max = 120;
  let age = Math.floor(Math.random() * (max - min + 1)) + min;

  return `Teddy is ${age} years old!`;
}

console.log(randomAge());
