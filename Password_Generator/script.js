document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const generateBtn = document.getElementById("generate");
    const copyBtn = document.getElementById("copy");
    const refreshBtn = document.getElementById("refresh");

    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]<>?";

    function generatePassword() {
        let characters = "";
        if (uppercaseCheckbox.checked) characters += uppercaseChars;
        if (lowercaseCheckbox.checked) characters += lowercaseChars;
        if (numbersCheckbox.checked) characters += numberChars;
        if (symbolsCheckbox.checked) characters += symbolChars;

        if (characters === "") {
            passwordField.value = "Select at least one option!";
            return;
        }

        let password = "";
        const passwordLength = 12; // You can make it customizable

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        passwordField.value = password;
    }

    function copyToClipboard() {
        passwordField.select();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    }

    generateBtn.addEventListener("click", generatePassword);
    copyBtn.addEventListener("click", copyToClipboard);
    refreshBtn.addEventListener("click", generatePassword);
    
    // Generate a password on page load
    generatePassword();
});
