"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidValues = [];

for (const value of apiData) {
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);
  const isBlankString = typeof value === "string" && value.trim() === "";
  const isValid = Number.isFinite(numberValue) && !isBlankString;

  console.log(`Value: ${stringValue} | Number: ${numberValue} | Boolean: ${booleanValue} | String: ${stringValue}`);

  if (isValid) {
    validNumbers.push(numberValue);
  } else {
    invalidValues.push(value);
  }
}

console.log("\nValid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidValues);
