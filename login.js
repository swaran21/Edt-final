document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Hardcoded credentials for demonstration
    const validUsername = 'user123';
    const validPassword = 'password123';

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the credentials match
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to the dashboard or homepage after successful login
        window.location.href = 'login_after_main.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
