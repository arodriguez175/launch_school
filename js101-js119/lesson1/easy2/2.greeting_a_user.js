/*
Write a program that will ask for user's name. The program will then 
greet the user. If the user writes "name!" then the computer yells back to 
the user.
*/

/*
Input:
- a name

Output:
- A greeting including the name

Rules:
- if the input ends with a "!" then output should yell at the user

Mental Model:
Write a program that asks for the user's name and returns a greeting that 
includes the name but if the name ends with a "!", then make the program 
yell at the user while including the name.

Examples/Test Cases:
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

Data Structures:
- none

Algorithm:
- import readline-sync
- ask the user for their name using readline-sync's question method
- if the user entered a name ending with "!", log a greeting in the form of 
yelling while including the name
- otherwise log a normal greeting with the name
*/

let readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name? ');

if (name[name.length - 1] === '!') {
  name = name.replace(/!/g, ''); // to get rid of any additional "!"
  console.log(`HI ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hi ${name}.`);
}