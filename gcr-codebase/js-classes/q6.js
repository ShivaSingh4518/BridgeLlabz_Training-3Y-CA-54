"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += this.salary * percent / 100;
  }
}

const employees = [
  new Employee(1, "Amit", "Engineering", 60000),
  new Employee(2, "Sara", "Design", 52000),
  new Employee(3, "Kiran", "Sales", 48000),
  new Employee(4, "Neha", "HR", 45000),
  new Employee(5, "Rohan", "Finance", 58000)
];

employees[0].applyBonus(10);
employees.forEach((employee) => console.log(`${employee.name}: ₹${employee.getAnnualSalary()} per year`));

const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log("Total annual payout: ₹" + totalAnnualPayout);
