const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let new_str = "";
    for (let i = 0; i < num; i++){
        new_str += str;
    }
    return new_str;
};

// Do not edit below this line
module.exports = repeatString;
