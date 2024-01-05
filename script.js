// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  const charSet = prompt(
    `How many characters do you want your password to contain?`
  );
  const passwordLength = Number(charSet);

  if (passwordLength >= 8 && passwordLength <= 128) {
    const includeLowercase = confirm(
      `Do you want your password to have lower case letters?`
    );
    const includeUppercase = confirm(
      `Do you want your password to contain upper case letters?`
    );
    const includeNumeric = confirm(
      `Do you want your password to contain numerals?`
    );
    const includeSpecialChar = confirm(
      `Do you want your password to contain special letters?`
    );
    return {
      passwordLength,
      includeLowercase,
      includeUppercase,
      includeNumeric,
      includeSpecialChar,
    };
  } else {
    alert(
      `Your password should be no less than 8 characters or more than 128 characters long.`
    );
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword(options) {
  let allChars = "";
  let password = "";

  allChars += options.includeLowercase ? lowerCasedCharacters.join("") : "";
  allChars += options.includeUppercase ? upperCasedCharacters.join("") : "";
  allChars += options.includeNumeric ? numericCharacters.join("") : "";
  allChars += options.includeSpecialChar ? specialCharacters.join("") : "";

  for (let i = 0; i < options.passwordLength; i++) {
    const randomChar = getRandom(allChars);
    password += randomChar;
  }
  return password;
}

const passwordOptions = getPasswordOptions();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var displayPassword = generatePassword(passwordOptions);
  var passwordText = document.querySelector("#password");

  passwordText.value = displayPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
