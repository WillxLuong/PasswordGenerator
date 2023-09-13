// Get references to the #generate element and checkboxes
var generateBtn = document.querySelector("#generate");
var passwordLengthInput = document.querySelector("#password-length");
var includeLowercaseCheckbox = document.querySelector("#include-lowercase");
var includeUppercaseCheckbox = document.querySelector("#include-uppercase");
var includeNumericCheckbox = document.querySelector("#include-numeric");
var includeSpecialCheckbox = document.querySelector("#include-special");

// Character sets for different types of characters
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=<>?";

// Function to generate a random character from a given character set
function getRandomCharacter(charSet) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(randomIndex);
}

// Function to generate a password based on user criteria
function generatePassword() {
  var passwordLength = parseInt(passwordLengthInput.value);

  // Validate the password length
  if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    // Create a character set based on user criteria
    var charSet = "";
    if (includeLowercaseCheckbox.checked) {
      charSet += lowercaseChars;
    }
    if (includeUppercaseCheckbox.checked) {
      charSet += uppercaseChars;
    }
    if (includeNumericCheckbox.checked) {
      charSet += numericChars;
    }
    if (includeSpecialCheckbox.checked) {
      charSet += specialChars;
    }

    // Check if at least one character type is selected
    if (charSet === "") {
      alert("Please select at least one character type.");
      return "";
    }

    // Generate the password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      password += getRandomCharacter(charSet);
    }

    return password;
  } else {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }
}

// Function to write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password !== "") {
    passwordText.value = password;
    alert("Generated Password: " + password);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
