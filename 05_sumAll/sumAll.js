const sumAll = function(a, b) {
    if (a < 0 || b < 0) return "ERROR";
    if(typeof(a) != "number" || typeof(b) != "number") return "ERROR";
    let big = Math.max(a, b), small = Math.min(a, b), sum = 0;
    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
