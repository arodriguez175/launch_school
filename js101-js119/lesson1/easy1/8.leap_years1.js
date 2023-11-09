/*
In the modern era under the Gregorian Calendar, leap years occur in every year 
that is evenly divisible by 4, unless the year is also divisible by 100. 
If the year is evenly divisible by 100, then it is not a leap year, unless the 
year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. 
Write a function that takes any year greater than 0 as input and returns true if 
the year is a leap year, or false if it is not a leap year.
*/

/*
Input:
- a year

Output:
- true if input is a leap year
- false if input is not a leap year

Rules:
- the year is a leap year if it's evenly divisible by 4
- if the year is evenly divisble by 100, it's not a leap year
- if the year is evenly divisble by 400, it is a leap year

Mental Model:
Write a function that takes a year as an argument, determines if the year is a 
leap year or not, then outputs true if it is a leap year or false if it is not.

Examples/Test Cases:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

Data Structures:
- none

Algorithm:
- write a function that takes a year an argument
- check the least common cases first to avoid miscalculations (400 and 100)
- if the year is also divisble by 400, it's a leap year, return true
- if the year is also divisble by 100, it's not a leap year, return false
- if the year is anything else, it's a leap year if it's divisble by 4
*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true