"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];
const cleanUsers = [];
const errors = [];

for (let index = 0; index < rawData.length; index += 1) {
  try {
    debugger; // Step here to see parsing continue after an error.
    const entry = JSON.parse(rawData[index]);
    if (entry.user === undefined || entry.age === undefined) {
      throw new Error("Missing user or age");
    }

    const age = Number(entry.age);
    if (!Number.isFinite(age)) throw new TypeError("Age must be numeric");
    cleanUsers.push({ user: entry.user, age });
  } catch (error) {
    errors.push({ line: index + 1, message: error.message });
    console.log(`Line ${index + 1}: ${error.message}`);
  }
}

const adults = cleanUsers.filter((user) => user.age >= 18);
console.log("Clean users:", cleanUsers);
console.log("Users aged 18 or older:", adults);
console.log("Audit errors:", errors);
