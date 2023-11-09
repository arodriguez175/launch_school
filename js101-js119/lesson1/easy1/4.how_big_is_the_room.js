/*
Build a program that asks the user to enter the length and width of a 
room in meters, and then logs the area of the room to the console in 
both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. 
Use the readlineSync.prompt method to collect user input.
*/

/*
Input:
- length and width

Output:
- the area in square meters and square feet

Rules:
- the output must be in square meters and sqaure feet
- must use the readlineSync.prompt method for user input

Mental Modal:
- using the readlineSync.prompt method, ask the user to enter the length and width 
of a room in meters then log the area in sqaure meters and sqaure feet

Examples/Test Cases:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

Data Structures:
- none

Algorithm:
- import readlineSync with require()
- log a string asking the user to enter the length in meters
- use readlineSync.prompt() method to capture the user input
- log the string a string asking the user to enter the width in meters
- use readlineSync.prompt() method to capture the user input
- calculate the area of the room (length * width)
- calculate the square feet (area * 1 square meter)
- log the area in square meters and square feet with template literal
*/

let readlineSync = require('readline-sync');

console.log('Enter the length of the room in meters:');
let length = readlineSync.prompt();
length;

console.log('Enter the width of the room in meters:');
let width = readlineSync.prompt();
width;

let area = length * width;
const SQAURE_METER = 10.7639;
let squareFeet = area * SQAURE_METER;

console.log(`The area of the room is ${area} square meters (${squareFeet} square feet).`);