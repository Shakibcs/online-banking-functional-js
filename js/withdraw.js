document.getElementById('btn-withdraw').addEventListener('click',function(){

    //withdraw-section 
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueId('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total',newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueId('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementValueById('balance-total',newBalanceTotal);


})