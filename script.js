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

// declare variable PWlength
var PWlength = NaN;
var spc = undefined;

// on button click start function, prompt and store length
function generatePassword() {
  var PWlength = prompt("Specify a password length between 8 - 128 characters", "8-128");
  parseInt(PWlength);
  console.log(PWlength);
  if (( PWlength >= 8) && (PWlength <= 128)) {
    var spc = window.confirm("Include special characters?");
    console.log(spc);
    
  } else {
    // PWlength = undefined;
    console.log("NOPE.");
    generatePassword();
  }
  return;

}
// variable not scoped outside function, if statements not chained into initial function..
