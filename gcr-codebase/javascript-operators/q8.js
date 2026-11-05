const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

let discountedItemsTotal = 0;

for (const product of cart) {
  let discountedPrice = product.price;

  if (product.category === "electronics") {
    discountedPrice *= 0.9;
  } else if (product.category === "fashion") {
    discountedPrice *= 0.95;
  }

  discountedItemsTotal += discountedPrice;
}

const originalCartTotal = cart.reduce((total, product) => total + product.price, 0);
const finalTotal = originalCartTotal > 50000 ? discountedItemsTotal * 0.95 : discountedItemsTotal;

console.log(`Cart total before discounts: ₹${originalCartTotal.toFixed(2)}`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
