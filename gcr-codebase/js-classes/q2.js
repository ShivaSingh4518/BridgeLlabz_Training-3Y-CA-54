"use strict";

if (typeof document === "undefined") {
  console.log("Run q2.js in a browser to use the student registration form.");
} else {
  document.body.innerHTML = `
    <form id="studentForm">
      <label>Name <input name="name"></label><small></small>
      <label>Email <input name="email"></label><small></small>
      <label>Phone <input name="phone"></label><small></small>
      <label>Password <input type="password" name="password"></label><small></small>
      <button>Register</button><p id="result"></p>
    </form>`;

  const rules = {
    name: { pattern: /^[A-Za-z ]+$/, message: "Use alphabets only." },
    email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email." },
    phone: { pattern: /^\d{10}$/, message: "Phone must contain exactly 10 digits." },
    password: { pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{1,}$/, message: "Add an uppercase letter, number, and special character." }
  };

  document.querySelector("#studentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    for (const [fieldName, rule] of Object.entries(rules)) {
      const input = event.currentTarget.elements[fieldName];
      const valid = rule.pattern.test(input.value.trim());
      input.style.border = `2px solid ${valid ? "green" : "red"}`;
      input.nextElementSibling.textContent = valid ? "Valid" : rule.message;
      isValid &&= valid;
    }

    document.querySelector("#result").textContent = isValid ? "Registration successful." : "Please correct the highlighted fields.";
  });
}
