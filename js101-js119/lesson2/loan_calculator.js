let loanAmount = 50000;
let annualPercentageRate = 9.06;
let loanDuration = 72; // months

let monthlyInterestRate = annualPercentageRate / 12;

let monthlyAmount = loanAmount * (
  monthlyInterestRate / (
    1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))
  )
);

let monthlyPayment = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(monthlyAmount);

console.log(monthlyPayment);