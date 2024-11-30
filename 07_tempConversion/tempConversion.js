const convertToCelsius = function(temperature) {
  const CELSIUS = (temperature - 32) * 5 / 9;
  let temp = CELSIUS.toFixed(1);
  return temp;
};

const convertToFahrenheit = function(temperature) {
  const FAHRENHEIT = temperature * 9 / 5 + 32;
  let temp = FAHRENHEIT.toFixed(1);
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
