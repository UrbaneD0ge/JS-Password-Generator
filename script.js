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
const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// on button click start function, prompt and store length
function generatePassword() {
  var PWlength = prompt(
    "Specify a password length between 8 - 128 characters",
    "8-128"
  );

  // convert PWlength string to integer, log //
  PWlength = parseInt(PWlength);
  console.log(PWlength);

  // Validate PWlength
  if (PWlength >= 8 && PWlength <= 128) {
    // Gather user specifications, store as booleans
    var spc = window.confirm("Include special characters?");
    console.log(spc);
    var cap = window.confirm("Include CAPS characters?");
    console.log(cap);
    var num = window.confirm("Include numeric characters?");
    console.log(num);

    // set password to blank, for loop to add characters //
    password = "";
    console.log(typeof PWlength);

    for (var i = 0; i < PWlength; i++) {
    
      // model code from W3 demo
      password += alpha.charAt(Math.floor(Math.random() * 26));
      // if spc = true, select from charset that includes alpha + spc
      // if (spc === true) {
      //   Math.random();
      // }
      console.log(password.length);
    
    }

  } else {
    console.log("NOPE.");
    generatePassword();
    // error handling needed //
  }
  return password;
}
