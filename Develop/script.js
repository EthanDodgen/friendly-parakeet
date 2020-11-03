var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["0","1","2","3","4","5","6","7","8","9"]
var symbol = ["#","$","%","&","+","-",":","?"]

var answer = []

//obtain password criteria

var length = window.prompt("Between 8 - 128, how long would you like your password?")
console.log(length)

function criteria_prompt() {

  var characters = window.prompt("Would you like to include lowercase, uppercase, or both characters.")
    characters = characters.toLocaleLowerCase()
    if ((characters === "lowercase") || (characters === "LOWERCASE") || (characters === "uppercase") || (characters === "UPPERCASE") || (characters === "both") || (characters === "BOTH")) {
      window.alert("Are you sure you want " + characters + "?")
      console.log(characters)
    }else {
      criteria_prompt()
      console.log("no match found")
    }
    if (characters === "lowercase")
      answer.push(lowercase[0])
      console.log(answer)
  }
criteria_prompt();


function numeric_prompt() {

  var number = window.prompt("Would you like numeric characters?")

    if ((number === "yes") || (number === "no")){
      window.alert("Are you sure you meant " + number + "?")
      console.log(number)
    }else {
      numeric_prompt()
    }
    answer.push(numeric[0])
}
numeric_prompt();

function special_characters() {

  var special = window.prompt("Would you like to use special characters?") 

  if ((special === "yes") || (special === "no")){
    window.alert("Are you sure you meant " + special + "?")
    console.log(special)
  }else {
    special_characters()
  }
  answer.push(symbol[0])
}
special_characters();




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
