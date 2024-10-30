let cart = [];
let cartCount = 0;

export function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        cartCount++;
        document.querySelector('.cart-count').innerText = cartCount;
        alert(`${product.title} has been added to your cart!`);
    }
}

