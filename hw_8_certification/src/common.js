function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const cartCount = document.querySelector('.header__cart-count');
    
    if (cartCount) {
        if (cart.length > 0) {
            const totalQuantity = cart.reduce((sum, item) => {
                return sum + Number(item.quantity);
            }, 0);
            
            cartCount.textContent = totalQuantity;
        } else {
            cartCount.textContent = '0';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});
