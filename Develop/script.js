// Assignment code here

//Generate Password
//  *obtain password criteria from user
//    *create series of prompts
//      *length (8 - 128)
//      *lowercase and/or uppercase, numeric, and/or special characters)
//    *validate each prompt
//  *create result array
//  *roll the dice a couple times



var length = window.prompt("Between 8 - 128, how long would you like your password?")

var characters = window.prompt("Would you like to include lowercase, uppercase, or both characters.")
  if (characters === "lowercase" || "LOWERCASE" || "uppercase" || "UPPERCASE" || "both" || "BOTH") {
    window.alert("Are you sure you want " + characters + "?")
    } else {
      window.prompt
    }

var special_characters = window.prompt("Would you like to use special characters?") 

console.log(length, characters, special_characters)



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
