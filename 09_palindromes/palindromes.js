const palindromes = function (str) {
    let clean_str_array = [];
    for(let i = 0; i < str.length; i++) {
        if (((str.charAt(i).toLowerCase() != str.charAt(i).toUpperCase()) && str.charAt(i) != ' ')  ||  charIsNum(str.charAt(i))) {
            clean_str_array.push(str.charAt(i).toLowerCase());
        }
    }
    return clean_str_array.join("") === clean_str_array.reverse().join("");
};

function charIsNum(c) {
    return c >= '0' && c <= '9';
}

// Do not edit below this line
module.exports = palindromes;
