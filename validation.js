document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function (event) {
            if (!validateForm()) {
                event.preventDefault();
            }
        });
    }

    function validateForm() {
        const username = document.getElementById('username').value;
        const phoneNo = document.getElementById('phone_no').value;
        const email = document.getElementById('Email').value;
        const password = document.getElementById('Create_Password').value;
        const confirmPassword = document.getElementById('Confirm_Password').value;
        const acceptTerms = document.getElementById('accept_terms').value;
       const inputPassword = document.getElementById('Enter_Password').value;

        if (!username || !phoneNo || !email || !password || !confirmPassword || !acceptTerms.checked || !inputPassword) {
            alert('Please fill in all required fields and accept the terms and conditions.');
            return false;
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const createPasswordInput = document.getElementById('Create_Password');
    const confirmPasswordInput = document.getElementById('Confirm_Password');

    createPasswordInput.addEventListener('input', function () {
        validatePasswordMatch();
    });

    confirmPasswordInput.addEventListener('input', function () {
        validatePasswordMatch();
    });

    function validatePasswordMatch() {
        const createPassword = createPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const passwordMatchMessage = document.getElementById('password_match_message');

        if (createPassword !== confirmPassword) {
            confirmPasswordInput.setCustomValidity('Passwords do not match');
            passwordMatchMessage.textContent = 'Passwords do not match';
            passwordMatchMessage.style.color = 'red';
        } else {
            confirmPasswordInput.setCustomValidity('');
            passwordMatchMessage.textContent = '';
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const formElements = document.querySelectorAll('input, select, link, textarea, button');

    document.addEventListener('keydown', function (event) {
        const focusedElement = document.activeElement;
        const currentIndex = Array.from(formElements).indexOf(focusedElement);

        if (currentIndex >= 0) {
            if (event.code === 'ArrowUp') {
                const previousIndex = currentIndex === 0 ? formElements.length - 1 : currentIndex - 1;
                formElements[previousIndex].focus();
            } else if (event.code === 'ArrowDown') {
                const nextIndex = currentIndex === formElements.length - 1 ? 0 : currentIndex + 1;
                formElements[nextIndex].focus();
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const createPasswordInput = document.getElementById('Create_Password');
    const confirmPasswordInput = document.getElementById('Confirm_Password');
    const createPasswordEyeIcon = document.getElementById('togglePassword');
    const confirmPasswordEyeIcon = document.getElementById('togglePassword1');

    createPasswordInput.addEventListener('focus', function () {
        toggleEyeIconVisibility(createPasswordEyeIcon);
    });

    createPasswordInput.addEventListener('blur', function () {
        hideEyeIcon(createPasswordEyeIcon);
    });

    confirmPasswordInput.addEventListener('focus', function () {
        toggleEyeIconVisibility(confirmPasswordEyeIcon);
    });

    confirmPasswordInput.addEventListener('blur', function () {
        hideEyeIcon(confirmPasswordEyeIcon);
    });

    createPasswordEyeIcon.addEventListener('click', function () {
        togglePasswordVisibility(createPasswordInput, createPasswordEyeIcon);
    });

    confirmPasswordEyeIcon.addEventListener('click', function () {
        togglePasswordVisibility(confirmPasswordInput, confirmPasswordEyeIcon);
    });

    function toggleEyeIconVisibility(eyeIcon) {
        eyeIcon.classList.add('visible');
    }

    function hideEyeIcon(eyeIcon) {
        eyeIcon.classList.remove('visible');
    }

    function togglePasswordVisibility(passwordInput, eyeIcon) {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;

        // Update the eye icon to reflect the current state
        eyeIcon.classList.toggle('visible', type === 'text');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const PasswordInput = document.getElementById('Enter_Password');
    const PasswordEyeIcon = document.getElementById('togglePassword');


    PasswordInput.addEventListener('focus', function () {
        toggleEyeIconVisibility(PasswordEyeIcon);
    });

    PasswordInput.addEventListener('blur', function () {
        hideEyeIcon(PasswordEyeIcon);
    });

    PasswordEyeIcon.addEventListener('click', function () {
        togglePasswordVisibility(PasswordInput, PasswordEyeIcon);
    });

    function toggleEyeIconVisibility(eyeIcon) {
        eyeIcon.classList.add('visible');
    }

    function hideEyeIcon(eyeIcon) {
        eyeIcon.classList.remove('visible');
    }
    function togglePasswordVisibility(passwordInput, eyeIcon) {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;

        // Update the eye icon to reflect the current state
        eyeIcon.classList.toggle('visible', type === 'text');
    }
});
