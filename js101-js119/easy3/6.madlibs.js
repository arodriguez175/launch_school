/*
Madlibs is a simple game where you create a story template with "blanks" for 
words. You, or another player, then construct a list of words and place them 
into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and 
an adjective, and injects them into a story that you create.
*/

/*
Input:
- a noun
- a verb
- an adverb
- an adjective

Output:
- a console log of a madlib story using the input

Rules:
- program must prompt the user for input
- must include noun, verb, adverb, and adjective

Mental Model:

Examples/Test Cases:
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

Data Structures:

Algorithm:
- import readline-sync
- ask the user to enter a noun
- prompt for input
- ask the user to enter a verb
- prompt for input
- ask the user to enter an adjective
- prompt for input
- ask the user to enter an adverb
- prompt for input
- log a story using the input within the sentances
*/

let readlineSync = require('readline-sync');

console.log('Enter a noun:');
let noun = readlineSync.prompt();

console.log('Enter a verb:');
let verb = readlineSync.prompt();

console.log('Enter an adjective:');
let adjective = readlineSync.prompt();

console.log('Enter an adverb:');
let adverb = readlineSync.prompt();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} walks ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`);