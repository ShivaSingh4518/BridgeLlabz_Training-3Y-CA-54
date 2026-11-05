"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };

if (typeof document === "undefined") {
  console.log("Run q8.js in a browser to edit the user object.");
} else {
  document.body.innerHTML = `
    <form id="userForm">
      <label>Name <input name="name" value="${user.name}"></label>
      <label>Email <input name="email" type="email" value="${user.email}"></label>
      <label>Age <input name="age" type="number" value="${user.age}"></label>
      <button>Update</button>
    </form><pre id="userDetails"></pre>`;

  const details = document.querySelector("#userDetails");
  const showUser = () => details.textContent = JSON.stringify(user, null, 2);
  showUser();

  document.querySelector("#userForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    user.name = form.name.value.trim();
    user.email = form.email.value.trim();
    user.age = Number(form.age.value);
    showUser();
  });
}
