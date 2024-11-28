const reverseString = function(word) {
    let reverse = '';
    let length = word.length;
    for (let i = 0; i < length; i++) {
        reverse += word[length - i - 1];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
