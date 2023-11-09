/*
Write a function that takes a non-empty string argument and returns the middle 
character(s) of the string. If the string has an odd length, you should return 
exactly one character. If the string has an even length, you should return 
exactly two characters.
*/

/*
Input:
- a non-empty string

Ouput:
- middle character(s) of the string

Rules:
- string cannot be empty
- if the string length is odd, return one character
- if the string length is even, return two characters

Examples/Test Cases:
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

Algorithm:
- write a function that takes a string as an argument
- if the string length is empty, return a message
- define the middle index from string
  - take the last character then divide it by half
  - turn this result into an integer using Math.floor()
- if the string length is odd, return the character from middle index
- otherwise, define left index and right index
- return character from left index + character from right index
*/

function centerOf(string) {
  if (string.length === 0) {
    return 'String cannot be empty';
  }

  let middleIndex = Math.floor((string.length - 1) / 2);
  
  if (string.length % 2 === 1) {
    return string[middleIndex];
  } else {
    let leftIndex = middleIndex;
    let rightIndex = middleIndex + 1;
    
    return string[leftIndex] + string[rightIndex];
  }
}

console.log(centerOf('Bob')); // o
console.log(centerOf('Alex')); // le
console.log(centerOf('x')); // x
console.log(centerOf('Launch School')); //  
console.log(centerOf('')); // String cannot be empty