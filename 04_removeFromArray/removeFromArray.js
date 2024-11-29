const removeFromArray = function(array, element) {
    let length = array.length;
    let newArray = [];
    for (let i = 0; i < length; i++) {
        if (array[i] === element) {
            continue;
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
