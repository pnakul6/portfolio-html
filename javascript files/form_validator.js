document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMsg = document.getElementById('error-msg');

    // Validate fields
    if (name === '' || email === '' || message === '') {
        errorMsg.textContent = 'Please fill out all fields.';
        return;
    }

   
    if (!validateEmail(email)) {
        errorMsg.textContent = 'Please enter a valid email address.';
        return;
    }

    errorMsg.textContent = '';
    alert('Form submitted successfully!');

    
    document.getElementById('contactForm').reset();
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
