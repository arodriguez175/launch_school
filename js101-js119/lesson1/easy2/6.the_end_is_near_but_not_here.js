/*
Write a function that returns the next to last word in the String passed to it 
as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
*/

/*
Input:
- a string, with at least two words

Output:
- the word that comes before the last word in the string

Rules:

Mental Model:
Write a function that takes a string with at least two words as an argument,
then returns the word that comes before the last word of the string.

Examples/Test Cases:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

Data Structures:
- array

Algorithm:
- write a function that takes a string as an argument (assuming it's >= 2 words)
- find the word that comes before the last word
  - split the string into an array of words separated by spaces
  - acccess the element before the last element of the words array
- return that word
*/

function penultimate(string) {
  let words = string.split(' ');
  let secondToLastWord = words[words.length - 2];
  return secondToLastWord;
}

console.log(penultimate('why hello there!') === 'hello'); // true
console.log(penultimate('hello world')); // hello

/*
Our solution ignored a couple of edge cases because we explicitly stated that 
you didn't have to handle them: strings that contain just one word, and 
strings that contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence. 
What edge cases need to be considered? 
How would you handle those edge cases without ignoring them? 
Write a function that returns the middle word of a phrase or sentence. 
It should handle all of the edge cases you thought of.
*/

/*
Input:
- a string

Output:
- the middle word of that string

Rules:
- should account for strings that have one word
- should account for strings that have no words

Mental Model:
Write a function that takes a string as an argument, and returns the 
middle word of the string. It should handle cases where the string is one word 
or have no words.


Examples/Test Cases:
console.log(middleWord('')); // no words present
console.log(middleWord('hello')); // string must be more than one word
console.log(middleWord('why hello there')); // hello
console.log(middleWord('why hello there friend')); // there is no middle word

Data Structures:
- array

Algorithm:
- write a function that takes a string as an argument
- split the string into an array of words
- find the middle index of the words array
- return a message if the words array contains no words
- return a message if the words array contains one word
- return a message if the words array does not have a middle word (is even)
- return the word in the middle index of the words array if all cases pass
*/

function middleWord(string) {
  let words = string.split(' ');
  
  // find the middle index of the words array
  let middleIndex = Math.floor(words.length / 2);
    
  // access the element in the middle index of the words array
  let middleWord = words[middleIndex];

  if (words.every(word => word === '')) {
    return 'no words present';
  } else if (words.length === 1) {
    return 'string must be more than one word';
  } else if (words.length % 2 === 0) {
    return 'there is no middle word';
  } else {
    return middleWord;
  }
}
console.log(middleWord('')); // no words present
console.log(middleWord('hello')); // string must be more than one word
console.log(middleWord('why hello there')); // hello
console.log(middleWord('why hello there friend')); // there is no middle word