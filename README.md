# Cyclical Caesar Cipher Encoder

## Description
This project is a JavaScript implementation of a cyclical Caesar cipher that shifts each letter in a message by 15 positions in the alphabet, wrapping around from 'z' to 'a' as needed. It preserves capitalization, spaces, and punctuation, and does not use any direct alphabet arrays. The project includes a function that encodes any input string and prints the result.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation
To install and run this project locally:
1. Clone this repository:
   ```bash
   git clone https://github.com/Lukhanyo05/Gittask2.git
   cd Gittask2
   ```
2. Open the project folder in your code editor.
3. No additional dependencies are required—simply open the HTML file in your browser or use the JavaScript code in your own project.

## Usage
The main function of interest is `cyclicalCaesarCipher`. You can use it as follows:

```javascript
/**
 * Encodes a message using a cyclical Caesar cipher with a shift of 15.
 * @param {string} message - The message to encode.
 * @returns {string} - The encoded message.
 */
function cyclicalCaesarCipher(message) {
    return message.split('').map(char => {
        let code = char.charCodeAt(0);
        // For uppercase letters
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + 15) % 26) + 65);
        }
        // For lowercase letters
        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + 15) % 26) + 97);
        }
        // Non-alphabetic characters remain the same
        return char;
    }).join('');
}

// Example usage:
const original = "Hello, World!";
const encoded = cyclicalCaesarCipher(original);
console.log(encoded); // "Wtaad, Ldgas!"
``

## Credits
- [Lukhanyo05](https://github.com/Lukhanyo05)
