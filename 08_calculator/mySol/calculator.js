const add = function(a,b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentValue) => {
    return total + currentValue;
  });
};

const multiply = function(array) {
  return array.reduce((total, currentValue) => {
    return total * currentValue;
  });
};

const power = function(array) {
	return array.reduce((total, currentValue) => {
    return total ** currentValue;
  });
};

const factorial = function(array) {
	return array.reduce((total, currentValue) => {
    return total * currentValue;
  });
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};