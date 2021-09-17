// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// on button click start function, prompt and store length
function writePassword() {
  var PWlength = prompt("Specify a password length between 8 - 128 charachters", "8-128");
  console.log(PWlength);
return;
}

if (( 8 <= PWlength) && (PWlength <= 128)) {
  window.alert("That checks out...");
} else {
  PWlength = undefined;
  writePassword();
  console.log("Good enough")
}
// variable not scoped outside function, if statements not chained into initial function..
