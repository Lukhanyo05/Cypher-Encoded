/**
 * Caesar Cipher function to encode or decode text with a shift of 15.
 * 
 * @param {string} text - The input text to be encoded or decoded.
 * @param {string} mode - The mode of operation, either 'encode' or 'decode'.
 * @returns {string} The encoded or decoded text.
 */
function cipher(text, mode) {
    let result = ''; // Initialize an empty string to store the result
    const SHIFT_AMOUNT = 15; // Set the number of positions to shift letters in the cipher

    // Determine the direction of the shift based on the mode (encode or decode)
    const shift = mode === 'encode' ? SHIFT_AMOUNT : -SHIFT_AMOUNT;

    // Input validation
    if (mode !== 'encode' && mode !== 'decode') {
        throw new Error("Invalid mode. Use 'encode' or 'decode'.");
    }
    if (!text) {
        throw new Error("Input text is empty.");
    }

    // Iterate through each character in the input text
    for (let char of text) {
        if (/[a-zA-Z]/.test(char)) { // Check if the character is a letter
            // Determine the ASCII base value for the character (either 'a' or 'A')
            const base = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            // Convert character to a number (0-25) and apply the shift
            let newCharCode = (char.charCodeAt(0) - base + shift) % 26;

            // Handle negative newCharCode by wrapping around the alphabet
            if (newCharCode < 0) {
                newCharCode += 26; // Adjust to wrap around if negative
            }

            // Convert back to character and append to result
            const newChar = String.fromCharCode(newCharCode + base);
            result += newChar; // Append to result
        } else {
            // Non-letter characters (spaces, punctuation) remain unchanged
            result += char;
        }
    }

    return result; // Return the final encoded or decoded text
}

// Event listener for the button click
document.getElementById('processButton').addEventListener('click', function() {
    try {
        const inputText = document.getElementById('inputText').value; // Get input text
        const mode = document.querySelector('input[name="mode"]:checked').value; // Get selected mode
        const resultText = cipher(inputText, mode); // Call cipher function
        document.getElementById('resultText').value = resultText; // Display result
    } catch (error) {
        alert(error.message); // Handle errors gracefully
    }
});