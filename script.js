// Initialize an empty cart and total price
let cart = [];
let total = 0;

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear current cart items

    // Display each item in the cart
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    // Update the cart count and total price
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}

// Add event listeners to each "Add to Cart" button
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement; // Get the parent product div
        const name = product.getAttribute('data-name'); // Get product name
        const price = parseFloat(product.getAttribute('data-price')); // Get product price

        // Add the product to the cart
        cart.push({ name, price });
        total += price; // Update total price
        updateCart(); // Update the cart display
    });
});

// Add event listener for the checkout button
document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length > 0) {
        alert(`Thank you for your purchase! Your total is $${total.toFixed(2)}.`);
        // Clear the cart after checkout
        cart = [];
        total = 0;
        updateCart(); // Update the cart display
    } else {
        alert('Your cart is empty! Please add items to your cart before checking out.');
    }
});