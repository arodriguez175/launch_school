/*
Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the product of 
all numbers between 1 and the entered integer, inclusive.
*/

/*
Input:
- an integer greater than 0

Output:
- the sum or the product of all numbers between 1 and the entered integer

Rules:
- must recieve user input
- must ask the user if they want the sum or product of all numbers between 1 
and entered integer

Make Requirements/Terms Explicit:
- What is product regarding numbers?
The result of numbers being multiplied

Mental Model:
Ask the user to enter a whole number greater than 0, then ask if the user wants 
to detemrine the sum or product of all numbers between 1 and the entered whole 
number.

Exmaples/Test Cases:
// 1
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

// 2
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

Data Structures:
- none

Algorithm:
- import readline-sync using require()
- ask user to enter an integer greater than 0
- parse the prompt into an integer
- give user a choice to enter a key for the sum (s) of 1-integer
or another key for the product (p) of 1-integer

- if user chose s, create a sum variable = 0
- loop through 1-integer
- in each iteration, add the current number to sum
- log the sum

- if user chose p, create a product variable = 1
- loop through 1-integer
- in each iteration, multiply the current number to product
- log the product
*/

let readlineSync = require('readline-sync');

console.log('Enter an integer greater than 0:');
let integer = parseInt(readlineSync.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product. ');
let choice = readlineSync.prompt();

if (choice === 's') {
  let sum = 0;
  
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}`);
} else if (choice === 'p') {
  let product = 1;
  
  for (let i = 1; i <= integer; i++) {
    product *= i;
  }
  
  console.log(`The product of the integers between 1 and ${integer} is ${product}`);
} else {
  console.log('Unknown selection');
}