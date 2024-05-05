const removeFromArray = function() {
    let arr = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        let pos = arr.indexOf(arguments[i]);
        if (pos != -1) {
            arr.splice(pos, 1);
            // Catch possible duplicates of values
            arr = removeFromArray(arr, arguments[i]);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
