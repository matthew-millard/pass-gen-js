// Assignment code here

// Get references to the #generate element
var getPasswordBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
	var length = Math.round(prompt('How many characters would you like your password to be?')) // Converts a string value to a number value and will round to a whole number if the user inputs a decimal number.
	var characters = prompt('Would you like your password to contain characters such as uppercase and lowercase letters and or numbers? (yes/no)').toUpperCase() // Returns a string value that is then converted to all uppercase to make it more streamline in test conditions.
	var specialCharacters = prompt('Would you like your password to include special characters? yes / no').toUpperCase() // Returns a string value that is then converted to all uppercase to make it more streamline in test conditions.
	var errorMessages = []

	// Check for length, type and value limits
	if (!length || typeof length !== 'number' || isNaN(length)) {
		errorMessages.push('Not a number. Try again!')
	} else if (length < 8 || length > 128) {
		errorMessages.push('Password must contain a minimum of 8 characters and a maximum of 128!')
	}

	// Check user's  input is valid for character type option
	if (!characters) {
		errorMessages.push('Invalid input, ye dumb fuck!')
	} else if (characters !== 'YES' && characters !== 'NO') {
		errorMessages.push('Again, ye dumb fuck! Enter either yes or fucking no!')
	}

	// Check user's input is valid for special characters option
	if (!specialCharacters) {
		errorMessages.push('User did not enter a valid input.')
	} else if (specialCharacters !== 'YES' && specialCharacters !== 'NO') {
		errorMessages.push('Again, ye dumb fuck! Enter either yes or fucking no --- special characters!')
	}
	console.log(length)
	console.log(typeof length)
	console.log(characters)
	console.log(typeof characters)
	console.log(specialCharacters)
	console.log(typeof specialCharacters)
	console.log(errorMessages)
}

// Add event listener to generate button
getPasswordBtn.addEventListener('click', writePassword)

// Pseudo Code

// Click "Get Password"
// function writePassword() {
//
// Prompts
// 1. Choose the amount of character you would like your password to be created with.
// Use trim() to remove any spaces
//
// - Password must be at least 8 characters
// - Password cannot contain more than 128 character
//
// 2. Would you like your password to contain character types, such as, lowercase, uppercase, and numeric values? Please type yes or no.
// - Use trim() to remove any spaces
// - Convert to .upperCase()
// - Check if the user has made a valid input, if not, present a message to the user.
//
// 3. Would you like your password to contain special characters, such as,  " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".
// - Use trim() to remove any spaces
// - Convert to .upperCase()
// - Check if the user has made a valid input, if not, present a message to the user.
//
// 4. Password must contain at least one at least one character type.
//
//
// var password = generatePassword()
// var passwordText = document.querySelector('#password')

// passwordText.value = password
