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
    let newArr = [];
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        newArr.push(expr.slice(i, i + 10));
    }
    for (let i = 0; i < newArr.length; i++) {
        result += getLetter(newArr[i]);
    }
    return result;
}

function getLetter(code) {
    if (code == '**********') {
        return ' ';
    }

    let arr = [];
    let morze = '';

    for (let i = 0; i < 10; i + 2) {
       arr.push(code.slice(i, i += 2));
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == '10') {
            morze += '.';
        }
        if(arr[i] == '11') {
            morze += '-';
        }
    }

    return MORSE_TABLE[morze];
}

module.exports = {
    decode
}
