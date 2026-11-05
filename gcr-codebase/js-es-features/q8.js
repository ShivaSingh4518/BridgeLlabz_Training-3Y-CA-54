"use strict";

const looseDemo = new Function("a", "a", "total = 10; return delete total;");

try {
  console.log("Without strict mode, duplicate parameters are allowed and delete returns:", looseDemo(5, 10));
} catch (error) {
  console.log("Non-strict error:", error.message);
}

try {
  new Function('"use strict"; function demo(a, a) { total = 10; delete total; }');
} catch (error) {
  console.log("Strict duplicate parameter error:", error.name, "-", error.message);
}

try {
  new Function('"use strict"; let total = 10; delete total;');
} catch (error) {
  console.log("Strict delete error:", error.name, "-", error.message);
}

function correctDemo(first, second) {
  const total = first + second;
  return total;
}

console.log("Correct ES6 version:", correctDemo(5, 10));
console.log("Strict mode forbids duplicate parameters, implicit globals, and deleting unqualified identifiers.");
