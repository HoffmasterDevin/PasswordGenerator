// Assignment Code
var generateBtn = document.querySelector("#generate");
var charAlphString = "abcdefghijklmnopqrstuvwxyz";
//const charUpSting = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSpecialString = " !#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var charNumString = "1234567890";
var charPool = "";
var highNum = 128;
var lowNum = 8;
var passLength = 0;


//Variable determination

// Write password to the #password input
function isLengthValid() {
  console.log(passLength);
  return (8 <= passLength <= 128);
}


function isCharPoolValid() {
  return charPool.length > 0; 

}

function createCharPool () {
  checkUp = confirm("Would you like to add uppercase characters to the password?");
  if (checkUp) {
    charPool = charPool.concat(charAlphString.toUpperCase());
    console.log(charPool);
  }
  checkLow = confirm("Would you like to add lowercase characters to the password?");
  if (checkLow) {
    charPool = charPool.concat(charAlphString.toLowerCase());
  }
  checkSpecial = confirm("Would you like to add special characters to the password?");
  if (checkSpecial) {
    charPool = charPool.concat(charSpecialString);
  }
  checkNum = confirm("Would you like to add numeric characters to the password?");
  if (checkNum) {
    charPool = charPool.concat(charNumString);
  }
  if (!isCharPoolValid()) {
    alert("Please select at least 1 character type");
    createCharPool();
  }

}

function setLength() {
  var passLength = parseInt(prompt("How many characters in the password? (8-128):", "enter number"));

}

function writePassword() {
  createCharPool();
  setLength();


//passwordText.value = password;
var password = makePassword();
console.log(password);
//  var passwordText = document.querySelector("#password");
//   passwordText.textContent = "test";
}

function makePassword(length) {
  var result = "";
  var charactersLength = charPool.length;
  for (var i = 0; i < length; i++) {
    result += charPool.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result;
  console.log(makePassword(charPool));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


if (8 <= passLength <= 128) {
} else if (isNaN(passLength)){
  alert("Please enter a valid number");
  setLength();
} else {
  alert("Please enter a valid number");
  setLength();
};