const pass = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');
const register = document.querySelector('#register');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const num = document.querySelector('#number');
const len = document.querySelector('#length');
const sp_char = document.querySelector('#special_char');
const password_match = document.querySelector('#password-match');
const registerBtn = document.querySelector('.register-btn');
const green = '#81d381d9';
const red = '#e32c2ce0';
const validationState = {
    upper: false,
    lower: false,
    number: false,
    special_char: false,
    length: false,
    match: false,
};

function validate() {
    validationState.upper = /[A-Z]/.test(pass.value);
    validationState.lower = /[a-z]/.test(pass.value);
    validationState.number = /\d/.test(pass.value);
    validationState.special_char = /[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,]/.test(pass.value);
    validationState.length = pass.value.length >= 6;
    validationState.match = pass.value === pass2.value;

    updateValidationUI();
}

function confirmPass() {
    validationState.match = pass.value === pass2.value;
    validationState.upper = /[A-Z]/.test(pass.value);
    validationState.lower = /[a-z]/.test(pass.value);
    validationState.number = /\d/.test(pass.value);
    validationState.special_char = /[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,]/.test(pass.value);
    validationState.length = pass.value.length >= 6;

    if (
        validationState.match &&
        validationState.upper &&
        validationState.lower &&
        validationState.number &&
        validationState.special_char &&
        validationState.length
    ) {
        password_match.style.color = red;
        password_match.style.display = 'inline';
    } else {
        password_match.style.color = green;
        password_match.style.display = 'inline';
    }

    updateValidationUI();
}

function updateValidationUI() {
    upper.style.color = validationState.upper ? green : red;
    lower.style.color = validationState.lower ? green : red;
    num.style.color = validationState.number ? green : red;
    sp_char.style.color = validationState.special_char ? green : red;
    len.style.color = validationState.length ? green : red;
    password_match.style.color = validationState.match ? green : red;
    register.disabled =
        !validationState.upper ||
        !validationState.lower ||
        !validationState.number ||
        !validationState.special_char ||
        !validationState.length ||
        !validationState.match;

    if (
        validationState.upper &&
        validationState.lower &&
        validationState.number &&
        validationState.special_char &&
        validationState.length &&
        validationState.match
    ) {
        applySuccessStyles();
    } else {
        disableSuccessStyles();
    }
}

function applySuccessStyles() {
    registerBtn.classList.add('register-success');
    registerBtn.classList.remove('register-btn');
    registerBtn.disabled = false;
}

function disableSuccessStyles() {
    registerBtn.classList.add('register-btn');
    registerBtn.classList.remove('register-success');
    registerBtn.disabled = true;
}