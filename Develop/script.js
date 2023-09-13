// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Declaring all the characters that can be used 
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=<>?";

// Function used to randomise passwords
function getRandomCharacter(charSet) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(randomIndex);
}

// Validate password between 8-128 characters
function generatePassword() {
  var passwordLength = prompt("Enter password length (between 8 and 128 characters):");
  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }
}

// Variables for the of characters
var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

 // Making sure that at least 1 of the charcter types are selected
 if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert("Please select at least one character type.");
  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
