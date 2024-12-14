const fibonacci = function(number) {
    let sum = 0;
    let arr = createArray(0, number, 1);
};

function createArray(start, stop, step) {
    return Array.from(
        {length:stop+1}, (_, i) => start + i * step,
    );
}

console.log(fibonacci(4));

// Do not edit below this line
// module.exports = fibonacci;
