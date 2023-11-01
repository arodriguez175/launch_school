/*
A double number is an even-length number whose left-side digits are exactly 
the same as its right-side digits. For example, 44, 3333, 103103, and 7676 
are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by 
two, unless the argument is a double number; otherwise, return the double number 
as-is.
*/

/*
Input:
- a number

Output:
- the number multiplied by 2
- or the number as-is if it's a double number

Rules:
- if the number is a double number, return as-is
- otherwise, return the result of the number times 2

Mental Model:
Write a function that takes a number as an argument and returns the number 
multiplied by 2 unless it's a double number. Otherwise return the number as-is.

Examples/Test Cases:
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

Data Structures:

Algorithm:
- write a function that takes a number as an argument
- turn the number into a string
- define the middle index of the array
- make a variable for one part of the string
- make it a substring starting at 0 index and ending at the middle
- make another variable for the other part of the string 
- make it a substring starting at the middle
- if the two strings match, return the input number as-is
- otherwise return the input number * 2
*/

function twice(number) {
  let numberString = String(number);
  
  let midPoint = Math.floor(numberString.length / 2);

  let leftHalf = numberString.substring(0, midPoint);
  let rightHalf = numberString.substring(midPoint);

  if (leftHalf === rightHalf) {
    return number;
  } else {
    return number * 2;
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676