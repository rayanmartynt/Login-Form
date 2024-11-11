function validatePassword() {
    //Password values
    var password = document.getElementById('password').value;
    var rewritePassword = document.getElementById('rewritePassword').value;

    //Password messages
    var passwordMessage = document.getElementById('passwordMessage');
    var rewritePasswordMessage = document.getElementById('rewritePasswordMessage');

    passwordMessage.textContent = '';
    rewritePasswordMessage.textContent = '';

    if (password === '' || rewritePassword === ''){
        passwordMessage.textContent = 'Please enter both passwords.';
        passwordMessage.className = 'error';

        rewritePasswordMessage.textContent = 'Please enter both passwords.';
        rewritePasswordMessage.className = 'error';

        return false;
    }
    if(password !== rewritePassword){
        passwordMessage.textContent = 'Passwords are not valid or match. Please try again.';
        passwordMessage.className = 'error';

        rewritePasswordMessage.textContent = 'Passwords are not valid or match. Please try again.'
        rewritePasswordMessage.className = 'error'

        return false;
    }

    passwordMessage.textContent = 'Passwords are valid or match.';
    passwordMessage.className = 'success';

    rewritePasswordMessage.textContent = 'Passwords are valid or match.';
    rewritePasswordMessage.className = 'success';

    return true;
}