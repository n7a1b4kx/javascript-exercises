const fibonacci = function(number) {
    let fiboArray = [];
    number = parseInt(number);
    if (number === 0) {
        return 0;
    } else if (number < 0) {
        return 'OOPS';
    }
    for (let i = 0; i < number; i++) {
        (i === 0) ? fiboArray.push(1): (i === 1) ? fiboArray.push(1): fiboArray.push(fiboArray[i-1] + fiboArray[i-2]);
    }
    return fiboArray.at(-1);
}

// Do not edit below this line
module.exports = fibonacci;
