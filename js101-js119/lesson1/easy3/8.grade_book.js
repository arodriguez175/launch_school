/*
Write a function that determines the mean (average) of the three scores 
passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. 
There is no need to check for negative values or values greater than 100.
*/

/*
Input:
- three scores

Output:
- the letter associated with the average score

Rules:

Mental Model:
Write a function that takes three scores, calculates the mean (average), 
then returns the letter associated with the grade.

Mean = the sum total of all the numbers divided by the amount of numbers used.
Example:
1, 2, 3
(1 + 2 + 3) / 3 = mean

Examples/Test Cases:
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

Data Structures:

Algorithm:
- write a function with three parameters for scores
- calculate the mean (average) of the scores
- if mean is >= 90 and mean is <= 100, return 'A'
- if mean is >= 80 and mean is < 90, return 'B'
- if mean is >= 70 and mean is < 80, return 'C'
- if mean is >= 60 and mean is < 70, return 'D'
- if mean is >= 0 and mean is < 60, return 'F'
*/

function getGrade(score1, score2, score3) {
  let mean = (score1 + score2 + score3) / 3;

  if (mean >= 90 && mean <= 100) {
    return 'A';
  } else if (mean >= 80 && mean < 90) {
    return 'B';
  } else if (mean >= 70 && mean < 80) {
    return 'C';
  } else if (mean >= 60 && mean < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"