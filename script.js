// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {

  var length = 8;
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var pass = ""

  for (let i = 0; i <= length; i++) {
    pass = pass + charset.charAt(Math.floor(Math.random() * Math.floor(charset.length - 1)));

  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
