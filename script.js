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
var PWlength = undefined;
var spc = undefined;
var cap = undefined;
var num = undefined;

// set of possible chars, copied from W3collective, modified by Kip
const alpha = "abcdefghijklmnopqrstuvwxyz";
const capitals ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// on button click start function, prompt and store length
function generatePassword() {
  var PWlength = prompt("Specify a password length between 8 - 128 characters", "8-128");
  
// convert PWlength string to integer, log //
  parseInt(PWlength);
  console.log(PWlength);
  console.log(PWlength.length);


  // Validate PWlength 
  if (( PWlength >= 8) && (PWlength <= 128)) {

    // Gather user specifications, store as booleans
    var spc = window.confirm("Include special characters?");
    console.log(spc);
    var cap = window.confirm("Include CAPS characters?");
    console.log(cap);
    var num = window.confirm("Include numeric characters?");
    console.log(num);

    // set password to blank, start adding characters //
    for (var i = PWlength.length; i >= PWlength; i++) {
      console.log(i);
      password = "";
      // model code from W3 demo
      Math.floor(Math.random() * PWlength.length);

    }

  } else {
 
    console.log("NOPE.");
    generatePassword();
    // error handling needed //
  }
  return;
}
