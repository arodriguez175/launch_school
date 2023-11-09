/*
Given a string that consists of some words and an assortment of 
non-alphabetic characters, write a function that returns that string with 
all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, you should only have 
one space in the result 
(i.e., the result string should never have consecutive spaces).
*/

/*
Input:
- a string that includes a mix of non-alphabetic characters

Output:
- the string with all the non-alphabetic characters replaced by spaces

Rules:
- if one or more non-alphabetic characters occur in a row, only have one space 
in the result
- the resulting string should not have spaces next to one another

Mental Model:
Write a function that takes a string that includes a mix of non-alphabetic 
characters and returns the string but with the non-alphabetic characters 
replaced by spaces. If there are spaces next to one another, use just one space 
in it's place.

Examples/Test Cases:
cleanUp("---what's my +*& line?");    // " what s my line "

Data Structures:

Algorithm:
- write a function with a parameter for the string
- make a result variable and assign it the following
  - use the replace() method for the string
  - in the first argument, search for all consecutive non-alphabetic characters
  (case-insensitive with i)
  - in the second argument, replace them with an empty string
- return result
*/

function cleanUp(string) {
  let result = string.replace(/[^a-z]+/gi, ' ');
  console.log(result);
  return result;
}

cleanUp("---what's my +*& line?");    // " what s my line "