import { addToCart } from './cartView.js';

let cart = [];
let cartCount = 0;

// Funktsioon toote ostukorvi limiseks + annab teate, mis toode on lisatud
export function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        cartCount++;
        document.querySelector('.cart-count').innerText = cartCount;
        alert(`${product.title} has been added to your cart!`);
    }
}

// Funktsioon ostukorvi kuvamiseks, sisestusväljal saab kogust redigeerida
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

// Kliki sündmus. Lisab ühe toote id põhiselt, kui toodet on rohkem kui 0. Kui >0, siis annab teate: "Toote nimi" on otsas! ; Tellimus toote kohta on esitatud.
document.addEventListener('onclick', (event) => {
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
            alert(`Tellimus toote ${product.title} kohta on esitatud.`);
        }
    }
});

// Tühjenda ostukorv
document.getElementById('clear-cart').addEventListener('click', () => {
    cart.clearCart();
    displayCart();
});

displayProducts();
displayCart();