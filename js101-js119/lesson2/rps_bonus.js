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

let playerScore = 0;
let computerScore = 0;
let matchCounter = 1;

function prompt(message) {
  console.log(`=> ${message}`);
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

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  matchCounter = 1;
}

let answer;
function askToPlayAgain() {
  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();

  while ((answer.length !== 1) || (answer[0] !== 'n' && answer[0] !== 'y')) {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  console.clear();
}

prompt(
  `Welcome to RPS: Bonus! Here are the rules:
  - rock beats scissors, lizard, fire
  - paper beats rock, spock, water
  - scissors beats paper, lizard, spock
  - lizard beats paper, spock, water
  - spock beats rock, scissors, fire
  - fire beats paper, lizard, scissors
  - water beats fire, rock, spock
  
  Enter one of the following keys for a choice:
  - r for rock
  - p for paper
  - s for scissors
  - l for lizard
  - sp for spock
  - f for fire
  - w for water
  
  Whoever wins 3 matches first is the grand winner and the game will end.
  If there is a tie, another match will be started until the tie is broken
  or the game lasts 5 matches. Good luck!`
);

while (true) {
  console.log(`Match ${matchCounter}`);

  prompt(`Choose one: ${Object.values(VALID_CHOICES).join(', ')}`);
  let choice = readline.question().toLowerCase();

  /*
  If the user enters a choice that does not match VALID_CHOICES,
  keep displaying the error message and asking for input
  */
  while (!Object.keys(VALID_CHOICES).includes(choice)) {
    prompt("That's not a vaid choice");
    choice = readline.question().toLowerCase();
  }

  choice = VALID_CHOICES[choice]; // Map the choice back to the full word

  // For computer choice
  let randomIndex = Math.floor(
    Math.random() * Object.values(VALID_CHOICES).length
  );

  let computerChoice = Object.values(VALID_CHOICES)[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  matchCounter += 1;

  if (playerWins(choice, computerChoice)) {
    playerScore += 1;
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  } else if (choice === computerChoice) {
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  } else {
    computerScore += 1;
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  if (playerScore === 3) {
    console.log('You are the grand winner!');
    resetScores();
    askToPlayAgain();
    if (answer[0] !== 'y') break;

  } else if (computerScore === 3) {
    console.log('Computer is the grand winner!');
    resetScores();
    askToPlayAgain();
    if (answer[0] !== 'y') break;

  } else if (matchCounter === 5) {
    console.log("No grand winner, it's a tie!");
    resetScores();
    askToPlayAgain();
    if (answer[0] !== 'y') break;
  }
}