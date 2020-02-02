// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var length;
var lower;
var upper;
var number;
var special;

// Starts the generation process.

function generatePassword() {
  promptLength();
}

// Sets the desired password length and runs promptParameters(). If a non-valid character is entered, it will re-prompt.
// If cancel button is pressed, the function drops.

function promptLength() {
  length = prompt("Please enter a desired password length between 8 and 128 characters.");
  if(length >= 8 && length <= 128) {
    promptParamaters();
  } else if(length === null) {
    return;
  } else {
    promptLength();
  }
}

// Allows the user to choose what types of characters to use, restarting if none are chosen.
// Once at least one valid input is chosen, runs generate().

function promptParamaters() {
 lower = confirm("Use lowercase characters?");
 upper = confirm("Use uppercase characters?");
 number = confirm("Use numerical characters?");
 special = confirm("Use special characters?");

  if(lower === true || upper === true || number === true || special === true) {
    generate();
  } else {
    alert("You must select at least one criteria.");
    promptParamaters();
  }
}

// Generates and returns the password.

function generate() {

  // Initializes the lower and upper ranges, as well as the counter.

  var lowerRange = [];
  var upperRange = [];
  var counter = 0;

  // Pushes the lower and upper bounds of the decimal charcode ranges for each character type.
  // Increases the counter by 1 for each character type chosen.

  if(lower === true) {
    lowerRange.push(97);
    upperRange.push(122);
    counter++;
  }

  if(upper === true) {
    lowerRange.push(65);
    upperRange.push(90);
    counter++;
  }

  if(number === true) {
    lowerRange.push(48);
    upperRange.push(57);
    counter++;
  }

  if(special === true) {
    lowerRange.push(33);
    upperRange.push(47);
    counter++;
  }

  // For the length of the password, randomly select which character type to use from those chosen.
  // Then get a random character from within the range.
  // Then build and pass back the password string.


  for(i = 0; i < length; i++) {
    var charType = Math.floor(Math.random() * counter);  
    var charGen = Math.floor(Math.random() * (upperRange[charType] - lowerRange[charType] + 1) + lowerRange[charType]);
    password += String.fromCharCode(charGen);
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Write password to the #password input
function writePassword() {
  length = 0;
  password = "";
  password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);