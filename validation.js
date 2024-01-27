document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        function isEmpty(value, fieldName) {
            if (value.trim() === "") {
                alert("Please fill in the required field: " + fieldName);
                return true;
            }
            return false;
        }

        var username = document.getElementById("username").value;
        var phoneNo = document.getElementById("phone_no").value;
        var email = document.getElementById("Email").value;
        var password = document.getElementById("Create_Password").value;
        var confirmPassword = document.getElementById("Confirm_Password").value;
        var termsCheckbox = document.querySelector(".arrow-togglable");

        if (
            isEmpty(username, "User Name") ||
            isEmpty(phoneNo, "Phone no.") ||
            isEmpty(email, "Email") ||
            isEmpty(password, "Create Password") ||
            isEmpty(confirmPassword, "Confirm Password")
        ) {
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

        
        eyeIcon.classList.toggle('visible', type === 'text');
    }
});


    function validateForm() {
        var username = usernameInput.value;
        var password = passwordInput.value;

        if (username.trim() === "") {
            alert("Please enter your username.");
            return false;
        }
        if (password.trim() === "") {
            alert("Please enter your password.");
            return false;
        }
        return true;
    }
;
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var emailInput = document.getElementById("Email");
    var confirmEmailInput = document.getElementById("confirm_Email");

    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    emailInput.addEventListener("input", function () {
        validateEmail();
    });

    confirmEmailInput.addEventListener("input", function () {
        validateEmail();
    });

    function validateForm() {
        var email = emailInput.value.trim();
        var confirmEmail = confirmEmailInput.value.trim();

        
        if (email === "") {
            alert("Please enter your email.");
            return false;
        }

        
        if (confirmEmail === "") {
            alert("Please confirm your email.");
            return false;
        }

        
        if (email !== confirmEmail) {
            alert("Email and Confirm Email do not match.");
            return false;
        }

        return true;
    }

    function validateEmail() {
        var email = emailInput.value.trim();
        var confirmEmail = confirmEmailInput.value.trim();
        if (email !== confirmEmail) {
            confirmEmailInput.setCustomValidity("Email and Confirm Email do not match.");
        } else {
            confirmEmailInput.setCustomValidity("");
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var newPasswordInput = document.getElementById("newPassword");
    var confirmNewPasswordInput = document.getElementById("confirmNewPasword");

    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    newPasswordInput.addEventListener("input", function () {
        validatePasswords();
    });

    confirmNewPasswordInput.addEventListener("input", function () {
        validatePasswords();
    });

    function validateForm() {
        var newPassword = newPasswordInput.value.trim();
        var confirmNewPassword = confirmNewPasswordInput.value.trim();

    
        if (newPassword === "") {
            alert("Please enter your new password.");
            return false;
        }

        if (confirmNewPassword === "") {
            alert("Please confirm your new password.");
            return false;
        }

        
        if (newPassword !== confirmNewPassword) {
            alert("New Password and Confirm New Password do not match.");
            return false;
        }

        return true;
    }

    function validatePasswords() {
        var newPassword = newPasswordInput.value.trim();
        var confirmNewPassword = confirmNewPasswordInput.value.trim();

        
        if (newPassword !== confirmNewPassword) {
            confirmNewPasswordInput.setCustomValidity("New Password and Confirm New Password do not match.");
        } else {
            confirmNewPasswordInput.setCustomValidity("");
        }
    }
});
