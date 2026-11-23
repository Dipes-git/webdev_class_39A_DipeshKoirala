
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    return "Error (Division by zero)";
  }
  return a / b;
};

const calculate = (a, b, operationCallback) => {
  return operationCallback(a, b);
};

const a = 20;
const b = 10;

console.log(`Addition: ${a} + ${b} = ${calculate(a, b, add)}`);
console.log(`Subtraction: ${a} - ${b} = ${calculate(a, b, subtract)}`);
console.log(`Multiplication: ${a} * ${b} = ${calculate(a, b, multiply)}`);
console.log(`Division: ${a} / ${b} = ${calculate(a, b, divide)}`);


console.log(`Division by zero test: ${a} / 0 = ${calculate(a, 0, divide)}`);
