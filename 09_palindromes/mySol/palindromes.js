const palindromes = function (phrase) {
    let length = phrase.length;
    let forward = '', backward = '';
    for (let i = 0; i < length; i++) {
        (phrase[i] !== '.' && phrase[i] !== ',' && phrase[i] !== '!' && phrase[i] !== '?' && phrase[i] !== ' ') ? forward += phrase[i]: null;
    }

    let forwardLength = forward.length - 1;
    for (let i = forwardLength; i >= 0; i--) {
        backward += forward[i];
    }
    return forward.toLowerCase() === backward.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
