/*
Write a program that prompts the user for two positive integers, 
and then prints the results of the following operations on those two numbers: 
addition, subtraction, product, quotient, remainder, and power. 
Do not worry about validating the input.
*/

/*
Input:
- two positive integers

Output:
- the results of the following operations on the two numbers:
- addition, subtraction, product, quotient, remainder, and power

Rules:
- must prompt user for input

Mental Model:
Write a program that prompts the user to enter two numbers, then returns the 
results of the following operations of those two numbers:
addition, subtraction, product, quotient, remainder, and power

Examples/Test Cases:
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

Data Structures:
- none

Algorithm:
- import readline-sync
- ask the user to enter the first number
- use readline-sync.prompt()
- store it in a variable
- ask the user to enter the second number
- use readline-sync.prompt()
- store it in a variable
- calculate first number + second number
- calculate the first number - second number
- calculate the first number * second number
- calculate the first number / second number
- calculate the first number % second number
- calculate the first number ** second number
- output the first number, it's operation, the second number, and result for 
each operation
*/

let readlineSync = require('readline-sync');

console.log('Enter the first number:');
let firstNumber = parseInt(readlineSync.prompt());

console.log('Enter the second number:');
let secondNumber = parseInt(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);