/*
Build a program that logs when the user will retire and how many more years the 
user has to work until retirement.
*/

/*
Input:
- current age
- retirement age

Output:
- the current year
- year to reach retirement
- years left to retire

Rules:

Mental Model:

Examples/Test Cases:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Data Structures:

Algorithm:
- import readline-sync
- ask the user what their age is
- ask the user what age they would like to retire
- calculate years left by finding the difference between retirement age and age
- calculate the current year
- calculate the year to retire by adding years left + current year
- log a message telling user the current year, what year they will retire, and 
the amount of years left to reach the retirement year
*/

let readlineSync = require('readline-sync');

let age = Number(readlineSync.question('What is your age? '));
let retirementAge = Number(readlineSync.question('At what age would you like to retire? '));

let yearsLeft = retirementAge - age;
let currentYear = new Date().getFullYear();
let retirementYear = yearsLeft + currentYear;

console.log(`\nIt's ${currentYear}. You will retire in ${retirementYear}.
You only have ${yearsLeft} years of work to go!`);