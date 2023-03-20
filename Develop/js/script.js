// Assignment code here

// Get references to the #generate element
var getPasswordBtn = document.querySelector('#generate')
var passwordText = document.querySelector('#password')

// Write password to the #password input
function writePassword() {
	var length = Math.round(prompt('How many characters would you like your password to be?')) // Converts a string value to a number value and will round to a whole number if the user inputs a decimal number.
	var characters = prompt('Would you like your password to contain a combination of character types such as uppercase and lowercase letters and numbers? yes / no').trim().toUpperCase() // Returns a string value that is then converted to all uppercase to make it more streamline in test conditions.
	var specialCharacters = prompt('Would you like your password to include special characters? yes / no').trim().toUpperCase() // Returns a string value that is then converted to all uppercase to make it more streamline in test conditions. .trim() is used to remove any white space.
	var errorMessages = []

	// Check for length, type and value limits
	if (!length || typeof length !== 'number' || isNaN(length)) {
		errorMessages.push('Please enter a number. Password must contain a minimum of 8 characters and a maximum of 128.')
	} else if (length < 8 || length > 128) {
		errorMessages.push('Password must contain a minimum of 8 characters and a maximum of 128.')
	}

	// Check user's  input is valid for character type option
	if (!characters) {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include character types in your password.')
	} else if (characters !== 'YES' && characters !== 'NO') {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include character types in your password.')
	}

	// Check user's input is valid for special characters option
	if (!specialCharacters) {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include special characters in your password.')
	} else if (specialCharacters !== 'YES' && specialCharacters !== 'NO') {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include special characters in your password.')
	}

	// Check whether user has chosen to include at least one character type
	if (characters === 'NO' && specialCharacters === 'NO') {
		errorMessages.push('Password must include one of the following: different character types and/or special characters.')
	}

	// Check whether there are any errors before proceeding to the next step.
	if (errorMessages.length > 0) {
		passwordText.value = '' // clears the last displayed password.
		showErrorMessages(errorMessages)
		return // As there are errors, it will exit the function at this point.
	}

	var password = generatePassword(length, characters, specialCharacters)
	passwordText.value = password
}

// Add event listener to generate button
getPasswordBtn.addEventListener('click', writePassword)

function generatePassword(length, characters, specialCharacters) {
	var characterTypes = {
		lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
		uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
		number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		specialChars: ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'],
	}
	var randomPassword = []

	if (characters === 'YES' && specialCharacters === 'YES') {
		var allCharacter = characterTypes.lowercase.concat(characterTypes.uppercase, characterTypes.number, characterTypes.specialChars)
		for (var i = 0; i < length; i++) {
			randomPassword.push(allCharacter[Math.floor(Math.random() * allCharacter.length)])
		}
	} else if (characters === 'YES' && specialCharacters === 'NO') {
		var allCharacter = characterTypes.lowercase.concat(characterTypes.uppercase, characterTypes.number)
		for (var i = 0; i < length; i++) {
			randomPassword.push(allCharacter[Math.floor(Math.random() * allCharacter.length)])
		}
	} else {
		var allCharacter = characterTypes.specialChars
		for (var i = 0; i < length; i++) {
			randomPassword.push(allCharacter[Math.floor(Math.random() * allCharacter.length)])
		}
	}
	return randomPassword.join('')
}

function showErrorMessages(errorMessages) {
	var errorMessagesList = document.querySelector('.error-messages__list')
	errorMessages.forEach(error => {
		var li = document.createElement('li')
		errorMessagesList.appendChild(li).innerText = error
	})
}

// function displayPassword(password) {
// 	var p = document.createElement('p')
// 	textArea.appendChild(p).innerText = password
// 	console.log(p)
// }

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

//
