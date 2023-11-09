/*
Write a function that returns an Array that contains every other element of 
an Array that is passed in as an argument. The values in the returned list 
should be those values that are in the 1st, 3rd, 5th, and so on elements of the 
argument Array.
*/

/*
Input:
- an array

Output:
- all elements that have an odd index from the array

Rules:
- should return each odd element from the array

Mental Model:
Write a function that takes an array as an argument then returns a new array 
containing all of the odd elements from the array.

Examples/Test Cases:
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

Data Structures:
- array

Algorithm:
- write a function that takes an array as an argument
- make a new array
- loop through the original array
- if the current index is odd, push that element to the new array
- return the new array
*/

function oddities(array) {
  let oddElements = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      oddElements.push(array[i]);
    }
  }

  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []