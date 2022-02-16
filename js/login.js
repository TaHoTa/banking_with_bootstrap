var x = document.getElementById("pass_wrong");
x.style.visibility = "hidden";

document.getElementById('submitButton').addEventListener('click', function () {
    const email = document.getElementById('inputEmail');
    const emailText = email.value;
    const pass = document.getElementById('inputPassword');
    const passText = pass.value;

    if (emailText == 'taz' && passText == '12345') {

        window.location.href = 'banking.html';
    }
    else {

        var x = document.getElementById("pass_wrong");
        x.style.visibility = "visible";


    }
})




