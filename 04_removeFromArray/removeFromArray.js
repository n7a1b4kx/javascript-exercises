const removeFromArray = function(array, ...element) // ... three dots are used to capture other arguments and formatted as an array
{
    let length = array.length;
    let newArray = [];
    if (element.length === 1) {
        for (let i = 0; i < length; i++) {
            if (array[i] === element[0]) {
                continue;
            } else {
                newArray.push(array[i]);
            }
        }
        return newArray;
    } else {
        for (let i = 0; i < length; i++) {
            for (const el of element) {
                if (array[i] === el) {
                    continue;
                } else {
                    newArray.push(array[i]);
                }
            }
        }
    }
    
};

// Do not edit below this line
module.exports = removeFromArray;
