document.getElementById('withdraw-btn').addEventListener('click', function(){
   const withdrawInputField = document.getElementById('withdraw-field');
   const withdrawOldValue = withdrawInputField.value;
   const withdrawNewValue = parseFloat(withdrawOldValue);

   const withdrawTotal = document.getElementById('withdraw-total');
   const preWithdrawTotalStr = withdrawTotal.innerText;
   const preWithdrawTotal = parseFloat(preWithdrawTotalStr);
   const currentTotalWithdraw = preWithdrawTotal + withdrawNewValue;
   withdrawTotal.innerText = currentTotalWithdraw;

   const totalBalance = document.getElementById('total-balance');
   const preTotalBalanceStr = totalBalance.innerText;
   const preTotalBalance = parseFloat(preTotalBalanceStr);
   const newTotalBalance = preTotalBalance - withdrawNewValue;
   totalBalance.innerText = newTotalBalance;

   withdrawInputField.value = '';
})