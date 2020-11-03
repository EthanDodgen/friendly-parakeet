//final steps.  generate a password equal to the length chosen from my variable list.

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

    if ((characters === "lowercase") || (characters === "uppercase") || (characters === "both")) {
      window.alert("Are you sure you want " + characters + "?")
      console.log(characters)
    }else {
      criteria_prompt()
    }
    if (characters === "lowercase") {
      var random_index = Math.floor(Math.random() * 25)
        answer.push(lowercase[random_index])
    }
    if (characters === "uppercase") {
      var random_index = Math.floor(Math.random() * 25)
      answer.push(uppercase[random_index])
    }
    if (characters === "both") {
      var random_index = Math.floor(Math.random() * 25)
      answer.push(lowercase[random_index], uppercase[random_index])
    }
      console.log(answer)
  }
criteria_prompt();


function numeric_prompt() {

  var number = window.prompt("Would you like numeric characters?")
    number = number.toLocaleLowerCase()

    if ((number === "yes") || (number === "no")){
      window.alert("Are you sure you meant " + number + "?")
      console.log(number)
    }else {
      numeric_prompt()
    }
    if (number === "yes") {
      var random_number = Math.floor(Math.random() * 10)
      answer.push(numeric[random_number])
    }
    console.log(answer)
}
numeric_prompt();

function special_characters() { 

  var special = window.prompt("Would you like to use special characters?")
    special = special.toLocaleLowerCase() 

  if ((special === "yes") || (special === "no")){
    window.alert("Are you sure you meant " + special + "?")
    console.log(special)
    }else {
    special_characters()
  }
  if (special === "yes") {
    var random_special = Math.floor(Math.random() * 8)
    answer.push(symbol[random_special])
  }
  console.log(answer)
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
generateBtn.addEventListener("click", writePasswordanswer);