let readlineSync = require("readline-sync");

function isInvalid(number) {
  return number.trim() === '' || Number.isNaN(Number(number)) ||
  Number(number) < 0;
}

console.log("Enter the loan amount (Example: 50000 for $50,000): ");
let loanAmount = readlineSync.question();

while (isInvalid(loanAmount)) {
  console.log('Must enter a positive number');
  console.log("Enter the loan amount (Example: 50000 for $50,000): ");
  loanAmount = readlineSync.question();
}

console.log("Enter the interest rate (Example: 5 for 5%): ");
let interestRate = readlineSync.question();

while (isInvalid(interestRate)) {
  console.log('Must enter a positive number');
  console.log("Enter the interest rate (Example: 5 for 5%): ");
  interestRate = readlineSync.question();
}

console.log("Enter the loan duration (Years): ");
let years = readlineSync.question();

while (isInvalid(years)) {
  console.log('Must enter a positive number');
  console.log("Enter the loan duration (Years): ");
  years = readlineSync.question();
}

let annualInterestRate = Number(interestRate) / 100;
let monthlyInterestRate = annualInterestRate / 12;
let months = Number(years) * 12;

let monthlyPayment = Number(loanAmount) * (
  monthlyInterestRate / (
    1 - Math.pow((1 + monthlyInterestRate), (-months))
  )
);

console.log(`Monthly Payment: $${String(monthlyPayment.toFixed(2))}`);