/*
Write a function that takes two strings as arguments, determines the length of 
the two strings, and then returns the result of concatenating the shorter string, 
the longer string, and the shorter string once again. 
You may assume that the strings are of different lengths.
*/

/*
Input:
- two strings

Output:
- concatenated result from the shorter string, longer string, and shorter string

Rules:
- the short string must come first
- order is in short + long + short

Mental Model:
Write a function that takes two strings as arguments, finds the length of the 
two strings, and returns the result of the shortest string + longest string + shortest string again.

Examples/Test Cases:
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

Data Structures:
- none

Algorithm:
- write a function that takes two string arguments
- find the length of the two strings
- concatenate the short string + long string + short string
- return the result
*/

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1 + string2 + string1;
  } else {
    return string2 + string1 + string2;
  }
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
