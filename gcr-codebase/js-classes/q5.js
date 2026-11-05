"use strict";

if (typeof document === "undefined") {
  console.log("Run q5.js in a browser to use the movie booking form.");
} else {
  document.body.innerHTML = `
    <form id="bookingForm">
      <label>Name <input name="name"></label>
      <label>Email <input name="email"></label>
      <label>Seats <input name="seats" type="number"></label>
      <button>Book tickets</button><p id="ticket"></p>
    </form>`;

  document.querySelector("#bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const seats = Number(form.elements.seats.value);
    const validName = /^[A-Za-z ]+$/.test(name);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validSeats = Number.isInteger(seats) && seats >= 1 && seats <= 10;

    if (!validName || !validEmail || !validSeats) {
      document.querySelector("#ticket").textContent = "Enter a valid name, email, and 1 to 10 seats.";
      return;
    }

    const booking = { name, email, seats };
    document.querySelector("#ticket").textContent = `Ticket booked for ${booking.name}: ${booking.seats} seat(s).`;
    console.log(booking);
  });
}
