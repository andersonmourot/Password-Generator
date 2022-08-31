// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
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
  console.log("Button was clicked")
});

var generatePassword = function() {
  var userChoice = parseInt(prompt ("How many characters would you like to use? 8-128"));

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
  else if (confirmUpperCase && confirmSpecialChar && confirmNumbers) {
  choices = upperCase.concat (specialChar, numbers);
  }
  else if (confirmUpperCase && confirmSpecialChar) {
    choices = upperCase.concat (specialChar);
  }
  else if (confirmUpperCase && confirmNumbers) {
    choices = upperCase.concat (numbers);
  }
}

var genPassword = [];
for (var i = 0; i < userChoice; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  genPassword.push(pickChoices);
}

var password = genPassword.join("");

UserInput(password);
return password;


// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);