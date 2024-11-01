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

export function displayCartView() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    cart.listItems().forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.product.id} -
        <input type = "number" min = "1" value = "${item.quantity}" onchange = {"updateCart.quantity">
            <button class="button remove-item" data-name="${item.product.id}">Eemalda</button>
        `;

        cartItemsDiv.appendChild(itemDiv);
    });

    const totalDiv = document.getElementById('cart-total');
    totalDiv.innerHTML = `Kogusumma: ${cart.getTotal()}€`;
}

displayCartView();

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.getAttribute('data-id');
        const product = inventory.findProductById(productId);

        if (product && product.quantity > 0) {
            cart.addItem(product, 1);
            displayCart();
        } else {
            alert(`${productTitle} on otsas!`);
        }
    } else if (event.target.classList.contains('remove-item')) {
        const productId = event.target.getAttribute('data-id');
        cart.removeItem(productId);
        displayCart();
    } else if (event.target.classList.contains('backorder')) {
        const productId = event.target.getAttribute('data-id');
        const product = inventory.findProductByName(productId);
        if (product) {
            alert(`Tellimus toote ${product.title} kohta on esitatud!`);
        }
    }
});

document.getElementById('clear-cart').addEventListener('click', () => {
    cart.clearCartView();
    displayCart();
});

displayProducts();
displayCartView();