"use strict";

const requestedLimit = Number(process.argv[2]);
const limit = Number.isInteger(requestedLimit) && requestedLimit > 0 ? requestedLimit : 5;

for (let row = 1; row <= limit; row += 1) {
  let line = "";
  for (let column = 1; column <= row; column += 1) {
    line += "* ";
  }
  debugger; // Watch row, column, and line while stepping through the loops.
  console.log(line.trim());
}

for (var varRow = 1; varRow <= limit; varRow += 1) {
  var varLine = "";
  for (var varColumn = 1; varColumn <= varRow; varColumn += 1) {
    varLine += "* ";
  }
  console.log(varLine.trim());
}

console.log("Run `node q6.js 4` to print four rows; no argument uses the default of 5.");
console.log(`After var loop: row=${varRow}, column=${varColumn}; var variables remain function-scoped.`);
console.log("The pattern is the same, but let keeps each loop variable block-scoped.");
