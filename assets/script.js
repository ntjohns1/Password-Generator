// Assignment Code
// Defining Global Variables
var generateBtn = document.querySelector("#generate");

var upperChoice = false;

var lowerChoice = false;

var numberChoice = false;

var specialChoice = false;

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 

var numeral = '0123456789'

var specialChar = '!\"#$%\&\'\(\)*+,-./:;<=>?@[\\]^_\`{|}~'

// Function containing logic for creating password
function generatePassword() {
  // Initiates window prompting user to select the length of their password to be generated.
  var selectLength = Number(window.prompt('Select the length of your password. (8 to 128 characters)'));
  
  // If user hits cancel in the prompt window, this block ends the function.
  if (selectLength === 0) {
    return null
  }
  
  // If the user enters anything other than a number, or a number less than 8 or greater than 128, the function ends and they are shown an alert.
  if (isNaN(selectLength) || selectLength < 8 || selectLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return null
  }
  
  // The user is presented with a series of confrim windows defining the type of characters to be included in the generated password.
  upperChoice = confirm('Do you want to include uppercase letters?');
  
  lowerChoice = confirm('Do you want to include lowercase letters?');
  
  numberChoice = confirm('Do you want to include numbers?');
  
  specialChoice = confirm('Do you want to include special characters?');

  // Concatenating the strings of available characters into one long string based on user input. 
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

  // Input validation, user must select at least one type of character or the function ends.
  if (upperChoice === false && lowerChoice === false && numberChoice === false && specialChoice === false) {
    alert("You must choose at least one option.")
    return null
  }
  
  // Loops through our long, concatenated string of available characters, grabbing a randomly indexed character from the string based on the length of the password the user selected.
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

 