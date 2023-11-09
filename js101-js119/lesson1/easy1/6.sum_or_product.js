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

function getInputInteger() {
  // keep prompting the user if the integer is not a number or <= 0
  let integer;
  do {
    console.log('Enter an integer greater than 0:');
    integer = parseInt(readlineSync.prompt());

    if (isNaN(integer) || integer <= 0) {
      console.log('Invalid input. Please try again.');
    }

  } while (isNaN(integer) || integer <= 0);
  
  return integer;
}

function getInputChoice() {
  // keep prompting the user if choice is not s and p
  let choice;
  do {
    console.log('Enter "s" to compute the sum, or "p" to compute the product. ');
    choice = readlineSync.prompt().toLocaleLowerCase();

    if (choice !== 's' && choice !== 'p') {
      console.log('Invalid selection. Please try again.');
    }

  } while (choice !== 's' && choice !== 'p');
  
  return choice;
}

function calculateSum(integer) {
  let sum = 0;

  for (let i = 1; i <= integer; i++) {
    sum += i;
  }

  return sum;
}

function calculateProduct(integer) {
  let product = 1;

  for (let i = 1; i <= integer; i++) {
    product *= i;
  }

  return product;
}

function main() {
  const integer = getInputInteger();
  const choice = getInputChoice();

  if (choice === 's') {
    const sum = calculateSum(integer);
    console.log(`The sum of the integers between 1 and ${integer} is ${sum}`);
  } else if (choice === 'p') {
    const product = calculateProduct(integer);
    console.log(`The product of the integers between 1 and ${integer} is ${product}`);
  }
}

main();

// What if the input was an array of integers instead of just a single integer?

/*
Algorithm:
- input an array of integers
- convert the input from a string to an actual array of integers
- remove the brackets using replace()
- turn the string into an array of strings with split()
- turn the string elements into integers using map() and parseInt()
- if user entered an invalid input, prompt again
- calculate sum using .reduce()
- calculate product using .reduce()
- if user entered s for choice, then output the sum
- if user entered p for choice, then output the product
- if user entered anything other than s or p for choice, prompt again
*/

// let readlineSync = require('readline-sync');

// function getInputIntegers() {
//   let integers;

//   do {
//     console.log('Enter an array of integers greater than 0');

//     integers = readlineSync.prompt();
    
//     // input is a string by default, remove the brackets
//     let string = integers.replace('[', '').replace(']', '');

//     // turn string into an array
//     let numbersString = string.split(',');

//     // make each string element into a parsed integer
//     integers = numbersString.map(element => parseInt(element));

//     if (integers.some(isNaN) || integers.some(num => num <= 0)) {
//       console.log('Invalid input. Please try again.');
//     }

//   } while (integers.some(isNaN) || integers.some(num => num <= 0));

//   return integers;
// }

// function getInputChoice() {
//   let choice;
//   do {
//     console.log('Enter "s" to compute the sum, or "p" to compute the product. ');
//     choice = readlineSync.prompt().toLocaleLowerCase();

//     if (choice !== 's' && choice !== 'p') {
//       console.log('Invalid selection. Please try again.');
//     }

//   } while (choice !== 's' && choice !== 'p');
  
//   return choice;
// }

// function calculateSum(integers) {
//   let sum = integers.reduce((accum, number) => accum + number, 0);
//   return sum;
// }

// function calculateProduct(integers) {
//   let product = integers.reduce((accum, number) => accum * number, 1);
//   return product;
// }

// function main() {
//   const integers = getInputIntegers();
//   const choice  = getInputChoice();

//   if (choice === 's') {
//     const sum = calculateSum(integers);
//     console.log(`The sum of the integers between 1 and [${integers}] is ${sum}`);
//   } else if (choice === 'p') {
//     const product = calculateProduct(integers);
//     console.log(`The product of the integers between 1 and [${integers}] is ${product}`);
//   }
// }

// main();