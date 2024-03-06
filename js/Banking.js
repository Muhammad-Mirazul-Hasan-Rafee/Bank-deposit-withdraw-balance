//handle diposit button event
document.getElementById('deposit-button').addEventListener('click' , function(){

    //get the amount deposited


    const depositInput = document.getElementById('deposit-input');  // input er vitorer number ante hbe

    //deposit er input amount nite hbe

    const depositAmount = depositInput.value;
  

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount; 


    //clear the deposit input field
    depositInput.value = ''; 








});