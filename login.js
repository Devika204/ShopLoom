function validateForm() 
{
    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
    
    // Clear previous error messages
    errorMessage.textContent = '';
    errorMessage.style.color = 'red';

    // Warn non-empty inputs
    if (username == '' || password == '') 
    {
        errorMessage.textContent = 'Please fill out both fields.';
        return false;
    }

    // username (3+ characters, alphanumeric)
    if (!/^[a-zA-Z0-9]{3,}$/.test(username)) 
    {
        errorMessage.textContent = 'Username must be at least 3 characters long and contain only letters and numbers.';
        return false;
    }

    if(password.length < 6) 
    {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return false;
    }

    // login check
        alert("You have successfully logged in!");
        window.location.href = 'Home.html'; 
        return false; 
   
}
