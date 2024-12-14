const fibonacci = function(number) {
    let newArr = [];
    for (let i = 0; i < number; i++) {
        (i === 0) ? newArr.push(1): (i === 1) ? newArr.push(1): newArr.push(newArr[i-1] + newArr[i-2]);
    }
    console.log(newArr);
}

fibonacci(6);

// Do not edit below this line
// module.exports = fibonacci;
