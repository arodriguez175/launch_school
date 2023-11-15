// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// perform the operation on the two numbers.
// print the result to the terminal.

let readlineSync = require("readline-sync");

// Add => to all log messages for neatness
function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Welcome to Calculator!");

prompt("What's the first number?");
// save as a number since readlineSync.question always returns a string
let number1 = readlineSync.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readlineSync.question();
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("What's the second number?");
let number2 = readlineSync.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readlineSync.question();
}

prompt("What operation would you like to perform?");
prompt("1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readlineSync.question();

/* as long as the input isn't one of the values 1, 2, 3, or 4, keep asking the
user for a valid operation number */
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readlineSync.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is ${output}`);