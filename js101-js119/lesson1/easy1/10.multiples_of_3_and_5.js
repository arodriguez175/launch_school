/*
Write a function that computes the sum of all numbers between 1 and some other 
number, inclusive, that are multiples of 3 or 5. 
For instance, if the supplied number is 20, 
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/

/*
Input:
- a number

Output:
- the sum of all numbers, between 1 and the input number, 
that are multiples of 3 or 5

Rules:
- the output has to be the sum as well as multiples of 3 or 5

Implicit Terms:
- multiple = A number that when divided by a target number, is a whole number

Mental Model:
Write a function that takes a number and returns the sum of all the numbers 
between 1 and the input number, that are also multiples of 3 or 5.

Examples/Test Cases:
func(20) // 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)

Data Structures:
- none

Algorithm:
- write a function that takes a number as an argument
- add all the numbers between 1 and the number that are multiples of 3 or 5
- create a result variable assigned to 0
- loop through the numbers 1-input
- if the current iteration is a whole number after being divided by 3 or 5, it's 
a multiple, add it to the result
- return the result
*/

function multisum(number) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

console.log(multisum(20)); // 98