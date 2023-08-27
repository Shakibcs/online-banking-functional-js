

document.getElementById('btn-deposit').addEventListener('click',function(){//eventlistener

//calculate new deposit total by id
const newDepositAmount = getInputValueById('deposit-field');

//set deposit total by id
const previousDepositTotal = getTextElementValueId('deposit-total');

//calculate new deposit total
const newDepositTotal = previousDepositTotal + newDepositAmount; 

//set deposit total value;
setTextElementValueById('deposit-total', newDepositTotal);


//Balance ---get previous balance by using the function
const previousBalanceTotal = getTextElementValueId('balance-total');
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//set 
setTextElementValueById('balance-total', newBalanceTotal);

});

