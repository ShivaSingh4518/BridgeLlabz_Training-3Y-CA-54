let currentSalary = 50000;
let incrementRate = 10;
let salary = currentSalary;
let projection = [];

for (let year = 1; year <= 5; year++) {
    salary *= 1 + incrementRate / 100;
    salary = Math.round(salary);

    projection.push({
        Year: year,
        Salary: `₹${salary.toLocaleString("en-IN")}`
    });
}

console.table(projection);