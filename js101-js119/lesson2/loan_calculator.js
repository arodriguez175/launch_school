let readlineSync = require("readline-sync");

console.log("Enter the loan amount: ");
let loanAmount = Number(readlineSync.question());

console.log("Enter the interest rate: ");
let interestRate = Number(readlineSync.question());

console.log("Enter the loan duration (Years) ");
let years = Number(readlineSync.question());

let annualInterestRate = interestRate / 100;
let monthlyInterestRate = annualInterestRate / 12;
let months = years * 12;

let monthlyAmount = loanAmount * (
  monthlyInterestRate / (
    1 - Math.pow((1 + monthlyInterestRate), (-months))
  )
);


let monthlyPayment = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(monthlyAmount);

console.log(`Monthly Payment: ${monthlyPayment}`);