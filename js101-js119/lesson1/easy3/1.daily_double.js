/*
Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate 
characters collapsed into a single character.
*/

/*
Input:
- a string argument

Output:
- a new string

Rules:
- output must be a string that contains the value of the original string with 
all consecutive duplicate characters collapsed into a single character

Mental Model:
Write a function that takes a string as an argument and returns a new string 
that has the same value as the original string but with no duplicate characters.

Examples/Test Cases:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Data Structures:
- array

Algorithm:
- write a function that takes a string argument
- initialize an empty array
- loop through string
- check if the current string character is not the same as the one after it
- if it's not, then push that character to the array
- join the array into a new string
- return the new string
*/

function crunch(string) {
  let array = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      array.push(string[i]);
    }
  }

  let newString = array.join('');

  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // 'daily double'
console.log(crunch('4444abcabccba')); // '4abcabcba'
console.log(crunch('ggggggggggggggg')); // 'g'
console.log(crunch('a')); // 'a'
console.log(crunch('')); ''