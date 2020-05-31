const add = function(number1, number2) {
  return number1 + number2;
};

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);
alert(result);

const subtract = function(subnumber1, subnumber2) {
  return subnumber1 - subnumber2;
};

const subnumber1 = parseInt(prompt("Enter a number:"));
const subnumber2 = parseInt(prompt("Enter another number:"));
const subresult = subtract(subnumber1, subnumber2);
alert(subresult);

const multiply = function(mulnumber1, mulnumber2) {
  return mulnumber1 * mulnumber2;
};

const mulnumber1 = parseInt(prompt("Enter a number:"));
const mulnumber2 = parseInt(prompt("Enter another number:"));
const mulresult = multiply(mulnumber1, mulnumber2);
alert(mulresult);

const divide = function(divnumber1, divnumber2) {
  return divnumber1 / divnumber2;
};

const divnumber1 = parseInt(prompt("Enter a number:"));
const divnumber2 = parseInt(prompt("Enter another number:"));
const divresult = divide(divnumber1, divnumber2);
alert(divresult);