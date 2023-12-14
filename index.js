function encode(input) {
    
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const encodedArray = input.split('').map((char) => {
        
        const charIndex = alphabet.indexOf(char) + 1;

        if (charIndex % 2 === 0) {
            const oppositeChar = alphabet.charAt(alphabet.length - charIndex);
            return char + oppositeChar;
        } else {
            const oppositeChar = alphabet.charAt(alphabet.length - charIndex);
            console.log(oppositeChar)
            return oppositeChar;

        }
    });

    return encodedArray.join('');
}


console.log(encode("ABC"));