// Variables for the arrays needed to generate password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialChar;
var confirmNumbers;

var generateBtn = document.querySelector("#generate");

// Activates the function when the button is clicked
generateBtn.addEventListener("click", function (){
  password = generatePassword ();
  document.getElementById ("password").Placeholder = password;
  console.log("Button was clicked")
});

// Starts the first prompt to make the password
var generatePassword = function() {
  var userChoice = parseInt(prompt ("How many characters would you like to use? 8-128"));


//Prompts for password specification
  if (!userChoice) {
    alert("Choose a number!");
  } else if (userChoice < 8 || userChoice > 128) {
    userChoice = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    confirmLowerCase = confirm ("Would you like to use lower case characters?");
    confirmUpperCase = confirm ("Would you like use upper case characters?");
    confirmSpecialChar = confirm ("Would you like to use special characters?");
    confirmNumbers = confirm ("Would you like to use numbers?");
  }
// All of the different options for a password the user can select
  if (!confirmLowerCase && !confirmUpperCase && !confirmSpecialChar && !confirmNumbers) {
    choices = alert ("You must choose a criteria");
  }
  else if (confirmLowerCase && confirmUpperCase && confirmSpecialChar && confirmNumbers) {
    choices = lowerCase.concat (upperCase, specialChar, numbers);
  }
  else if (confirmLowerCase && confirmUpperCase && confirmSpecialChar) {
  choices = lowerCase.concat (upperCase, specialChar);
  }
  else if (confirmLowerCase && confirmUpperCase) {
    choices = lowerCase.concat (upperCase);
  }
  else if (confirmLowerCase && confirmSpecialChar && confirmNumbers) {
    choices = lowerCase.concat (specialChar, numbers);
  }
  else if (confirmLowerCase && confirmUpperCase && confirmNumbers) {
    choices = lowerCase.concat (upperCase, numbers);
  }
  else if (confirmLowerCase && confirmSpecialChar) {
    choices = lowerCase.concat (specialChar);
  }
  else if (confirmLowerCase && confirmNumbers) {
    choices = lowerCase.concat (numbers);
  }
  else if (confirmUpperCase && confirmSpecialChar && confirmNumbers) {
  choices = upperCase.concat (specialChar, numbers);
  }
  else if (confirmUpperCase && confirmSpecialChar) {
    choices = upperCase.concat (specialChar);
  }
  else if (confirmUpperCase && confirmNumbers) {
    choices = upperCase.concat (numbers);
  } else if (confirmSpecialChar && confirmNumbers) {
    choices = specialChar.concat (numbers);
  }
  else if (confirmLowerCase && !confirmUpperCase && !confirmSpecialChar && !confirmNumbers) {
    choices = lowerCase;
  }
  else if (!confirmLowerCase && confirmUpperCase && !confirmSpecialChar && !confirmNumbers) {
  choices = upperCase;
  }
  else if (!confirmLowerCase && !confirmUpperCase && confirmSpecialChar && !confirmNumbers) {
    choices = specialChar;
  }
  else if (!confirmLowerCase && !confirmUpperCase && !confirmSpecialChar && confirmNumbers) {
    choices = numbers;
  }


  var genPassword = [];
  for (var i = 0; i < userChoice; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  genPassword.push(pickChoices);
  }

  var password = genPassword.join("");

// Produces the password  
  writePassword(password);
  return password;
}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
