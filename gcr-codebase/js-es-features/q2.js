"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
  try {
    if (!employee.name || employee.salary === undefined || employee.years === undefined) {
      throw new Error("Missing employee details");
    }

    const salary = Number(employee.salary);
    const years = Number(employee.years);

    if (!Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new TypeError("Salary and years must be valid numbers");
    }

    const bonus = salary * (years > 3 ? 0.1 : 0.05);
    console.log(`${employee.name} | Salary: ₹${salary} | Years: ${years} | Bonus: ₹${bonus}`);
  } catch (error) {
    console.log(`Could not calculate bonus: ${error.message}`);
  }
}
