// Handle (deposit + withdraw update) ----------
function getUpdatedText(value, text) {
    const getInputText = document.getElementById(value);
    const inputValue = getInputText.value;
    const floatValue = parseFloat(inputValue);

    if (floatValue > 0) {
        const InputText = document.getElementById(text);
        const innerText = InputText.innerText;
        const floatText = parseFloat(innerText);


        const updatedText = floatValue + floatText;
        InputText.innerText = updatedText;
    }
    else {
        console.log('Error Error Error')
    }
}

// Handle (withdraw balance) ----------
function getWithdrawBalance(value, text) {
    const getInputText = document.getElementById(value);
    const inputValue = getInputText.value;
    const floatValue = parseFloat(inputValue);

    if (floatValue > 0) {
        const InputText = document.getElementById(text);
        const innerText = InputText.innerText;
        const floatText = parseFloat(innerText);


        const updatedText = floatText - floatValue;
        InputText.innerText = updatedText;
    }
    else {
        console.log('Error Error Error')
    }
}





// Get deposit Input and add------- 
document.getElementById('button_deposit').addEventListener('click', function () {

    getUpdatedText('deposit', 'deposit_text');
    getUpdatedText('deposit', 'balance_text');
    document.getElementById('deposit').value = '';
})

// Get withdraw Input and mnage------- 
document.getElementById('button_withdraw').addEventListener('click', function () {

    const checkBalance = document.getElementById('balance_text').innerText;
    const checkWithdraw = document.getElementById('withdraw').value;

    if (checkBalance > checkWithdraw) {

        getUpdatedText('withdraw', 'withdraw_text');
        getWithdrawBalance('withdraw', 'balance_text');
    }
    else {
        console.log('Error Error Error')

    }

    document.getElementById('withdraw').value = '';
})



