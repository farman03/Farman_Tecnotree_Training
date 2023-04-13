// Get the necessary HTML elements
const toAccountInput = document.getElementById('to-account');
const transferAmountInput = document.getElementById('transfer-amount');
const transferButton = document.getElementById('transfer-btn');
const depositTotal = document.getElementById('deposit-total');
const withdrawTotal = document.getElementById('withdraw-total');
const totalBalance = document.getElementById('total-balance');

// Add a click event listener to the transfer button
transferButton.addEventListener('click', () => {
  // Get the input values
  const toAccount = toAccountInput.value;
  const transferAmount = parseFloat(transferAmountInput.value);

  // Check if the input values are valid
  if (!toAccount || isNaN(transferAmount) || transferAmount <= 0) {
    alert('Please enter a valid account number and transfer amount.');
    return;
  }

  // Update the deposit and withdraw totals and the total balance
  depositTotal.innerText = (parseFloat(depositTotal.innerText) - transferAmount).toFixed(2);
  withdrawTotal.innerText = (parseFloat(withdrawTotal.innerText) + transferAmount).toFixed(2);
  totalBalance.innerText = (parseFloat(totalBalance.innerText) - transferAmount).toFixed(2);

  // Reset the input fields
  toAccountInput.value = '';
  transferAmountInput.value = '';

  // Show a success message
  alert(`Successfully transferred ₹${transferAmount.toFixed(2)} to account ${toAccount}.`);
});
