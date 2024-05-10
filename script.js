function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Username validation
    if (!validateEmail(username))
    {
        alert('Please enter a valid email address as the username.');
        return;
    }

    // Password validation
    if (!validatePassword(password))
    {
        alert('Please enter a valid password with an uppercase letter, a number, and no special characters other than @.');
        return;
    }

    if (password === 'SmartServTest@123')
    {
        window.location.href = 'dashboard.html';
    } else
    {
        alert('Incorrect password. Please try again.');
    }
}

function validateEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    // Password validation criteria
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]*[@]?[A-Za-z\d]*$/;
    return passwordRegex.test(password);
}
