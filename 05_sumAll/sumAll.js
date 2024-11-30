const sumAll = function(firstNum, secNum) {
    let total = 0;
    let smallNum, bigNum;
    if ((firstNum > 0 && secNum > 0) && (Number.isInteger(firstNum) && Number.isInteger(secNum))) {
        if (firstNum > secNum) {
            bigNum = firstNum;
            smallNum = secNum;
        } else if (firstNum < secNum) {
            bigNum = secNum;
            smallNum = firstNum;
        }
        for ( smallNum; smallNum <= bigNum; smallNum++) {
            total += smallNum;
        }
        return total;
    } else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;
