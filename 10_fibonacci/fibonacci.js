const fibonacci = function(n) {
    if ( n < 0) return "OOPS"
    if (n == 0) return 0;
    if (n <= 2) return 1;

    let one = 1;
    let two = 1;
    let res = 1;

    for (let i = 2; i < n; i++){
        res = one + two;
        one = two;
        two = res;

    }
    return res;
};

// Do not edit below this line
module.exports = fibonacci;
