

function calculateLoan(){
  const LoanAmount = document.getElementById('loan-amount').value;
  const InterestRate = document.getElementById('interest-rate').value;
  const MonthsToPay = document.getElementById('months-to-pay').value;

  let interest = (LoanAmount * (InterestRate * 0.01))/MonthsToPay;

  let MonthlyPayment = (LoanAmount / MonthsToPay + interest).toFixed(2);

  document.getElementById('payment').innerHTML=`Monthly Payment: ${MonthlyPayment}`;
}