const readline = require('readline-sync');
const VALID_CHOICES = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock',
  'fire',
  'water'
];

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
  fire: ['paper', 'lizard'],
  water: ['fire', 'paper'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function greet() {
  prompt(
    `Welcome to RPS: Bonus! Here are the rules:
    - rock beats scissors and lizard
    - paper beats rock and spock
    - scissors beats paper and lizard
    - lizard beats paper and spock
    - spock beats rock and scissors
    - fire beats paper and lizard
    - water beats fire and paper`
  );
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
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

greet();

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

  while ((answer.length !== 1) || (answer[0] !== 'n' && answer[0] !== 'y')) {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLocaleLowerCase();
  }

  if (answer) {
    console.clear();
  }

  if (answer[0] !== 'y') break; // out of outer while loop
}