import { displayProducts } from "./categoryView.js";

let cart = [];
let cartCount = 0;

// Funktsioon toote ostukorvi lisamiseks + annab teate, mis toode on lisatud
export function addToCart(product) {
    console.log("addToCart")
    const existingItem = cart.find(p => p.id === product.id);
    if (existingItem) {       
    existingItem.quantity++;
    }
    else {
    cart.push({...product, quantity: 1});
    }
    cartCount++;
    document.querySelector('.cart-count').innerText = cartCount;
    alert(`${product.title} has been added to your cart!`);
}

// Funktsioon ostukorvi kuvamiseks, sisestusväljal saab kogust redigeerida
export function displayCartView() {
    const mainDiv = document.getElementById('products-container');
    mainDiv.innerHTML = "";
    console.log("Osukorvi sisu", cart);
    const cartSection = document.createElement("div");
    cartSection.innerHTML = "<h2>Ostukorv</h2>";
    const cartItemsContainer = document.createElement("div");
    cartItemsContainer.id = "cart-items";
    cartSection.appendChild(cartItemsContainer);
    mainDiv.appendChild(cartSection);

// Eemaldab valitud tooted
    // const removeSelectedBtn = document.createElement('button');
    // removeSelectedBtn.innerText = 'Eemalda valitud tooted';
    // removeSelectedBtn.id = 'remove-selected-items';
    // cartSection.appendChild(removeSelectedBtn);
    
    // mainDiv.appendChild(cartSection);

// Loob ostukorvi pandud tootele koguse redikeerimise lahtri ja "Eemalda" nupu
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.title} -
        <input type = "number" min = "1" value = "${item.quantity}" onchange = {"updateCart.quantity">
        <button class="remove-item" data-id="${item.id}">Eemalda</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    const totalDiv = document.getElementById('cart-total');
}

// Eemalda ostukorvi nimekirjast
export function removeItem(productId) {
    cart = cart.filter((item) => item.id != productId);
    console.log(cart)
    displayCartView();
  };

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
        removeItem(productId);
        // displayCart();
    } else if (event.target.classList.contains('backorder')) {
        const productId = event.target.getAttribute('data-id');
        const product = inventory.findProductByName(productId);
        if (product) {
            alert(`Tellimus toote ${product.title} kohta on esitatud.`);
        }
    }
});