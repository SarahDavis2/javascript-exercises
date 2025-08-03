const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, item) => product * item, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(factorial) {
  let product = 1;
	for (let count = 1; count <= factorial; count++) {
    product *= count;
  }
  return product;
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
