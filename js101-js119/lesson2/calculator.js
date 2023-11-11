// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// perform the operation on the two numbers.
// print the result to the terminal.

let readlineSync = require("readline-sync");

console.log("Welcome to Calculator!");

console.log("What's the first number?");
// save as a number since readlineSync.question always returns a string
let number1 = Number(readlineSync.question());

console.log("What's the second number?");
let number2 = Number(readlineSync.question());

console.log("What operation would you like to perform?");
console.log("1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readlineSync.question();

let output;
if (operation === "1") {
  // "1" represents addition
  output = number1 + number2;
} else if (operation === "2") {
  // "2" represents subtraction
  output = number1 - number2;
} else if (operation === "3") {
  // "3" represents multiplication
  output = number1 * number2;
} else if (operation === "4") {
  // "4" represents division
  output = number1 / number2;
}

console.log(`The result is ${output}`);