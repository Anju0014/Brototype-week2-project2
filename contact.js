const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const msg = document.getElementById('msg');

        const form = document.getElementById('submit-form');
        const name_error = document.getElementById('name_error');

        const email_error = document.getElementById('email_error');
        const subject_error = document.getElementById('subject_error');
        const msg_error = document.getElementById('msg_error');
        const submitButton = document.querySelector('button[type="submit"]');

        function validateForm() {

            const name_check = /^[a-zA-Z\s]+$/;
            var email_check = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            let valid = true;

            if (!name.value.match(name_check)  ) {
                name_error.innerHTML = " Valid Name is required( Letters Only)";
                valid = false;
                
            } else {
                name_error.innerHTML = "";
            }

            if (!email.value.match(email_check)) {
                email_error.innerHTML = "Valid email is required";
                valid = false;
            } else {
                email_error.innerHTML = "";
            }

            if (subject.value.length <= 3) {
                subject_error.innerHTML = "Subject must be more than 3 characters";
                valid = false;
            } else {
                subject_error.innerHTML = "";
            }

            if (msg.value.length <= 3) {
                msg_error.innerHTML = "Message must be more than 3 characters";
                valid = false;
            } else {
                msg_error.innerHTML = "";
            }

            submitButton.disabled = !valid;
            return valid;
        }

        name.addEventListener('input', validateForm);
        email.addEventListener('input', validateForm);
        subject.addEventListener('input', validateForm);
        msg.addEventListener('input', validateForm);

        form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!validateForm()) {
        return; // Exit if form validation fails
    }

    $.ajax({
        url: form.action,
        data: $(form).serialize(),
        method: "POST",
        success: function(response) {
            alert("Form submitted successfully");
            window.location.reload(); // Reload the page after displaying the alert
        },
        error: function(err) {
            alert("Something went wrong");
        }
    });
});


        validateForm(); // Initial validation check