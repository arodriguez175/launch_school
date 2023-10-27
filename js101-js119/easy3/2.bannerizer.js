/*
Write a function that will take a short line of text, and write it to 
the console log within a box.
*/

/*
Input:
- a short line of text

Output:
- console log of the text within a box

Rules:
- must use a function

Mental Model:

Examples/Test Cases:
logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

Data Structures:

Algorithm:
- write the function body with parameter for message
- define the horizontal rule
  - assign a template literal starting and ending with +
  - in between, repeat '-' as long as the message length + 2
- define the empty space
  - assign a template literal starting and ending with ' '
  - in between, repeat ' ' as long as the message length + 2
- log the horizontal rule
- log the emptyline
- log the message in between `| |`
- log the emptyline
- log the horizontal rule
- call the function with a message passed in
*/

function logInBox(message) {
  let horizontalRule = `+${'-'.repeat(message.length + 2)}+`;
  let emptyLine = `|${' '.repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('x');