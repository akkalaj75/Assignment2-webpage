// Registration Form Validation
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;
    
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Validate password
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.');
        return;
    }
    
    // Check password match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    
    // Validate phone number
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    
    // Check terms and conditions
    if (!terms) {
        alert('You must agree to the terms and conditions.');
        return;
    }
    
    // Submit the form (this is where you would send the data to your server)
    alert('Registration successful!');
});

// Terms and Conditions Popup
document.getElementById('termsLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('termsAndConditions').style.display = 'block';
});

document.getElementById('closeTerms').addEventListener('click', function() {
    document.getElementById('termsAndConditions').style.display = 'none';
});

// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const usernameEmail = document.getElementById('loginUsernameEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Validate fields
    if (!usernameEmail || !password) {
        alert('Please fill in both fields.');
        return;
    }
    
    // Here you would normally validate the credentials with the server
    alert('Welcome back to [Jyothin manikanta reddy]!');
});
