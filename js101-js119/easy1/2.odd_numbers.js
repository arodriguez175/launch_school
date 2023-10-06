/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a 
separate line.
*/

/*
Input:
- none

Output:
- odd numbers

Rules:
- only the odd numbers should be logged
- each number must be on a separate line

Mental Model:
- console log the odd numbers from numbers 1-99 with each number on a separate line

Examples/Test Cases:
- Input:
none

- Output:
1
3
5
...
99

Data Structures:
- none

Algorithm:
- create a loop that iterates over 1-99
- if the current number in the loop is odd, console log it
*/

for (let i = 1; i <= 99; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}