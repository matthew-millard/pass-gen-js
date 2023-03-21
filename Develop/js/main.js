var button = document.querySelector('#generate')
var passwordText = document.querySelector('#password')
var password = []

var characterTypes = {
	lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	specialChars: ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'],
}

function writePassword() {
	var numOfChars = Math.round(prompt('How many characters long would you like your password to be?'))
	var lowerChars = prompt('Would you like your password to contain lowercase letters? yes / no').trim().toUpperCase()
	var upperChars = prompt('Would you like your password to contain uppercase letters? yes / no').trim().toUpperCase()
	var numberChars = prompt('Would you like your password to contain numbers? yes / no').trim().toUpperCase()
	var specialChars = prompt('Would you like your password to include special characters? yes / no').trim().toUpperCase()
	var errorMessages = []

	if (!numOfChars || numOfChars < 8 || numOfChars > 128) {
		errorMessages.push('Password must contain a minimum of 8 characters and a maximum of 128.')
	}

	if (!lowerChars) {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include lowercase characters in your password.')
	} else if (lowerChars !== 'YES' && lowerChars !== 'NO') {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include lowercase characters in your password.')
	}

	if (!upperChars) {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include uppercase characters in your password.')
	} else if (upperChars !== 'YES' && upperChars !== 'NO') {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include uppercase characters in your password.')
	}

	if (!numberChars) {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include numbers in your password.')
	} else if (numberChars !== 'YES' && numberChars !== 'NO') {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include numbers in your password.')
	}

	if (!specialChars) {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include special characters in your password.')
	} else if (specialChars !== 'YES' && specialChars !== 'NO') {
		errorMessages.push('Please enter either "yes" or "no" if you would like to include special characters in your password.')
	}

	if (lowerChars === 'NO' && upperChars === 'NO' && numberChars === 'NO' && specialChars === 'NO') {
		errorMessages.push('Password must include at least one character type.')
		console.log(errorMessages)
	}

	if (errorMessages.length > 0) {
		passwordText.value = ''
		showErrors(errorMessages)
		return
	}
	generatePassword(numOfChars, lowerChars, upperChars, numberChars, specialChars)
	passwordText.value = password.join('')
}

button.addEventListener('click', writePassword)

// Generate Password function
function generatePassword(numOfChars, lowerChars, upperChars, numberChars, specialChars) {
	var charactersCombined = []

	if (lowerChars === 'YES') {
		charactersCombined.push(...characterTypes.lowercase)
	}

	if (upperChars === 'YES') {
		charactersCombined.push(...characterTypes.uppercase)
	}

	if (numberChars === 'YES') {
		charactersCombined.push(...characterTypes.numbers)
	}

	if (specialChars === 'YES') {
		charactersCombined.push(...characterTypes.specialChars)
	}
	createPassword(charactersCombined, numOfChars)
	return password
}

// Create Password
function createPassword(charactersCombined, numOfChars) {
	for (var i = 0; i < numOfChars; i++) {
		password.push(charactersCombined[Math.floor(Math.random() * charactersCombined.length)])
	}
}

// Show errors function
function showErrors(errorMessages) {
	var errorList = document.querySelector('.error-messages__list')
	errorMessages.forEach(error => {
		var li = document.createElement('li')
		errorList.appendChild(li).innerText = error
	})
}

// Clear errors function
function clearErrors() {}
