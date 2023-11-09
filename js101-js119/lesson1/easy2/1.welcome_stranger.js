/*
Create a function that takes 2 arguments, an array and an object. 
The array will contain 2 or more elements that, when combined with 
adjoining spaces, will produce a person's name. 
The object will contain two keys, "title" and "occupation", and the 
appropriate values. Your function should return a greeting that uses 
the person's full name, and mentions the person's title.
*/

/*
Input:
- an array
- an object

Output:
- a greeting including the full name and title

Rules:
- the name array must have 2 or more elements
- the name must become a string
- the name must have spaces in between the words when combined
- the object must contain two keys, "title" and "occupation"
- the object must be given the appropriate values
- the greeting must contain the name and the title

Mental Model:
Write a function that takes an array and an object as arguments.
The name must be 2 or more elements, must become a combined string, 
and have spaces in between the words. The object has to have 2 keys, 
"title" and "occupation". The object needs to have the appropriate values.
Then output a greeting containing the name and the title.

Examples/Test Cases:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

Data Structures:
- an array
- an object

Algorithm:
- write a function that takes an array and an object as arguments
- combine the 2 or more elements in the array into a string
- separate the words with an empty space
- make the object have 2 keys, "title" and "occupation"
- give the appropriate values to the keys
- return a greeting using the name, title, and occupation
*/

function greetings(array, object) {
  let name = array.join(' ');
  return `Hello ${name}! Nice to have a ${object.title} ${object.occupation}.`
}

console.log(greetings(['John', 'Q', 'Doe'], {title: 'Master', occupation: 'Plumber'}));