const productName = " wireless headphones PRO ";
const cleanedTitle = productName
  .trim()
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")
  .replace("Pro", "Pro Edition");

console.log(`Product: ${cleanedTitle}`);
console.log(`Length: ${cleanedTitle.length}`);
