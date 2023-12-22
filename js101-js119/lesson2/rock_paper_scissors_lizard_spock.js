const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'rock' && computerChoice === 'lizard') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'paper' && computerChoice === 'spock') ||
        (choice === 'scissors' && computerChoice === 'paper') ||
        (choice === 'scissors' && computerChoice === 'lizard') ||
        (choice === 'lizard' && computerChoice === 'paper') ||
        (choice === 'lizard' && computerChoice === 'spock') ||
        (choice === 'spock' && computerChoice === 'rock') ||
        (choice === 'spock' && computerChoice === 'scissors');
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt("Computer wins!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  /*
  if the array from VALID_CHOICES doesn't include the user choice, keep
  displaying the error message and asking for input.
  */
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a vaid choice");
    choice = readline.question();
  }

  // for computer choice
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLocaleLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLocaleLowerCase();
  }

  if (answer[0] !== 'y') break; // out of outer while loop
}