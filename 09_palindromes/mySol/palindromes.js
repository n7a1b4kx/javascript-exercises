const palindromes = function (phrase) {
    let length = phrase.length;
    let forward = '', backward = '';
    for (let i = 0; i < length; i++) {
        (phrase[i] !== '.' && phrase[i] !== ',' && phrase[i] !== '!' && phrase[i] !== '?' && phrase[i] !== ' ') ? forward += phrase[i]: console.log(`\t>${phrase[i]}<`);
    }
    for (let i = length - 1; i >= 0; i--) {
        backward += forward[i];
    }
    return forward === backward;
};

// Do not edit below this line
module.exports = palindromes;
