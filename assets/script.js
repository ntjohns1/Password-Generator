// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperChoice = false;

var lowerChoice = false;

var numberChoice = false;

var specialChoice = false;

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 

var numeral = '0123456789'

var specialChar = '!\"#$%\&\'\(\)*+,-./:;<=>?@[\\]^_\`{|}~'

function generatePassword() {
  var selectLength = Number (window.prompt('Select the length of your password. (8 to 128 characters)'));

  if (isNaN(selectLength) || selectLength < 8 || selectLength > 128) {
    alert("Password must be between 8 and 128 charactters.");
    return null
  }
  
  upperChoice = confirm('Do you want to include uppercase letters?');
  
  lowerChoice = confirm('Do you want to include lowercase letters?');
  
  numberChoice = confirm('Do you want to include numbers?');
  
  specialChoice = confirm('Do you want to include special characters?');

  var passwordChoices = "";

  if (upperChoice === true) {
    passwordChoices += alphabet
  }

  if (lowerChoice === true) {
    passwordChoices += alphabet.toLowerCase()
  }

  if (numberChoice === true) {
    passwordChoices += numeral
  }
  
  if (specialChoice === true) {
    passwordChoices += specialChar
  }
  
  if (upperChoice === false && lowerChoice === false && numberChoice === false && specialChoice === false) {
    alert("You must choose at least one option.")
    return null
  }
  
  var password = ""
  
  for (var i = 0; i < selectLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordChoices.length)
    password += passwordChoices[randomIndex]
  }
  
  return password
}

 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 