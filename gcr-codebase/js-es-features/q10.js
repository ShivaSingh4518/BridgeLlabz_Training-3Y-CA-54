"use strict";

function outer() {
  console.log(count);
  var count = 5;

  const inner = () => {
    console.log(count);
    var count = 10;
    console.log("Inner count after assignment:", count);
  };

  debugger; // The call stack is global -> outer -> inner.
  inner();
  console.log("Outer count after inner:", count);
}

console.log("Prediction: the first two logs are undefined because each var is hoisted in its own function scope.");
outer();
console.log("Changing inner to an arrow keeps lexical this, but its local var still has a separate hoisted scope.");
