const convertToCelsius = function(far) {
  return Number(((5*(far -32))/9).toFixed(1)).valueOf();
};

const convertToFahrenheit = function(cel) {
  return Number((((9*cel)/5) + 32).toFixed(1)).valueOf();
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
