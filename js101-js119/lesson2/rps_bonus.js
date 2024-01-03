const readline = require('readline-sync');
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  l: 'lizard',
  sp: 'spock',
  f: 'fire',
  w: 'water'
};

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard', 'fire'],
  paper: ['rock', 'spock', 'water'],
  scissors: ['paper', 'lizard', 'spock'],
  lizard: ['paper', 'spock', 'water'],
  spock: ['rock', 'scissors', 'fire'],
  fire: ['paper', 'lizard', 'scissors'],
  water: ['fire', 'rock', 'spock'],
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
    - water beats fire and paper
    
    Enter one of the following keys for a choice:
    - r for rock
    - p for paper
    - s for scissors
    - l for lizard
    - sp for spock
    - f for fire
    - w for water`
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
  prompt(`Choose one: ${Object.values(VALID_CHOICES).join(', ')}`);
  let choice = readline.question().toLocaleLowerCase();

  /*
  If the user enters a choice that does not match VALID_CHOICES,
  keep displaying the error message and asking for input
  */
  while (!Object.keys(VALID_CHOICES).includes(choice)) {
    prompt("That's not a vaid choice");
    choice = readline.question().toLocaleLowerCase();
  }

  choice = VALID_CHOICES[choice]; // Map the choice back to the full word

  // For computer choice
  let randomIndex = Math.floor(
    Math.random() * Object.values(VALID_CHOICES).length
  );

  let computerChoice = Object.values(VALID_CHOICES)[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLocaleLowerCase();

  while ((answer.length !== 1) || (answer[0] !== 'n' && answer[0] !== 'y')) {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLocaleLowerCase();
  }

  if (answer[0] !== 'y') break;

  console.clear();
}