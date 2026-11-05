let expenses = [5000, 1500, 8000, 2000, 1000];

let total = 0;

for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

console.log(`Total Expenses: ₹${total.toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${finalAmount.toFixed(2)}`);