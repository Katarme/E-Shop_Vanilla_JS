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

function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    cart.listItems().forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.product.name} -
        <input type = "number" min = "1" value = "${item.quantity}" onchange = {"updateCart.quantity">
            <button class="button remove-item" data-name="${item.product.name}">Eemalda</button>
        `;

        cartItemsDiv.appendChild(itemDiv);
    });

    const totalDiv = document.getElementById('cart-total');
    totalDiv.innerHTML = `Kogusumma: ${cart.getTotal()}€`;
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const productName = event.target.getAttribute('data-name');
        const product = inventory.findProductByName(productName);

        if (product && product.quantity > 0) {
            cart.addItem(product, 1);
            displayCart();
        } else {
            alert(`${productName} on otsas!`);
        }
    } else if (event.target.classList.contains('remove-item')) {
        const productName = event.target.getAttribute('data-name');
        cart.removeItem(productName);
        displayCart();
    } else if (event.target.classList.contains('backorder')) {
        const productName = event.target.getAttribute('data-name');
        const product = inventory.findProductByName(productName);
        if (product) {
            alert(`Tellimus toote ${product.name} kohta on esitatud!`);
        }
    }
});

document.getElementById('clear-cart').addEventListener('click', () => {
    cart.clearCart();
    displayCart();
});

displayProducts();
displayCart();

// Back nupp teha!

// Shopping cart ja cart js kokku?

// export class ShoppingCart {
//     constructor() {
//         this.items = [];
//     }

//     addItem(product, quantity) {
//         const existingItem = this.items.find(item => item.product.name === product.name);
        
//         if (existingItem) {
//             existingItem.quantity += quantity;
//         } else {
//             this.items.push({ product, quantity });
//         }
        
//         product.quantity -= quantity;
//     }

//     removeItem(productName) {
//         const itemIndex = this.items.findIndex(item => item.product.name === productName);
//         if (itemIndex > -1) {
//             const item = this.items[itemIndex];
//             item.product.quantity += item.quantity; // Tagasta toote kogus laosse
//             this.items.splice(itemIndex, 1);
//         }
//     }

//     getTotal() {
//         return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
//     }

//     listItems() {
//         return this.items;
//     }

//     clearCart() {
//         this.items.forEach(item => {
//             item.product.quantity += item.quantity; // Tagasta kõik tooted laoseisu
//         });
//         this.items = [];
//     }
// }

// // Example JavaScript to update cart count
// let cartCount = 0;

// // Function to add item to cart
// function addItemToCart() {
//     cartCount++;
//     document.querySelector('.cart-count').innerText = cartCount;
// }

// // Call this function when an item is added to the cart
// // addItemToCart();