const convertToCelsius = function(temperature) {
  const CELSIUS = (temperature - 32) * 5 / 9;
  let temp = Math.round(CELSIUS * 10) / 10;
  return temp;
};

const convertToFahrenheit = function(temperature) {
  const FAHRENHEIT = temperature * 9 / 5 + 32;
  let temp = Math.round(FAHRENHEIT * 10) / 10;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
