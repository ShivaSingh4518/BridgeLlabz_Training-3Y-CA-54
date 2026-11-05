"use strict";

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(coupon) {
    const match = /^(SAVE|DISC)(\d{1,2})$/.exec(coupon.toUpperCase());
    if (!match) throw new Error("Coupon must look like SAVE20 or DISC10.");

    const discount = Number(match[2]);
    if (discount < 1 || discount > 100) throw new Error("Coupon percentage must be between 1 and 100.");
    return this.getTotal() * (1 - discount / 100);
  }
}

const cart = new Cart();
cart.addItem("Headphones", 2000, 1);
cart.addItem("USB Cable", 300, 2);

console.log("Cart total: ₹" + cart.getTotal());
try {
  console.log("Total after SAVE20: ₹" + cart.applyCoupon("SAVE20"));
} catch (error) {
  console.log(error.message);
}
