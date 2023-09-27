/*
Log all even numbers from 1 to 99, inclusive, to the console, with each number on 
a separate line.
*/

/*
Input:
- none

Output:
- even numbers

Rules:
- must have a range from 1-99
- each number must be on a separate line

Mental Model:
- log even numbers from 1-99

Examples/Test Cases:
- Input:
none

- Output:
2
4
6
8
...
98

Data Structures:
none

Algorithm:
loop through numbers 1-99
log the current number if it's even
*/

for (let number = 1; number <= 99; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}