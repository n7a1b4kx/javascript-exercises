const sumAll = function(firstNum, secNum) {
    let total = 0;
    let smallNum, bigNum;
    if (firstNum > 0 && secNum > 0) {
        if (firstNum > secNum) {
            bigNum = firstNum;
            smallNum = secNum;
        } else if (firstNum < secNum) {
            bigNum = secNum;
            smallNum = firstNum;
        }
    }
    for ( smallNum; smallNum <= bigNum; smallNum++) {
        total += smallNum;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
