"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
  constructor(operation) {
    super(`Unsupported operation: ${operation}`);
    this.name = "InvalidOperationError";
  }
}

function calculate(operation, first, second) {
  switch (operation) {
    case "add": return first + second;
    case "subtract": return first - second;
    case "divide":
      if (second === 0) throw new Error("Cannot divide by zero");
      return first / second;
    case "power": return first ** second;
    case "root":
      if (first < 0) throw new Error("Cannot find the root of a negative number");
      return Math.sqrt(first);
    default: throw new InvalidOperationError(operation);
  }
}

for (const operation of operations) {
  try {
    console.log(`${operation}: ${num1} and ${num2} = ${calculate(operation, num1, num2)}`);
  } catch (error) {
    console.log(`${operation}: ${error.name} - ${error.message}`);
  }
}
