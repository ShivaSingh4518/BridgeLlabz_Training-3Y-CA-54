"use strict";

if (typeof document === "undefined") {
  console.log("Run q7.js in a browser to use the login form.");
} else {
  document.body.innerHTML = `
    <form id="loginForm">
      <label>Username <input name="username"></label>
      <label>Password <input type="password" name="password"></label>
      <button>Log in</button><p id="message"></p>
    </form>`;

  document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const { username, password } = event.currentTarget.elements;
    const errors = [];

    if (!/^.{5,}$/.test(username.value)) errors.push("Username must be at least 5 characters.");
    if (!/^.{8,}$/.test(password.value)) errors.push("Password must be at least 8 characters.");
    if (!/[A-Z]/.test(password.value)) errors.push("Password needs an uppercase letter.");
    if (!/[a-z]/.test(password.value)) errors.push("Password needs a lowercase letter.");
    if (!/\d/.test(password.value)) errors.push("Password needs a number.");
    if (!/[^A-Za-z0-9]/.test(password.value)) errors.push("Password needs a special character.");

    document.querySelector("#message").textContent = errors.length ? errors.join(" ") : "Login validation passed.";
  });
}
