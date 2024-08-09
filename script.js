const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const includeNumbersCheckbox = document.getElementById("includeNumbers");
const includeSymbolsCheckbox = document.getElementById("includeSymbols");

const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

function updateLength(value) {
    lengthValue.textContent = value;
}

function generatePassword() {
    let availableCharacters = characters;
    let passwordLength = lengthSlider.value;

    if (includeNumbersCheckbox.checked) {
        availableCharacters += numbers;
    }
    if (includeSymbolsCheckbox.checked) {
        availableCharacters += symbols;
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += availableCharacters.charAt(Math.floor(Math.random() * availableCharacters.length));
    }

    passwordInput.value = password;
}

function shufflePassword() {
    let passwordArray = passwordInput.value.split('');
    for (let i = passwordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }
    passwordInput.value = passwordArray.join('');
}

function copyPassword() {
    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

// Generate an initial password when the page loads
generatePassword();
