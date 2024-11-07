import { displayProducts } from "./categoryView.js";

let cart = [];

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
    displayCartCount();
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

    const total = getTotal();
    cartSection.innerHTML += `<p>Kogusumma: ${total} €</p>`;

    cartSection.appendChild(cartItemsContainer);
    mainDiv.appendChild(cartSection);

// Loob ostukorvi pandud tootele koguse redikeerimise lahtri ja "Eemalda" nupu
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.title} -
        `;

        const quantityContainer = document.createElement("div");
        quantityContainer.className = "quantity-container";
    
        const decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.onclick = () =>
          updateCartItemQuantity(item.id, item.quantity - 1);
    
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = item.quantity;
        quantityInput.min = 1;
        quantityInput.onchange = (e) =>
          updateCartItemQuantity(item.id, parseInt(e.target.value));
    
        const increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.onclick = () =>
          updateCartItemQuantity(item.id, item.quantity + 1);
    
        quantityContainer.appendChild(decreaseButton);
        quantityContainer.appendChild(quantityInput);
        quantityContainer.appendChild(increaseButton);
    
        itemDiv.appendChild(quantityContainer);
    
        // Eemaldamisnupp
        const removeButton = document.createElement("button");
        removeButton.textContent = "Eemalda";
        removeButton.setAttribute("data-id", item.id);
        removeButton.setAttribute("class", "remove-item");
    
        itemDiv.appendChild(removeButton);

    cartItemsContainer.appendChild(itemDiv);
    });

    const totalDiv = document.getElementById('cart-total');
}

    export const updateCartItemQuantity = (productId, newQuantity) => {
        const product = cart.find((item) => item.id === productId);
        if (product) {
          product.quantity = newQuantity > 0 ? newQuantity : 1; // Vähemalt 1 toode
        displayCartCount();
          displayCartView(); // uuenda vaadet
        }
      };


// Eemalda ostukorvi nimekirjast ühe kaupa
export function removeItem(productId) {
    cart = cart.filter((item) => item.id != productId);
    displayCartView();
    displayCartCount()
  };
  export const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

export function displayCartCount() { 
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').innerText = count;
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
        removeItem(productId);
    } else if (event.target.classList.contains('backorder')) {
        const productId = event.target.getAttribute('data-id');
        const product = inventory.findProductByName(productId);
        if (product) {
            alert(`Tellimus toote ${product.title} kohta on esitatud.`);
        }
    }
});

// export const getTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };