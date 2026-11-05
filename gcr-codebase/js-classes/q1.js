"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price -= this.price * percent / 100;
  }

  getDetails() {
    return `#${this.id} | ${this.name} | ₹${this.price.toFixed(2)} | ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 65000, "Electronics"),
  new Product(2, "Notebook", 120, "Stationery"),
  new Product(3, "Office Chair", 8500, "Furniture")
];

products[0].applyDiscount(10);
console.log("Products above ₹1000:");
products.filter((product) => product.price > 1000).forEach((product) => console.log(product.getDetails()));
