/*
Write a function that determines and returns the UTF-16 string value of a 
string passed in as an argument. The UTF-16 string value is the sum of the 
UTF-16 values of every character in the string. 
(You may use String.prototype.charCodeAt() to determine the UTF-16 value of a 
character.)
*/

/*
Input:
- a string

Output:
- the UTF-16 string value

Rules:

Mental Model:
Write a function that takes a string as an argument then calculates the sum of the 
UTF-16 value from each character of the string.

Examples/Test Cases:
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

Data Structures:
- none

Algorithm:
- write a function that takes a string as an argument
- create a variable for the sum, assign it an initial value of 0
- loop through each character of the string
- get the UTF-16 value of the current character using .charCodeAt(index)
- add it to the sum
- return the sum
*/

function getUTF16Value(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

console.log(getUTF16Value('Four score')); // 984
console.log(getUTF16Value('Launch School')); // 1251