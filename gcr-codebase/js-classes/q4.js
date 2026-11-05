"use strict";

class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  render(target) {
    target.innerHTML = `<form id="dynamicForm">${this.fields.map((field) => `
      <label>${field.label}<input type="${field.type}" name="${field.name}" required></label>`).join("")}
      <button>Submit</button><pre id="formOutput"></pre>
    </form>`;

    target.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      document.querySelector("#formOutput").textContent = JSON.stringify(this.getFormData(event.currentTarget), null, 2);
    });
  }

  getFormData(form) {
    return Object.fromEntries(new FormData(form).entries());
  }
}

if (typeof document === "undefined") {
  console.log("Run q4.js in a browser to generate the form.");
} else {
  const builder = new FormBuilder([
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
  ]);
  builder.render(document.body);
}
