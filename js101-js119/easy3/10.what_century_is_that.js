/*
Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 
comprise the 20th century.
*/

/*
Input:
- a year

Output:
- a string of the right century

Rules:
- the return value must be a string 
- the return value must begin  with the century number
- the return value must end with 'st', 'nd', 'rd', or 'th' as appropriate
- New centuries begin in years that end with 01, So, the years 1901 - 2000 
comprise the 20th century

Mental Model:
Write a function that takes a year as an argument and returns the 
appropriate century as a string, ending with 'st', 'nd', 'rd', or 'th'.
New centuries begin with years ending in 01, So, the years 1901 - 2000 would be 
the 20th century


Examples/Test Cases:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Algorithm:
- write a function with a parameter for the input year
- make a century variable with the following:
  - divide the year by 100, because a century is every 100 years
  - round the number up using Math.ceil()
  - turn it into a string
- make a variable for the string character before the last one
  - assign it the character two indexes back from the last character
- if the last character is a '1', return the century + 'st'
- otherwise if the last character is a '2', return the century + 'nd'
- otherwise if the last character is a '3', return the century 'rd'
- otherwise return the century + 'th'
*/

function century(year) {
  let centuryString = Math.ceil(year / 100).toString();
  let penUltimateChar = centuryString[centuryString.length - 2];

  if (penUltimateChar === '1') { return centuryString + 'th'; }

  let lastChar = centuryString[centuryString.length - 1];
  
  if (lastChar === '1') {
    return centuryString + 'st';
  } else if (lastChar === '2') {
    return centuryString + 'nd';
  } else if (lastChar === '3') {
    return centuryString + 'rd';
  } else {
    return centuryString + "th";
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"