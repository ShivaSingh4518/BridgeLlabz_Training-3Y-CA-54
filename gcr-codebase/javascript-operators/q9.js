const numbers = [];
const results = [];

for (let number = 1; number <= 30; number += 1) {
  numbers.push(number);

  if (number % 3 === 0 && number % 5 === 0) {
    results.push("FizzBuzz");
  } else if (number % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

console.log(results);
