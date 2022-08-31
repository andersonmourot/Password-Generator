// Assignment code here
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialChar;
var confirmNumbers;

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function (){
  password = generatePassword ();
  document.getElementById ("password").Placeholder = password;
});

var generatePassword = function() {
  var userChoice = parseInt(prompt ("How many characters would you like to use? 8-128"));

  if (!userChoice) {
    alert("Choose a number!");
  } else if (userChoice < 8 || userChoice > 128) {
    userChoice = parseInt(prompt("You must choose between 8 and 128"));
  } else {

  }
}


// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
