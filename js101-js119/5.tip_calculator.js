/*
Create a simple tip calculator. The program should prompt for a bill amount and a 
tip rate. The program must compute the tip, and then log both the tip and the 
total amount of the bill to the console. You can ignore input validation and 
assume that the user will enter numbers.
*/

/*
Input:
- bill amount
- tip rate

Output:
- tip
- total amount of the bill

Rules:
- the program should prompt the user for input

Mental Model:
- Create a tip calculator that prompts the user to enter a bill amount and 
tip rate, then logs the tip and total amount of the bill to the console.

Examples/Test Cases:
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

Data Structures:
- none

Algorithm:
- import readline-sync using require()
- prompt user to enter bill amount using readlineSync.question()
- turn it into a number
- prompt user to enter the tip percentage number using readlineSync.question()
- turn it into a number
- calculate the tip and log it to the console using (bill / 100) * tipPercentage
- calculate the total bill amount to the console using tip + bill
- log the tip in dollars and cents using toFixed(2)
- log the total in dollars and cents using toFixed(2)
*/

let readlineSync = require('readline-sync');

let bill = parseFloat(readlineSync.question('What is the bill? '));
let tipPercentage = parseFloat(readlineSync.question('What is the tip percentage? '));

let tip = (bill / 100) * tipPercentage;
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);