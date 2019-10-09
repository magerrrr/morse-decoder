const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codedString = new String(expr);
    
    let LettersArray = [];
    let decodedString = '';

    let letter = 0;
    for (let i = 0; i < codedString.length; i += 10) {
        codedSymbol = codedString.substr(i, 10);
        codedSymbol = getPunctuationMarks(codedSymbol);
        LettersArray.push(codedSymbol);
        LettersArray[letter] == ' ' ? decodedString += ' ' : decodedString += MORSE_TABLE[LettersArray[letter]];
        letter++;
    }
    
    function getPunctuationMarks(encryptedString){
        encryptedString = encryptedString.replace(/\*{10}/g, ' ');
        encryptedString = encryptedString.replace(/00/g, "");
        encryptedString = encryptedString.replace(/10/g, ".");
        encryptedString = encryptedString.replace(/11/g, "-");
        return encryptedString;
    }
    
    return decodedString;
}

module.exports = {
    decode
}