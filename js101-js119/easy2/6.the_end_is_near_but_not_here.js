/*
Write a function that returns the next to last word in the String passed to it 
as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
*/

/*
Input:
- a string, with at least two words

Output:
- the word that comes before the last word in the string

Rules:

Mental Model:
Write a function that takes a string with at least two words as an argument,
then returns the word that comes before the last word of the string.

Examples/Test Cases:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

Data Structures:
- none

Algorithm:
- write a function that takes a string as an argument (assuming it's >= 2 words)
- find the word that comes before the last word
  - split the string into an array of words separated by spaces
  - acccess the element before the last element of the words array
- return that word
*/

function penultimate(string) {
  let words = string.split(' ');
  let secondToLastWord = words[words.length - 2];
  return secondToLastWord;
}

console.log(penultimate('why hello there!') === 'hello'); // true
console.log(penultimate('hello world')); // hello