const removeFromArray = function(array, ...element) // ... three dots are used to capture other arguments and formatted as an array
{
    let length = array.length;
    let eLength = element.length;
    let newArray = [];
    if (eLength === 1) {
        for (let i = 0; i < length; i++) {
            if (array[i] === element[0]) {
                continue;
            } else {
                newArray.push(array[i]);
            }
        }
        return newArray;
    } else if (eLength > 1) {
        for (let i = 0; i < length; i++) {
            let matchFound = false;
            for (const el of element) {
                if (array[i] === el) {
                    matchFound = true;
                    break;
                }
            }
            if (!matchFound) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    } else {
        return array;
    }
    
};

// Do not edit below this line
module.exports = removeFromArray;
