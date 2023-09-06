const productsContainer = document.getElementById("products");

productsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const dataId = e.target.closest(".product").getAttribute("data-id");
    addToCart(dataId);
  }
});

// Function to add a product to the cart
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = document.querySelector(`[data-id="${productId}"]`);
  const productName = product.querySelector("h2").textContent;
  const productPrice = product.querySelector("p").textContent;

  // Check if the product is already in the cart
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

// Function to remove a product from the cart
export function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartElement.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `
                        <p>${item.name} - ${item.price} x ${item.quantity}</p>
                        <button class='removeBtn'>Remove</button>
                    `;
      cartElement.appendChild(itemElement);

      const removeButton = itemElement.querySelector(".removeBtn");
      removeButton.addEventListener("click", () => {
        removeFromCart(item.id);
      });
    });
  }
}

// Load cart data on page load
window.addEventListener("load", () => {
  updateCart();
});
