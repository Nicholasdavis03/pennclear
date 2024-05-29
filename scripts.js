document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('removal-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const details = document.getElementById('details').value;
        
        if (validateForm(name, email, phone, address, details)) {
            alert('Request submitted successfully!');
            form.reset();
        }
    });

    function validateForm(name, email, phone, address, details) {
        if (!name || !email || !phone || !address || !details) {
            alert('Please fill in all fields.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        if (!validatePhone(phone)) {
            alert('Please enter a valid phone number.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(String(phone));
    }
});
