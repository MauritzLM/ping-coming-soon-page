
(function () {

    const form = document.querySelector('form');
    const email = document.querySelector('#email');
    const errorMsg = document.querySelector('.error-msg');

    // on form submit
    form.addEventListener('submit', (e) => {
        // if email not valid
        if (!email.validity.valid) {
            showError();
            e.preventDefault();
        }
    });

    // show error function
    function showError() {
        // no email entered
        if (email.validity.valueMissing) {
            errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
            errorMsg.style.display = "block";
            email.style.borderColor = "hsl(354, 100%, 66%)";
        }

        // invalid email
        else if (email.validity.typeMismatch) {
            errorMsg.textContent = "Please provide a valid email address";
            errorMsg.style.display = "block";
            email.style.borderColor = "hsl(354, 100%, 66%)";
        }
    };
})();