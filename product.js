// product.js

document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon img'); // Select the cart icon image
    const cartCountElement = document.getElementById('cart-count'); // Select the cart count element
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Update cart count on page load
    updateCartIcon();

    // Handle add-to-cart button clicks
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            // Add item to cart
            cartItems.push({ name: productName, price: productPrice });
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Update cart count
            updateCartIcon();
        });
    });

    function updateCartIcon() {
        // Update cart icon image with the number of items
        const cartItemCount = cartItems.length;
        if (cartCountElement) {
            cartCountElement.textContent = cartItemCount;
        }
        if (cartIcon) {
            cartIcon.setAttribute('alt', `Cart (${cartItemCount})`);
        }
    }
});
