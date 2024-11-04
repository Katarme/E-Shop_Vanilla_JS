import { displayProducts } from "./categoryView.js";

let cart = [];
let cartCount = 0;

// Funktsioon toote ostukorvi limiseks + annab teate, mis toode on lisatud
export function addToCart(productId, products) {
console.log("add to cart -->" + productId)
const product = products.find(p => p.id === parseInt(productId));
if (product) {
    cart.push({product, quantity: 1});
    cartCount++;
    console.log("cart count --> " + cartCount);
    document.querySelector('.cart-count').innerText = cartCount;
    console.log(cart);
    alert(`${product.title} has been added to your cart!`);
}
}

// Funktsioon ostukorvi kuvamiseks, sisestusväljal saab kogust redigeerida
export function displayCartView() {
    const mainDiv = document.getElementById('products-container');
    mainDiv.innerHTML = "";
    
    const cartSection = document.createElement("div");
    cartSection.innerHTML = "<h2>Ostukorv</h2>";
    const cartItemsContainer = document.createElement("div");
    cartItemsContainer.id = "cart-items";
    cartSection.appendChild(cartItemsContainer);
    mainDiv.appendChild(cartSection);

    cart.forEach(item => {
        console.log(item);
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.id} -
        <input type = "number" min = "1" value = "${item.quantity}" onchange = {"updateCart.quantity">
            <button class="button remove-item" data-name="${item.id}">Eemalda</button>
        `;

        cartItemsContainer.appendChild(itemDiv);
    });

    const totalDiv = document.getElementById('cart-total');
    // totalDiv.innerHTML = `Kogusumma: ${cart.getTotal()}€`;

    // const total = getTotal();
    // mainContent.innerHTML += `<p>Kogusumma: ${total} €</p>`;
}

// Kliki sündmus. Lisab ühe toote id põhiselt, kui toodet on rohkem kui 0. Kui >0, siis annab teate: "Toote nimi" on otsas! ; Tellimus toote kohta on esitatud.
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
            alert(`Tellimus toote ${product.title} kohta on esitatud.`);
        }
    }
});

// Tühjenda ostukorv
// document.getElementById('clear-cart').addEventListener('click', () => {
//     cart.clearCart();
//     displayCart();
// });