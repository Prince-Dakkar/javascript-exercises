const findTheOldest = function(peeps) {
    let olde = peeps.reduce( (a, b) => 
        (typeof(a.yearOfDeath) === "undefined" ? new Date().getFullYear() : a.yearOfDeath)-a.yearOfBirth
        >
        (typeof(b.yearOfDeath) === "undefined" ? new Date().getFullYear() : b.yearOfDeath)-b.yearOfBirth ? a : b);
    return olde;
};

// Do not edit below this line
module.exports = findTheOldest;
