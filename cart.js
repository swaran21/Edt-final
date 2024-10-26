// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    const clearCartButton = document.getElementById('clear-cart-button');
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalPrice = 0;

    // Define image URLs corresponding to products
    const productImages = {
        'Recycled Tote Bag': 'https://plus.unsplash.com/premium_photo-1681498856888-2f3552c0b189?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVjeWNsZSUyMHRvdGUlMjBiYWd8ZW58MHx8MHx8fDA%3D',
        'Eco-friendly Notebook': 'https://plus.unsplash.com/premium_photo-1685287730333-fbb52ec222b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVjbyUyMGZyaWVuZGx5JTIwbm90ZWJvb2t8ZW58MHx8MHx8fDA%3D',
        'Recycled Plastic Pen': 'https://plus.unsplash.com/premium_photo-1673467011288-462c72c5ec69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVjeWNsZWQlMjAlMjBwbGFzdGljJTIwcGVufGVufDB8fDB8fHww'
    };

    function displayCartItems() {
        cartItemsContainer.innerHTML = ''; // Clear previous items
        totalPrice = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${productImages[item.name] || 'https://via.placeholder.com/80'}" alt="${item.name}"> <!-- Display product image -->
                <div>
                    <p>${item.name}</p>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            totalPrice += item.price;
        });

        // Update total price and item count
        cartTotalElement.textContent = totalPrice.toFixed(2);
        cartCountElement.textContent = cartItems.length;
    }

    function clearCart() {
        localStorage.removeItem('cartItems');
        cartItems = [];
        displayCartItems();
    }

    // Display cart items on page load
    displayCartItems();

    // Handle clear cart button click
    clearCartButton.addEventListener('click', clearCart);

    // Handle checkout button click
    checkoutButton.addEventListener('click', () => {
        if (cartItems.length > 0) {
            // Clear cart
            localStorage.removeItem('cartItems');
            alert('Order placed successfully!');
            location.reload(); // Refresh page
        } else {
            alert('Your cart is empty!');
        }
    });
});
