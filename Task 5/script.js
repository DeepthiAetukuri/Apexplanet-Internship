const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: "$299", image: "C:\Users\Deept\OneDrive\Desktop\Task 5\smartphone.jpg" },
  { id: 2, name: "Laptop", category: "electronics", price: "$799", image: "C:\Users\Deept\OneDrive\Desktop\Task 5\Laptop.jpg" },
  { id: 3, name: "T-Shirt", category: "clothing", price: "$19", image: "C:\Users\Deept\OneDrive\Desktop\Task 5\t-shirt.jpg" },
  { id: 4, name: "Jeans", category: "clothing", price: "$49", image: "C:\Users\Deept\OneDrive\Desktop\Task 5\Jeans.jpg" },
  { id: 5, name: "Smartwatch", category: "electronics", price: "$199", image: "C:\Users\Deept\OneDrive\Desktop\Task 5\Smartwatch.jpg" },
  { id: 6, name: "Jacket", category: "clothing", price: "$89", image: "C:\Users\Deept\OneDrive\Desktop\Task 5\Jacket.jpg" },
];

const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" loading="lazy" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    productList.appendChild(card);
  });
}

// Initial display
window.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});

// Filter logic
categoryFilter.addEventListener("change", () => {
  const selectedCategory = categoryFilter.value;
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);
  displayProducts(filteredProducts);
});
