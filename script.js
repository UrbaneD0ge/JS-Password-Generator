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
var alpha = "abcdefghijklmnopqrstuvwxyvar";
var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

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
    var protoPW = "";
    // console.log(typeof PWlength);

    if (spc === true) {
      alpha = alpha.concat(symbols);
      console.log(alpha);
    }
    
    if (cap === true) {
      alpha = alpha.concat(capitals);
      console.log(alpha);
    }
    
    if (num === true) {
      alpha = alpha.concat(numbers);
      console.log(alpha);
      console.log(protoPW);
    }
    
    for (var i = 0; i < PWlength; i++) {
      // protoPW += alpha.charAt(Math.floor(Math.random() * 26));
      protoPW += alpha.charAt(Math.random() * alpha.length);
      
      
      // if spc = true, select from charset that includes alpha + spc
      console.log(protoPW);
      console.log(protoPW.length);
    
    }
    return protoPW;

  } else {
    console.log("NOPE.");
    generatePassword();
    // error handling needed //
  }
}
