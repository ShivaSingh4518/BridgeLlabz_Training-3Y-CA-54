let bonus = 5000;
let isPermanent = false;

function calculateSalary() {
  let salary = 40000;
  let isPermanent = true;

  if (isPermanent) {
    salary += bonus;
  }

  console.log(`Total salary: ${salary}`);
  isPermanent = false;
  console.log(`Local permanent status changed to: ${isPermanent}`);
}

calculateSalary();
console.log(`Global bonus: ${bonus}`);
console.log(`Global permanent status: ${isPermanent}`);
