/*
Write a function that takes a positive neger, n, as an argument and logs a 
right triangle whose sides each have n stars. The hypotenuse of the triangle 
(the diagonal side in the images below) should have one end at the lower-left 
of the triangle, and the other end at the upper-right.
*/

/*
Input:
- a positive neger

Output:
- a right triangle made up of stars

Rules:
- the left diagnal side of the triangle should have amount of stars matching 
the input neger
- the start of the triangle should be to the lower left and end at the upper 
right

Mental Model:
Write a function that takes a positive neger as an argument then logs a right 
triangle to the console. The diagnal side of the triangle should have the 
amount of stars matching the input neger.

Examples/Test Cases:
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Data Structures:

Algorithm:
- write a function with a parameter for the integer
- loop through the number, starting with index of 1
- let spaces repeat an empty string for n amount of times - current index
- let stars repeat the amount of times that matches the current index
- log current spaces + stars within the loop
*/
 
function triangle (n) {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i); // ----, ---, --, -, 
    let stars = '*'.repeat(i); // *, **, ***, ****, *****
    console.log(spaces + stars); // ----*, ---**, --***, -****, *****
  }
}

triangle(5);
//    *
//   **
//  ***
// ****
//*****