"use strict";

function showMessage() {
  const greeting = "Welcome";
  const watchGreeting = greeting;
  debugger; // Add watchGreeting to VS Code's Watch panel here.
  console.log(watchGreeting);
}

console.log("Strict mode rejects the original undeclared greeting assignment with ReferenceError.");
console.log("Declaring greeting with const keeps it inside showMessage instead of creating a global.");
showMessage();
