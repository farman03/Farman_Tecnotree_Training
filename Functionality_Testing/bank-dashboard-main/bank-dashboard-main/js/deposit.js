document.getElementById('deposit-btn').addEventListener('click', function(){
   const depositField = document.getElementById('deposit-field');
   const depositOldValue = depositField.value;
   const depositNewValue = parseFloat(depositOldValue);

   const depositTotal = document.getElementById('deposit-total');
   const depositTotalOld = depositTotal.innerText;   
   const depositTotalNew = parseFloat(depositTotalOld);

   const currentDepositTotal = depositNewValue + depositTotalNew;
   depositTotal.innerText = currentDepositTotal;
   depositField.value = '';

   const totalBalanceField = document.getElementById('total-balance');
   const totalBalanceOld = totalBalanceField.innerText;
   const totalBalanceNew = parseFloat(totalBalanceOld);

   const currentTotalBalance = totalBalanceNew + depositNewValue;
   totalBalanceField.innerText = currentTotalBalance;
})