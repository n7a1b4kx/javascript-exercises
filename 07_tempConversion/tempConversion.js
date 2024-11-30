const convertToCelsius = function(temperature) {
  const CELSIUS = (temperature - 32) * 5 / 9;
  return CELSIUS;
};

const convertToFahrenheit = function(temperature) {
  const FAHRENHEIT = temperature * 9 / 5 + 32;
  return FAHRENHEIT;
};

console.log(convertToCelsius(100));

// Do not edit below this line
// module.exports = {
//   convertToCelsius,
//   convertToFahrenheit
// };
