"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class NegativeAmountError extends Error {
  constructor() {
    super("Amount cannot be negative");
    this.name = "NegativeAmountError";
  }
}

class MissingFieldError extends Error {
  constructor() {
    super("Transaction id or amount is missing");
    this.name = "MissingFieldError";
  }
}

class NullTransactionError extends Error {
  constructor() {
    super("Transaction entry is null");
    this.name = "NullTransactionError";
  }
}

const valid = [];
const invalid = [];

for (const transaction of transactions) {
  try {
    debugger; // Inspect the current transaction while debugging.
    if (transaction === null) throw new NullTransactionError();
    if (transaction.id === undefined || transaction.amount === undefined) throw new MissingFieldError();
    if (transaction.amount < 0) throw new NegativeAmountError();

    valid.push(transaction);
    console.log(`Transaction ${transaction.id} accepted: ₹${transaction.amount}`);
  } catch (error) {
    invalid.push({ transaction, type: error.name, message: error.message });
    console.log(`${error.name}: ${error.message}`);
  }
}

console.log("\nSuccessful transactions:", valid.length, valid);
console.log("Failed transactions:", invalid.length, invalid);
