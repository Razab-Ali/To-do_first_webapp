let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const totalDisplay = document.getElementById('total');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    
    totalDisplay.textContent = `Total: $${total}`;
}

// Redirect to a payment page on checkout
document.getElementById('checkoutButton').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        // Redirect to payment page (replace with your actual payment page URL)
        window.location.href = 'payment.html';
    }
});
